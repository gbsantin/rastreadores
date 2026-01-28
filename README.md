# Traccar GPS Tracking System

Sistema de rastreamento GPS usando Traccar, instalado e configurado para ambientes WSL e Hetzner.

## 📋 Requisitos

- Docker e Docker Compose instalados
- Portas disponíveis:
  - **8082**: Interface web do Traccar
  - **5005-5006**: Portas para comunicação GPS (TCP e UDP)
  - **3307**: MySQL (porta externa, interna é 3306)

## 🚀 Instalação

### 1. Clone o repositório (ou use este diretório)

```bash
cd /home/gabriel/projects/rastreamento
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

### 3. Verifique as portas disponíveis

```bash
# Verificar portas em uso
ss -tulpn | grep -E ':(8082|5005|5006|3307)'
```

### 4. Inicie os serviços

```bash
docker compose up -d
```

### 5. Verifique os logs

```bash
# Logs do Traccar
docker compose logs -f traccar

# Logs do MySQL
docker compose logs -f database

# Todos os logs
docker compose logs -f
```

### 6. Acesse a interface web

Abra seu navegador e acesse:
- **WSL**: http://localhost:8082
- **Hetzner**: http://SEU_IP:8082

**Credenciais padrão:**
- Usuário: `admin`
- Senha: `admin`

⚠️ **IMPORTANTE**: Altere a senha padrão imediatamente após o primeiro acesso!

## 🔧 Configuração

### Alterar porta web

Edite o arquivo `.env`:
```env
TRACCAR_WEB_PORT=8083  # Use outra porta se 8082 estiver ocupada
```

### Alterar senha do MySQL

Edite o arquivo `.env`:
```env
MYSQL_PASSWORD=sua_senha_segura_aqui
```

### Adicionar mais portas GPS

Edite o arquivo `.env`:
```env
TRACCAR_GPS_START=5005
TRACCAR_GPS_END=5010  # Aumente o range conforme necessário
```

## 📊 Estrutura de Diretórios

```
rastreamento/
├── docker-compose.yml    # Configuração Docker Compose
├── .env                  # Variáveis de ambiente (não versionado)
├── .env.example          # Exemplo de variáveis
├── config/
│   └── traccar.xml       # Configuração do Traccar
├── data/
│   ├── mysql/            # Dados do MySQL
│   └── traccar/          # Dados do Traccar
└── logs/                 # Logs do sistema
```

## 🛠️ Comandos Úteis

### Parar os serviços
```bash
docker compose down
```

### Parar e remover volumes (⚠️ apaga dados)
```bash
docker compose down -v
```

### Reiniciar um serviço específico
```bash
docker compose restart traccar
```

### Ver status dos containers
```bash
docker compose ps
```

### Acessar shell do container Traccar
```bash
docker compose exec traccar sh
```

### Backup do banco de dados
```bash
docker compose exec database mysqldump -u traccar -p traccar > backup_$(date +%Y%m%d).sql
```

### Restaurar backup
```bash
docker compose exec -T database mysql -u traccar -p traccar < backup_20250128.sql
```

## 🌐 Instalação no Hetzner

Para instalar no servidor Hetzner, siga os mesmos passos acima via SSH:

```bash
# Conectar ao servidor
ssh -i ~/.ssh/hetzner_ed25519 gabriel@46.62.210.165

# Navegar para o diretório do projeto
cd ~/projects/rastreamento

# Seguir os passos de instalação acima
```

## 🔒 Segurança

- [ ] Alterar senha padrão do admin
- [ ] Alterar senha do MySQL no `.env`
- [ ] Configurar firewall (se necessário)
- [ ] Usar HTTPS em produção (configurar reverse proxy)
- [ ] Fazer backups regulares do banco de dados

## 📝 Notas

- O Traccar usa a porta **8082** por padrão para a interface web
- As portas **5000-5500** são usadas para comunicação GPS (ajustadas para 5005-5006 por padrão)
- O MySQL roda na porta **3307** externamente para evitar conflitos
- Todos os dados são persistidos nos diretórios `data/` e `logs/`

## 🐛 Troubleshooting

### Container não inicia
```bash
docker compose logs traccar
```

### Porta já em uso
Verifique qual processo está usando a porta:
```bash
ss -tulpn | grep 8082
```

### Problemas de conexão com banco
Verifique se o MySQL está saudável:
```bash
docker compose ps database
docker compose logs database
```

## 📚 Documentação Oficial

- [Traccar Official Docs](https://www.traccar.org/documentation/)
- [Traccar Docker Hub](https://hub.docker.com/r/traccar/traccar)
- [Traccar GitHub](https://github.com/traccar/traccar)

## 📅 Histórico de Instalação

- **2025-01-28**: Instalação inicial no WSL e Hetzner
