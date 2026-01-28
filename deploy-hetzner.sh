#!/bin/bash
# Script de Deploy Seguro para Hetzner
# Este script sincroniza arquivos do WSL para Hetzner
# SEM substituir dados críticos (.env, data/, logs/)

set -e  # Parar em caso de erro

echo "=========================================="
echo "  Deploy Seguro para Hetzner"
echo "=========================================="
echo ""
echo "⚠️  IMPORTANTE: Este script NÃO substitui:"
echo "   ❌ Arquivo .env (variáveis de ambiente)"
echo "   ❌ Pasta data/ (banco de dados)"
echo "   ❌ Logs locais"
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se está no diretório correto
if [ ! -f "docker-compose.yml" ]; then
    echo -e "${RED}❌ Erro: docker-compose.yml não encontrado${NC}"
    echo "Execute este script do diretório do projeto:"
    echo "  cd /home/gabriel/projects/rastreadores"
    exit 1
fi

# Verificar se há alterações não commitadas
if ! git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}⚠️  Atenção: Há alterações não commitadas${NC}"
    echo "Deseja continuar mesmo assim? (s/N)"
    read -r resposta
    if [ "$resposta" != "s" ] && [ "$resposta" != "S" ]; then
        echo "Deploy cancelado. Faça commit das alterações primeiro."
        exit 1
    fi
fi

echo -e "${GREEN}📦 Sincronizando arquivos...${NC}"
echo ""

# Sincronizar arquivos (excluindo dados sensíveis)
rsync -avz --progress \
  -e "ssh -i ~/.ssh/hetzner_ed25519 -o StrictHostKeyChecking=no" \
  --exclude='.git' \
  --exclude='data' \
  --exclude='logs' \
  --exclude='.env' \
  --exclude='*.log' \
  --exclude='.DS_Store' \
  . gabriel@46.62.210.165:~/projects/rastreadores/

echo ""
echo -e "${GREEN}✅ Arquivos sincronizados com sucesso!${NC}"
echo ""
echo -e "${YELLOW}📋 Próximos passos:${NC}"
echo ""
echo "1. Conecte no Hetzner:"
echo "   ssh -i ~/.ssh/hetzner_ed25519 gabriel@46.62.210.165"
echo ""
echo "2. Navegue para o diretório:"
echo "   cd ~/projects/rastreadores"
echo ""
echo "3. Reinicie os containers (SEM apagar volumes):"
echo "   docker-compose down"
echo "   docker-compose up -d"
echo ""
echo "4. Verifique os logs:"
echo "   docker-compose logs -f traccar"
echo ""
echo -e "${GREEN}✨ Deploy concluído!${NC}"
