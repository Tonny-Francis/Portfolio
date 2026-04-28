---
title: "De ideia a produto: como a IA encurtou meses para semanas no Aivory"
date: "2026-04-28"
description: "Como construí um SaaS completo sozinho usando IA como copiloto de arquitetura, par de programação e professor sob demanda — com exemplos reais de decisões técnicas."
tags: ["ia", "arquitetura", "saas", "claude", "devops"]
---

Você tem a ideia. Tem a capacidade técnica. O que falta é tempo — e, muitas vezes, conhecimento em áreas que você nunca tocou.

Construir um SaaS sozinho é uma equação cruel: backend, frontend, infraestrutura, integrações externas, billing, autenticação, tempo real, IA, documentação. E ainda centenas de decisões de arquitetura sem uma equipe para validar.

Este artigo não é sobre "a IA escreve código por você". É sobre como usei IA como copiloto de arquitetura, par de programação permanente, professor sob demanda e acelerador de decisões técnicas — para tirar o **Aivory** do papel sozinho, em pouco mais de um ano, com a reta final amplificada de forma absurda nas últimas semanas.

## O problema: um SaaS completo, solo, do zero

O Aivory é uma plataforma SaaS de automação de atendimento via WhatsApp com IA: resposta automática 24/7, qualificação de leads, agendamento, CRM integrado, base de conhecimento com RAG, campanhas de broadcast e status page pública sobre a API oficial Meta. Nasceu em 16 de abril de 2025. Solo desde o primeiro dia.

Boa parte desse ano não foi escrevendo código de produto — foi adquirindo conhecimento que eu não tinha. Eu vinha de backend e frontend confortavelmente, mas precisei aprender:

- **Kubernetes do zero** — cluster K3s na Hetzner via `hetzner-k3s`, Traefik como ingress, HashiCorp Vault para secrets, HPA, CronJobs, gestão de manifests
- **Operação de PostgreSQL** com replicação read/write, **RabbitMQ** em cluster, observabilidade com Prometheus + Grafana
- **Ecossistema WhatsApp Business API** — verificação de app, Embedded Signup, webhooks com HMAC-SHA256, templates aprovados, restrição de janela de 24h
- **Arquiteturas de RAG** — embeddings, busca híbrida, tool use em LLMs

Cada uma dessas áreas, sozinha, é uma carreira. Eu não tinha o luxo de ser especialista em nenhuma — só de ser bom o suficiente em todas para o produto funcionar de verdade.

### O escopo real do que foi construído

Para dimensionar o problema:

**Backend (`api-aivory-core`)** — Node.js + TypeScript 5.9 strict + Express 5 + Prisma 7 + PostgreSQL com read/write split. 30+ endpoints REST em 20 domínios, JWT com 2FA TOTP obrigatório, RBAC com 4 roles, Socket.IO v4 para inbox em tempo real, pipeline de IA com RAG híbrido (BM25 + vetorial + RRF), 3 provedores de LLM com roteamento por plano, webhook Meta com HMAC-SHA256 e deduplicação por `wamid`, transcrição via Whisper, visão por imagem, tool use, compactação de contexto, memória cross-conversa, billing via Asaas, status page com 6 health checks ao vivo, 15+ CronJobs.

**Frontend (`aivory`)** — Next.js 16 + React 19 + Tailwind + MUI v6. Dashboard com KPIs ao vivo, inbox com SLA visual, CRM Kanban com fractional indexing, playground de IA, agenda com Google Calendar OAuth, campanhas de broadcast, relatórios com export CSV, tour interativo.

**Infraestrutura** — K3s na Hetzner, Vault para secrets, GitHub Actions, Prometheus + Grafana.

**Worker N8N** — workflow de 35 nós para processamento de mensagens.

Um time de 4–5 devs levaria 6 a 9 meses nisso.

## A solução: IA como copiloto, em seis papéis

Não usei a IA como gerador de código. Usei como extensão do meu próprio raciocínio.

### 1. Arquiteto de segunda opinião

Toda decisão técnica relevante virou conversa. Não "me dê o código disso", mas **"estou pensando em resolver X dessa forma — quais são os trade-offs?"**.

