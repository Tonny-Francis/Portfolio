#!/bin/bash

# Verifica se todas as variáveis necessárias foram fornecidas
if [[ -z "${OCI_CLI_USER}" || -z "${OCI_LINK_PRIVATE_KEY}" || -z "${OCI_CLI_FINGERPRINT}" || -z "${OCI_CLI_TENANCY}" || -z "${OCI_CLI_REGION}" ]]; then
  echo "Erro: Variáveis necessárias não foram definidas."
  exit 1
fi

# Faz download da chave privada
wget -O oci_api_key.pem "${OCI_LINK_PRIVATE_KEY}"

# Cria dir .oci
mkdir /home/runner/.oci

# Pega realpath da chave privada e move para ~/.oci
OCI_CLI_KEY_FILE=$(realpath oci_api_key.pem)
mv ${OCI_CLI_KEY_FILE} /home/runner/.oci/oci_api_key.pem

# Cria o arquivo de configuração
cat <<EOF > config
[DEFAULT]
user=${OCI_CLI_USER}
fingerprint=${OCI_CLI_FINGERPRINT}
key_file=/home/runner/.oci/oci_api_key.pem
tenancy=${OCI_CLI_TENANCY}
region=${OCI_CLI_REGION}
EOF


mv config /home/runner/.oci/config

echo "Arquivo de configuração 'config' criado com sucesso."