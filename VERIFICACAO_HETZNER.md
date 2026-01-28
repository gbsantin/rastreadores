# Verificação de Portas no Hetzner

## ✅ Status da Porta 5055

**Data da Verificação**: 28 de Janeiro de 2026

### Resultados

✅ **Porta 5055 está ABERTA e FUNCIONANDO**

- **TCP**: ✅ Escutando em 0.0.0.0:5055 (todas as interfaces)
- **UDP**: ✅ Escutando em 0.0.0.0:5055 (todas as interfaces)
- **IPv6**: ✅ Escutando em [::]:5055
- **Conectividade Externa**: ✅ Porta acessível de fora (testado via curl)
- **Firewall**: ✅ UFW inativo, nenhum bloqueio detectado

### Teste de Conectividade

```bash
# Teste externo (do WSL)
curl -v http://46.62.210.165:5055
# Resultado: HTTP 400 Bad Request (esperado - protocolo Traccar)
# Conexão estabelecida com sucesso ✅
```

### Containers Docker

```
NAME               STATUS                    PORTS
traccar            Up (healthy)               0.0.0.0:5055->5055/tcp
                                                 0.0.0.0:5055->5055/udp
                                                 0.0.0.0:8082->8082/tcp
```

### Portas Verificadas

| Porta | Protocolo | Status | Uso |
|-------|-----------|--------|-----|
| 5055  | TCP       | ✅ Aberta | Traccar Client (app móvel) |
| 5055  | UDP       | ✅ Aberta | Traccar Client (app móvel) |
| 8082  | TCP       | ✅ Aberta | Interface Web Traccar |

### Firewall

- **UFW**: Status: inactive (não há bloqueio)
- **iptables**: Policy ACCEPT (aceita todas as conexões)
- **Hetzner Cloud Firewall**: Não configurado (portas abertas por padrão)

## 📱 Configuração do App Móvel

Para conectar o Traccar Client ao servidor Hetzner:

**Server URL**: `http://46.62.210.165:5055`

⚠️ **Importante**: 
- Use porta **5055** (não 8082)
- Use **http://** (não https://)
- Use o IP completo ou domínio

## 🔍 Comandos de Verificação

### Verificar portas abertas
```bash
ss -tulpn | grep -E ':(5055|8082)'
```

### Verificar containers Docker
```bash
cd ~/projects/rastreadores
docker-compose ps
```

### Testar conectividade externa
```bash
# De outra máquina
curl -v http://46.62.210.165:5055
curl -v http://46.62.210.165:8082
```

### Verificar firewall
```bash
sudo ufw status
sudo iptables -L -n
```

## ✅ Conclusão

A porta 5055 está **totalmente funcional e acessível** no servidor Hetzner. O Traccar Client pode se conectar sem problemas.

---

**Última atualização**: 28 de Janeiro de 2026