Exemplo concreto: precisava de busca semântica para a base de conhecimento dos agentes. A solução óbvia seria `pgvector`, mas o cluster já estava configurado e adicionar a extensão exigiria downtime e mudança de manifesto K8s.

A IA me ajudou a raciocinar uma alternativa: **embeddings L2-normalizados em `float4[]` (PostgreSQL nativo) com dot product via `UNNEST`** — equivalente a cosine similarity, sem extensão. Zero downtime, zero dependência nova.

Quando depois precisei de busca keyword também, a mesma conversa levou ao design do índice BM25 com `tsvector` + trigger `BEFORE INSERT OR UPDATE` + `plainto_tsquery('portuguese')`, mesclado com a busca vetorial via Reciprocal Rank Fusion. Sistema de busca híbrido nível produção em um único handler.

### 2. Detector de armadilhas antes de cair nelas

Algumas das economias mais valiosas não foram em código escrito — foram em erros que **não** cometi.

Ao integrar N8N com RabbitMQ, comecei com o trigger `amqpTrigger` (AMQP 1.0, biblioteca `rhea`). As mensagens não chegavam. Horas depois, a IA me alertou: o `amqplib` que eu usava no backend publica em **AMQP 0.9.1** — protocolo incompatível. Solução: `rabbitmqTrigger` (0.9.1 nativo). Troca de um nó. Problema resolvido.

O `CLAUDE.md` do projeto hoje tem uma seção *"Erros corrigidos durante setup (não repetir)"* com 7 armadilhas documentadas — desde IF nodes do N8N que retornam o objeto inteiro em vez do valor, até URLs com template literals em backtick que o HTTP Request v4 não suporta.

### 3. Gerador de boilerplate com contexto

A parte que mais consome tempo num projeto estruturado não é o código difícil — é o repetitivo. Handler, model Zod, route, tipos TypeScript, migration Prisma. Para cada novo domínio, esse ciclo levava 20–30 minutos de digitação e 0 de raciocínio.

Com IA, eu descrevia comportamento, regras de negócio, campos do modelo e permissões de role — e recebia o esqueleto completo já no padrão do projeto (`HttpResponse`, `HttpStatus`, `prismaRead/prismaWrite`, `safeParse`, sem `try/catch` porque Express 5 propaga). Meia hora virou 5 minutos de revisão. Multiplique por 20 domínios.

### 4. Documentação viva como memória compartilhada

O maior problema de trabalhar sozinho é que o contexto do projeto vive só na sua cabeça. Volta após 3 dias e metade evaporou.

Resolvi mantendo `CLAUDE.md` detalhados em cada projeto — documentação técnica que serve tanto para consulta humana quanto como contexto para a IA em cada nova sessão. O do `api-aivory-core` tem hoje 600+ linhas descrevendo cada endpoint com método/path/roles, regras de negócio críticas, decisões de arquitetura e seus *porquês*, armadilhas documentadas, estado de implementado vs. pendente.

Efeito colateral positivo: cada nova conversa com a IA começa com contexto completo. A documentação que seria boa prática de qualquer jeito virou também o mecanismo que torna a IA mais eficaz.

### 5. Revisor sem ego

Antes de fechar uma feature, passo o código pela IA com pergunta cirúrgica. Não *"revise meu código"* — isso gera resposta genérica. Mas:

> *"Esse handler de webhook responde 200 antes de processar — há cenário onde isso causa inconsistência?"*
>
> *"Esse fractional indexing vai ter problema quando dois usuários arrastarem simultaneamente?"*

Pergunta cirúrgica retorna revisão cirúrgica. Já peguei edge cases que virariam bugs em produção.

### 6. Professor sob demanda

Essa é a parte mais subestimada quando se fala de IA para devs.

Eu não sabia Kubernetes quando comecei. Não sabia configurar Traefik como ingress, escrever HPA, debugar pods em `CrashLoopBackOff`, integrar Vault com sidecar injection, ou montar um CronJob com `agent-pre-populate-only: true` (essa flag, aliás, foi descoberta numa sessão de debug — sem ela, o sidecar do Vault mantém o pod do Job vivo indefinidamente).

