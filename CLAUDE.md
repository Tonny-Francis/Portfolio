# Portfolio — CLAUDE.md

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + `@tailwindcss/typography`
- **Theme:** Dark-only (off-black `#0a0a0a` base, no toggle)
- **Deploy target:** tonnysousa.dev

## Design system

**Direção:** developer-coded, não editorial. Sans-bold pesado para headlines, mono para chrome técnico (labels, datas, paths). Sem display serif — referências são leerob.com / paco.me / rauno.me, não revistas.

**Tipografia (2 famílias, todas via `next/font/google`):**
- `font-sans` → Inter — corpo de texto, UI, **headlines (font-bold tracking-tight)**
- `font-mono` → JetBrains Mono — labels, datas, números, navegação, paths estilo CLI

Variáveis CSS expostas: `--font-sans`, `--font-mono` (em `app/layout.tsx`).

**Paleta (em `tailwind.config.ts`):**
```
bg            #0a0a0a   ← background base
bg-elevated   #111111   ← hover, cards elevados
bg-subtle     #1a1a1a
fg            #fafafa   ← texto principal
fg-muted      #a1a1a1   ← texto secundário
fg-subtle     #525252   ← texto terciário, datas
border        #262626
border-subtle #1f1f1f
```

Sem cores de accent. Único toque colorido: `emerald-400` no status pill do Hero.

**Animações:**
- `animate-fade-up` (CSS keyframe) — entrada padrão
- `animate-marquee` — usado no marquee de skills
- Classe `.reveal` + `.is-visible` — usada pelo `<Reveal>` component

## Estrutura de arquivos

```
app/
  layout.tsx           # Carrega 3 fontes, monta <Nav />, body com bg-bg
  page.tsx             # Homepage — Hero → Skills → Projects → Experience → Contact → Footer
  globals.css          # Base dark, .section-label, .section-title, .marquee-mask, prose tweaks
  blog/
    page.tsx           # Lista de posts (SSG)
    [slug]/page.tsx    # Post individual (SSG via generateStaticParams)

content/
  posts/
    *.md               # Posts em markdown com frontmatter

src/
  components/
    Nav.tsx            # Navbar fixa, mono, links: Work / Experience / Blog / Contact
    Hero.tsx           # Asymmetric layout, nome em Instrument Serif gigante, status pill
    Skills.tsx         # Grid + marquee horizontal de skills (label "01 / Skills")
    Projects.tsx       # Cards com gradient mesh placeholders (label "02 / Selected Work")
    Experience.tsx     # Timeline em rows (label "03 / Experience") + bloco Education
    Contact.tsx        # Big headline + email CTA + grid de canais (label "04 / Contact")
    Footer.tsx         # Mono links, copyright, location
    Reveal.tsx         # Wrapper com IntersectionObserver — aplica .reveal/.is-visible
  lib/
    posts.ts           # Leitura/parsing de posts e renderização markdown → HTML
  assets/              # Bug.png, Favicon.png, Tonny.jpeg
  types/types.ts
```

## Convenções visuais (importantes)

- **Section headers** seguem o mesmo padrão em todas as seções:
  ```
  [section-label mono "0X / Nome"] ─────── (linha horizontal)
  [section-title — sans bold, tracking-tight, sem itálico]
  ```
- **Espaçamento entre seções:** `py-32` + `border-t border-border-subtle`
- **Container padrão:** `max-w-6xl mx-auto px-6`
- **Hover states:** preferir mudança de cor (`text-fg` ↔ `text-fg-muted`) ou borda. Evitar transformações (italic, scale).
- **Scroll animation:** envolver blocos importantes em `<Reveal delay={0|80|120|...}>`. Delays são em ms.
- **Não usar emojis** em UI.
- **Toques CLI** (`~/blog`, `cd ../`, `[2025]`) são bem-vindos como chrome técnico; cuidado pra não exagerar e virar tema "terminal".

## Como a homepage funciona

`app/page.tsx` é uma single-page com scroll. As seções são montadas em ordem:

```
Hero (#about) → Skills (#skills) → Projects (#work) → Experience (#experience) → Contact (#contact) → Footer
```

⚠️ **IDs:** Projects usa `id="work"` (não `#projects`). O Nav linka pra `/#work`.

## Dados

Todo o conteúdo (skills, projetos, experiências, contatos) está hardcoded como arrays de objetos TS dentro dos próprios componentes. Sem CMS, sem API.

Exceção: Projects tem o campo `gradient` em cada item — é uma string CSS `background-image` (radial/linear gradients) que serve como placeholder visual. Substituir por screenshots reais via `next/image` é uma melhoria futura.

---

## Blog

Posts vivem como arquivos `.md` em `content/posts/`. Renderização é 100% server-side em build (SSG) — nada de markdown processado no cliente.

**Pipeline de renderização (`src/lib/posts.ts`):**
```
.md → gray-matter (frontmatter) → unified
  → remark-parse → remark-gfm → remark-rehype
  → rehype-pretty-code (shiki, tema "github-dark-dimmed")
  → rehype-stringify → HTML string
```

A HTML resultante é injetada via `dangerouslySetInnerHTML` dentro de `.prose.prose-invert` (Tailwind Typography modo dark).

**Frontmatter esperado:**
```yaml
---
title: "Título do post"
date: "2026-04-28"          # ISO, ordenação e display em pt-BR
description: "Subtítulo curto"
tags: ["devops", "k3s"]      # opcional
---
```

**Slug:** vem do nome do arquivo (`bem-vindo.md` → `/blog/bem-vindo`). Sem campo de slug no frontmatter.

**Como adicionar um post novo:**
1. Criar `content/posts/<slug>.md` com frontmatter
2. `git commit && git push` — Next rebuilda e o post aparece

**Idioma:** posts em PT-BR. Datas formatadas com `toLocaleDateString('pt-BR')`.

**Decisões intencionais (não revisitar sem motivo):**
- Sem MDX — markdown puro é suficiente pra notas técnicas
- Sem seção "Latest Posts" na homepage ainda — adicionar quando houver 3+ posts
- Sem comentários, analytics ou newsletter
- Sem CMS — `git commit` é o fluxo de publicação
- Sem light mode — o portfolio inteiro é dark-only por design
