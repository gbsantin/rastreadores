# Guia de Instalação - Traccar GPS Tracking

Este documento descreve o processo de instalação do Traccar nos ambientes WSL e Hetzner.

## Data da Instalação
**28 de Janeiro de 2025**

## Ambiente WSL

### Status das Portas Antes da Instalação
- **8082**: Livre ✅
- **5005-5006**: Livres ✅
- **3307**: Livre ✅ (MySQL externo, interno 3306)

### Dependências Instaladas
- ✅ Docker (versão 28.4.0)
- ✅ Docker Compose v2 (versão v2.39.2)
- ✅ Java 17 (já instalado)

### Processo de Instalação

1. **Criação da estrutura do projeto**
   ```bash
   mkdir -p /home/gabriel/projects/rastreamento
   cd /home/gabriel/projects/rastreamento
   ```

2. **Configuração do ambiente**
   - Criado `docker-compose.yml` baseado no template oficial do Traccar
   - Criado `.env.example` e `.env` com configurações
   - Criado `config/traccar.xml` para configurações customizadas

3. **Inicialização dos serviços**
   ```bash
   docker compose pull
   docker compose up -d
   ```

4. **Verificação**
   - Containers criados e iniciados com sucesso
   - Portas 8082, 5005-5006 (TCP/UDP), 3307 abertas e funcionando
   - Health checks configurados e funcionando

### Containers em Execução
- `traccar`: Container principal do Traccar
- `traccar-mysql`: Banco de dados MySQL 8.4
- `traccar-autoheal`: Monitoramento e recuperação automática

### Acesso
- **URL**: http://localhost:8082
- **Credenciais padrão**: admin/admin (⚠️ alterar imediatamente)

---

## Ambiente Hetzner

### Status das Portas Antes da Instalação
- **8082**: Livre ✅
- **5005-5006**: Livres ✅
- **3307**: Livre ✅

### Dependências Instaladas
- ✅ Docker (versão 28.2.2) - instalado via `apt-get install docker.io`
- ✅ Docker Compose (versão v5.0.2) - instalado manualmente do GitHub
- ✅ Java 17 (já instalado)

### Processo de Instalação

1. **Instalação do Docker**
   ```bash
   sudo apt-get update
   sudo apt-get install -y docker.io
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker gabriel
   ```

2. **Instalação do Docker Compose**
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. **Criação da estrutura do projeto**
   ```bash
   mkdir -p ~/projects/rastreamento
   cd ~/projects/rastreamento
   ```

4. **Cópia dos arquivos do WSL**
   - Arquivos copiados via `rsync` do WSL para Hetzner
   - Excluídos: `.git`, `data`, `logs`, `.env` (criado localmente)

5. **Configuração do ambiente**
   ```bash
   cp .env.example .env
   # Arquivo .env criado com mesmas configurações do WSL
   ```

6. **Inicialização dos serviços**
   ```bash
   docker-compose pull
   docker-compose up -d
   ```

7. **Verificação**
   - Containers criados e iniciados com sucesso
   - Portas verificadas e livres antes da instalação
   - Serviços iniciados sem conflitos

### Containers em Execução
- `traccar`: Container principal do Traccar
- `traccar-mysql`: Banco de dados MySQL 8.4
- `traccar-autoheal`: Monitoramento e recuperação automática

### Acesso
- **IP**: 46.62.210.165
- **URL**: http://46.62.210.165:8082
- **Credenciais padrão**: admin/admin (⚠️ alterar imediatamente)

---

## Configurações Aplicadas

### Portas Utilizadas
- **8082**: Interface web do Traccar (HTTP)
- **5005-5006**: Portas GPS (TCP e UDP)
- **3307**: MySQL (porta externa, interna 3306)

### Variáveis de Ambiente (.env)
```env
MYSQL_PASSWORD=traccar_segura_123
TRACCAR_WEB_PORT=8082
TRACCAR_GPS_START=5005
TRACCAR_GPS_END=5006
```

### Volumes Docker
- `./data/mysql`: Dados persistentes do MySQL
- `./data/traccar`: Dados persistentes do Traccar
- `./logs`: Logs do sistema
- `./config/traccar.xml`: Configuração do Traccar

---

## Próximos Passos

1. ✅ Alterar senha padrão do admin no primeiro acesso
2. ✅ Configurar dispositivos GPS
3. ⚠️ Configurar firewall no Hetzner (se necessário)
4. ⚠️ Configurar HTTPS/reverse proxy para produção
5. ⚠️ Configurar backups automáticos do banco de dados
6. ⚠️ Monitorar logs e performance

---

## Troubleshooting

### Verificar status dos containers
```bash
docker compose ps
# ou no Hetzner
docker-compose ps
```

### Ver logs
```bash
docker compose logs -f traccar
docker compose logs -f database
```

### Reiniciar serviços
```bash
docker compose restart traccar
```

### Parar serviços
```bash
docker compose down
```

### Parar e remover volumes (⚠️ apaga dados)
```bash
docker compose down -v
```

---

## Notas Importantes

- ⚠️ **Segurança**: Alterar senhas padrão imediatamente após instalação
- ⚠️ **Backup**: Configurar backups regulares do banco de dados
- ⚠️ **Firewall**: Verificar configuração de firewall no Hetzner
- ✅ **Portas**: Todas as portas verificadas antes da instalação
- ✅ **Conflitos**: Nenhum conflito detectado com outros projetos

---

## Referências

- [Traccar Official Documentation](https://www.traccar.org/documentation/)
- [Traccar Docker Hub](https://hub.docker.com/r/traccar/traccar)
- [Traccar GitHub Repository](https://github.com/traccar/traccar)
- [Docker Compose Official Docs](https://docs.docker.com/compose/)
