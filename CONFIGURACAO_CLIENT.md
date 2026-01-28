# Configuração do Traccar Client (App Móvel)

## ⚠️ Problema Resolvido: Porta 5055

O erro `WARN [httpService$e onFailure]` ocorria porque a porta **5055** (usada pelo Traccar Client) não estava exposta no Docker.

**Status**: ✅ **RESOLVIDO** - Porta 5055 agora está configurada e funcionando.

## 📱 Configuração do App Traccar Client

### 1. Baixar o App

- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=org.traccar.client)
- **iOS**: [App Store](https://apps.apple.com/app/traccar-client/id843156974)

### 2. Configurar no App

Ao abrir o app pela primeira vez, você precisará configurar:

#### **Device ID (ID do Dispositivo)**
- Um identificador único para seu dispositivo
- Exemplo: `meu-celular-001`
- **IMPORTANTE**: Use o mesmo ID que você cadastrou no servidor Traccar

#### **Server URL (URL do Servidor)**
- **WSL (desenvolvimento)**: `http://SEU_IP_LOCAL:5055`
  - Exemplo: `http://192.168.1.100:5055`
  - ⚠️ Use o IP da sua máquina, não `localhost`
  
- **Hetzner (produção)**: `http://46.62.210.165:5055`
  - Ou se tiver domínio: `http://seu-dominio.com:5055`

⚠️ **ATENÇÃO**: 
- Use a porta **5055** (não 8082!)
- Use **http://** (não https://) a menos que tenha SSL configurado
- Use o IP completo ou domínio, não `localhost`

### 3. Configurações de Localização

#### **Location Accuracy (Precisão)**
- **Highest**: GPS sempre ligado (mais preciso, consome mais bateria)
- **High**: GPS quando disponível
- **Medium**: WiFi + celular
- **Low**: Apenas celular

#### **Distance (Distância)**
- Atualiza a localização a cada N metros quando em movimento
- Exemplo: `100` = atualiza a cada 100 metros

#### **Interval (Intervalo)**
- Atualiza a localização a cada N segundos
- Útil quando `Distance` está em 0

#### **Stationary Heartbeat (Batimento quando parado)**
- Intervalo de atualização quando o dispositivo está parado
- Exemplo: `300` = a cada 5 minutos quando parado

### 4. Verificar Conexão

1. Abra o app Traccar Client
2. Verifique se aparece "Connected" ou status verde
3. Se aparecer "Send Failed" ou erro:
   - Verifique a URL do servidor (deve usar porta 5055)
   - Verifique se o Device ID está correto
   - Verifique se o dispositivo está cadastrado no servidor
   - Verifique conexão de internet

### 5. Troubleshooting

#### Erro: "Send Failed" ou "httpService$e onFailure"

**Causas comuns:**
1. ❌ Porta errada na URL (usou 8082 ao invés de 5055)
2. ❌ URL incorreta (falta http:// ou IP errado)
3. ❌ Device ID não cadastrado no servidor
4. ❌ Firewall bloqueando porta 5055
5. ❌ Servidor não acessível da rede do dispositivo

**Soluções:**
1. ✅ Verifique se a URL usa porta **5055**
2. ✅ Verifique se o Device ID está cadastrado no servidor Traccar
3. ✅ Teste acessar `http://SEU_IP:5055` no navegador (deve dar erro de conexão, mas confirma que a porta está aberta)
4. ✅ Verifique firewall/router se estiver usando IP público
5. ✅ Se estiver no WSL, use o IP da máquina Windows, não localhost

#### Verificar se o servidor está recebendo dados

```bash
# Ver logs em tempo real
cd /home/gabriel/projects/rastreadores
docker compose logs -f traccar

# Ou verificar arquivo de log
tail -f logs/tracker-server.log
```

Se o dispositivo estiver enviando dados, você verá mensagens de conexão nos logs.

## 🔧 Configuração Avançada

### Alterar porta do Traccar Client

Se precisar usar outra porta (por exemplo, se 5055 estiver ocupada):

1. Edite o arquivo `.env`:
```env
TRACCAR_CLIENT_PORT=5056  # Use outra porta
```

2. Reinicie os containers:
```bash
docker compose down
docker compose up -d
```

3. Atualize a URL no app para usar a nova porta

## 📝 Checklist de Configuração

- [ ] App Traccar Client instalado
- [ ] Device ID configurado no app
- [ ] Device ID cadastrado no servidor Traccar
- [ ] Server URL configurada com porta 5055
- [ ] URL usa http:// (não https://) a menos que tenha SSL
- [ ] URL usa IP completo ou domínio (não localhost)
- [ ] Porta 5055 está aberta no firewall (se necessário)
- [ ] App mostra "Connected" ou status verde
- [ ] Localização está sendo enviada (verificar no servidor)

## 🌐 URLs de Exemplo

### WSL (Desenvolvimento Local)
```
http://192.168.1.100:5055
```
Substitua `192.168.1.100` pelo IP da sua máquina na rede local.

### Hetzner (Produção)
```
http://46.62.210.165:5055
```

### Com Domínio (se configurado)
```
http://rastreador.exemplo.com:5055
```

---

**Última atualização**: 28 de Janeiro de 2025
**Versão Traccar**: 6.11.1
