# Workflow de Desenvolvimento e Deploy

## 📋 Princípios do Workflow

1. **Desenvolvimento no WSL**: Todas as alterações são feitas e testadas primeiro no WSL
2. **Teste Local**: Validar tudo funcionando antes de enviar para produção
3. **Deploy Seguro**: Enviar para Hetzner apenas quando tudo estiver funcionando
4. **Proteção de Dados**: **NUNCA** substituir/apagar dados do Hetzner (base de dados em uso)
5. **Documentação**: Sempre documentar alterações relevantes no Git

## 🔄 Processo de Desenvolvimento

### 1. Desenvolvimento no WSL

```bash
cd /home/gabriel/projects/rastreadores

# Fazer alterações nos arquivos
# Testar localmente
docker compose up -d
docker compose logs -f traccar

# Verificar funcionamento
curl http://localhost:8082/api/server
```

### 2. Commit e Push para Git

```bash
# Adicionar alterações
git add .

# Commit com mensagem descritiva
git commit -m "Descrição clara da alteração"

# Push para repositório
git push
```

### 3. Deploy para Hetzner (APENAS quando tudo estiver funcionando)

⚠️ **ATENÇÃO**: Este processo **NÃO** substitui dados do Hetzner!

```bash
# Sincronizar arquivos (exclui .env e data/)
cd /home/gabriel/projects/rastreadores
rsync -avz -e "ssh -i ~/.ssh/hetzner_ed25519 -o StrictHostKeyChecking=no" \
  --exclude='.git' \
  --exclude='data' \
  --exclude='logs' \
  --exclude='.env' \
  . gabriel@46.62.210.165:~/projects/rastreadores/

# Conectar no Hetzner e reiniciar containers
ssh -i ~/.ssh/hetzner_ed25519 gabriel@46.62.210.165
cd ~/projects/rastreadores
docker-compose down
docker-compose up -d
docker-compose logs -f traccar
```

## ⚠️ REGRAS IMPORTANTES

### ❌ NUNCA FAZER:

1. **NUNCA** substituir o arquivo `.env` do Hetzner
2. **NUNCA** substituir/apagar a pasta `data/` do Hetzner
3. **NUNCA** fazer `docker-compose down -v` no Hetzner (apaga volumes)
4. **NUNCA** fazer alterações diretas no Hetzner sem testar no WSL primeiro

### ✅ SEMPRE FAZER:

1. **SEMPRE** testar no WSL antes de enviar para Hetzner
2. **SEMPRE** usar `rsync` com exclusões apropriadas
3. **SEMPRE** documentar alterações no Git
4. **SEMPRE** verificar logs após deploy no Hetzner

## 📁 Estrutura de Arquivos

### Arquivos que SÃO sincronizados:
- `docker-compose.yml`
- `config/traccar.xml`
- `README.md`
- `*.md` (documentação)
- `.env.example`
- `.gitignore`

### Arquivos que NÃO são sincronizados:
- `.env` (variáveis de ambiente específicas de cada ambiente)
- `data/` (dados do banco de dados - **CRÍTICO**)
- `logs/` (logs locais)
- `.git/` (repositório Git)

## 🔧 Alterações no docker-compose.yml

Quando alterar o `docker-compose.yml`:

1. **WSL**: Testar localmente
2. **Git**: Commit e push
3. **Hetzner**: 
   ```bash
   # Sincronizar arquivo
   rsync docker-compose.yml gabriel@46.62.210.165:~/projects/rastreadores/
   
   # Reiniciar containers (NÃO usar -v para não apagar volumes!)
   ssh gabriel@46.62.210.165
   cd ~/projects/rastreadores
   docker-compose down  # Sem -v!
   docker-compose up -d
   ```

## 🗄️ Gerenciamento de Banco de Dados

### WSL (Desenvolvimento)
- Pode resetar/limpar dados conforme necessário
- Usar para testes e desenvolvimento

### Hetzner (Produção)
- **DADOS EM USO** - NUNCA apagar!
- Contém dispositivos cadastrados e dados de rastreamento
- Backup recomendado antes de alterações significativas

### Backup do Banco (Hetzner)

```bash
# Fazer backup antes de alterações importantes
ssh -i ~/.ssh/hetzner_ed25519 gabriel@46.62.210.165
cd ~/projects/rastreadores
docker-compose exec database mysqldump -u traccar -p traccar > backup_$(date +%Y%m%d_%H%M%S).sql
```

## 📝 Checklist de Deploy

Antes de fazer deploy para Hetzner:

- [ ] Alterações testadas e funcionando no WSL
- [ ] Alterações commitadas no Git
- [ ] Verificado que `.env` não será sobrescrito
- [ ] Verificado que `data/` não será substituído
- [ ] Backup do banco feito (se alteração crítica)
- [ ] Documentação atualizada

## 🚀 Script de Deploy Seguro

Criar script `deploy-hetzner.sh` (opcional):

```bash
#!/bin/bash
# Script para deploy seguro no Hetzner

echo "=== Deploy Seguro para Hetzner ==="
echo ""
echo "⚠️  Este script NÃO substitui:"
echo "   - Arquivo .env"
echo "   - Pasta data/ (banco de dados)"
echo "   - Logs locais"
echo ""

cd /home/gabriel/projects/rastreadores

# Sincronizar arquivos (excluindo dados sensíveis)
rsync -avz -e "ssh -i ~/.ssh/hetzner_ed25519 -o StrictHostKeyChecking=no" \
  --exclude='.git' \
  --exclude='data' \
  --exclude='logs' \
  --exclude='.env' \
  . gabriel@46.62.210.165:~/projects/rastreadores/

echo ""
echo "✅ Arquivos sincronizados"
echo ""
echo "Agora conecte no Hetzner e reinicie os containers:"
echo "  ssh -i ~/.ssh/hetzner_ed25519 gabriel@46.62.210.165"
echo "  cd ~/projects/rastreadores"
echo "  docker-compose down"
echo "  docker-compose up -d"
```

## 📚 Documentação

Todas as alterações relevantes devem ser documentadas:

- **README.md**: Informações gerais do projeto
- **INSTALACAO.md**: Processo de instalação
- **CONFIGURACAO_CLIENT.md**: Configuração do app móvel
- **WORKFLOW.md**: Este arquivo - processo de desenvolvimento
- Commits no Git: Mensagens claras e descritivas

---

**Última atualização**: 28 de Janeiro de 2025
**Ambiente WSL**: `/home/gabriel/projects/rastreadores`
**Ambiente Hetzner**: `~/projects/rastreadores`