O mesmo com a Graph API da Meta: Embedded Signup, fluxo OAuth `code → access_token → wabaId`, restrição de janela de 24h, diferença entre mensagem livre e template aprovado, validação HMAC-SHA256 do header `X-Hub-Signature-256` com `crypto.timingSafeEqual` — **não comparação de string**, vulnerabilidade de timing attack que a IA me alertou antes que eu cometesse.

Cursos online ensinam o caminho feliz. Documentação oficial mostra os endpoints. A IA me ajudou no que está entre os dois: as decisões reais, os erros específicos do meu setup, o contexto de produção. Aprendi infraestrutura escrevendo infraestrutura.

## Implementação: três decisões que a IA ajudou a solidificar

### Compactação de contexto de conversa

Conversas longas com agentes de IA têm um problema clássico: histórico cresce indefinidamente, tokens explodem e o modelo "esquece" o início.

A solução convencional seria truncar. A elegante: quando o número de mensagens não-resumidas supera um threshold (40 no Aivory), um job *fire-and-forget* resume o excedente via `gpt-4o-mini` (max 500 tokens), salva em `Conversation.contextSummary` e avança um watermark `summarizedUpToAt`. Re-compactações futuras consolidam o resumo anterior com as novas — nunca substituem.

O design de *rolling summary* emergiu de uma pergunta: *"como sistemas de memória de longo prazo em agentes resolvem isso?"*. A IA trouxe o conceito, eu adaptei ao contexto do projeto.

### Fractional indexing sem biblioteca

O Kanban de Leads e Vendas precisava de drag-and-drop com persistência de ordem. A abordagem com `position INTEGER` tem o problema clássico: ao inserir entre dois adjacentes, você renumera a coluna toda.

Fractional indexing resolve com `position FLOAT` — você sempre calcula um número entre dois outros. A complexidade real está nos edge cases: gap entre floats menor que `0.001` exige renumeração, inserção em coluna vazia, movimento simultâneo.

Implementei do zero, sem biblioteca, com transação atômica que detecta o gap, renumera com step `1000` e só então calcula a nova posição. A IA ajudou a mapear os edge cases — eu validei e implementei.

### RAG com search híbrido

O pipeline de Retrieval-Augmented Generation passou por três evoluções:

1. Busca puramente vetorial (dot product em `float4[]`)
2. Busca keyword com `tsvector` + `plainto_tsquery`
3. Fusion via Reciprocal Rank Fusion: `score = Σ 1/(60 + rank)` para cada resultado de cada método

A evolução 3 emergiu de pergunta concreta: *"busca vetorial é boa para semântica mas perde keywords exatas, como 'Plano Plus' ou nomes de produtos. O que fazer?"*. A resposta trouxe hybrid search e RRF, simples o suficiente para SQL puro e matematicamente justo entre os dois rankings.

## Desafios e trade-offs: o que a IA não fez

**Não tomou nenhuma decisão de produto.** Quando precisei decidir se cobraria por mensagens ou por créditos de tokens, a IA listou trade-offs. A decisão foi minha, baseada em modelo de negócio e UX.

**Não substituiu o debugging real.** Quando o N8N parou de consumir mensagens do RabbitMQ em produção, foi inspeção manual: logs do pod, `kubectl exec`, análise do protocolo. A IA ajudou a interpretar saídas — mas a investigação foi minha.

**Não tem acesso ao cluster.** Mudanças no N8N e no cluster exigem VPN. Limitação real e documentada: durante sessões sem VPN, implemento a lógica no backend e documento exatamente o que precisa ser configurado quando a VPN estiver disponível.

**Não substitui o julgamento.** Em várias ocasiões a IA sugeriu abstrações prematuras, generalizações desnecessárias ou soluções mais complexas do que o problema exigia. O filtro *"isso resolve o problema de hoje sem criar problema de amanhã?"* é intransferível.

## Resultados

Os números do Aivory hoje:

- ~8.000 linhas de TypeScript no backend
- ~15.000 linhas no frontend
- 40+ migrations Prisma
- 35 nós no workflow N8N
- 4 microsserviços (core, admin-api, admin-frontend, api-asaas)
- Infra K8s completa com 10+ CronJobs

A linha do tempo, honesta:

- **Abr/2025 → Out/2025** — fundação, aprendizado, MVP funcional. Cluster K3s no ar, webhooks Meta, autenticação, billing, primeiras conversas roteadas via IA. Sem plano Max. Progresso linear.
- **Nov/2025 → Mar/2026** — consolidação. Inbox em tempo real, RAG, CRM, agenda, status page. IA usada esporadicamente.
- **Abr/2026 (últimas semanas)** — plano Max + créditos avulsos. Saltei de ~60% para 90%. Tool use, hybrid RAG, compactação de contexto, memória cross-conversa, módulo de campanhas, painel admin, status page completo. **O delta absoluto desse mês foi maior que o de qualquer trimestre anterior.**

O custo de IA nessa reta final foi uma fração do que seria contratar até mesmo um dev júnior por um mês. E o ROI é amplificado pelo fato de que cada decisão de arquitetura tomada melhor hoje evita semanas de retrabalho amanhã.

A métrica mais honesta não é linhas de código — é **decisões por semana**. Em projeto solo sem IA, são talvez 5–10 decisões técnicas relevantes antes de ficar travado na execução. Com IA como copiloto, esse número sobe para 30–40, porque o ciclo *validar → iterar → implementar* fica muito mais curto.

## Boas práticas que ficaram

Depois de meses usando IA como ferramenta central:

**Dê contexto antes de perguntar.** *"Como implementar autenticação JWT?"* retorna tutorial. *"Tenho JWT com 2FA, o token temporário tem `multifactor: false`, como garantir que nenhuma rota sensível seja acessível sem o segundo fator?"* retorna solução cirúrgica.

**Documente enquanto desenvolve, não depois.** O `CLAUDE.md` não é documentação post-hoc — é a memória do projeto que alimenta cada nova sessão. Quanto mais rico, mais específica é a ajuda.

**Use para validar, não só para gerar.** *"Esse design tem algum problema?"* costuma valer mais que *"escreva isso pra mim"*. A IA encontra edge cases, inconsistências e anti-patterns que você passa batido por estar dentro do problema.

**Pergunte o porquê, não só o como.** *"Como faço X?"* → código. *"Por que X é o padrão aqui, e quando ele falha?"* → entendimento. O segundo tipo de pergunta constrói arquiteto; o primeiro constrói digitador.

**Trate como par, não como oráculo.** A IA erra. Sugere coisas que não se aplicam ao seu contexto, às vezes com confiança excessiva. Modelo mental correto: *"par experiente com quem penso em voz alta"*, não *"resposta definitiva que executo sem questionar"*.

## Conclusão

O Aivory é um produto real, com usuários reais, construído por uma pessoa só ao longo de pouco mais de um ano. Não porque eu sou excepcional — mas porque o ciclo entre ideia, decisão e implementação ficou muito mais curto, e porque me dispus a aprender o que precisava ser aprendido.

A IA não escreveu o Aivory. Eu escrevi o Aivory. Ela me permitiu escrever mais rápido, errar menos, tomar melhores decisões de arquitetura e dominar áreas inteiras (Kubernetes, Meta API, RAG) que eu não conhecia no começo da jornada — porque o tempo que eu gastaria pesquisando, lendo doc dispersa e reescrevendo foi redirecionado para o que importa: construir produto.

E aqui vai a parte honesta: a IA não substitui o ano de fundação. Sem o cluster K8s já no ar, sem os modelos Prisma desenhados, sem o domínio do produto internalizado, nenhum plano Max do mundo teria me levado de 0 a 90% em semanas. O que ela faz é **amplificar** — e a amplificação é proporcional à qualidade da base que você traz.

Se você é dev solo, trabalha em startup enxuta ou simplesmente quer entregar mais no mesmo tempo: invista nas duas pontas. Construa o conhecimento real, persistente, em áreas adjacentes às que você domina. E, na hora de executar, use IA como copiloto sem cerimônia.

Projetos complexos ficaram ao alcance de uma pessoa disposta a aprender. Isso muda o que é possível construir.
