# Customização do Frontend Traccar

## 📋 Estratégia

Vamos customizar o frontend existente do Traccar aplicando a nova paleta de cores e design moderno, mantendo todas as funcionalidades existentes.

## 🎨 Paleta de Cores a Aplicar

- **Prussian Blue** (#13293D) - Backgrounds escuros, elementos principais
- **Sapphire Blue** (#006494) - Backgrounds secundários, sidebar
- **Celadon Blue** (#247BA0) - Destaque, componentes ativos
- **Carolina Blue** (#1B98E0) - Botões primary, links, interações
- **Azure X11** (#E8F1F2) - Backgrounds claros, superfícies
- **Dark Navy** (#1F2121) - Textos principais
- **Cinza Médio** (#A7A9A9) - Textos secundários, borders

## 📁 Estrutura do Traccar

O Traccar armazena seus arquivos frontend em:
- `/opt/traccar/web/` - Arquivos estáticos
- `/opt/traccar/web/styles.css` - CSS customizável
- `/opt/traccar/web/assets/` - Arquivos compilados (JS/CSS)

## 🔧 Método de Customização

### Opção 1: CSS Customizado (Recomendado)
Criar arquivo CSS customizado e injetar via volume Docker ou modificando `styles.css`.

### Opção 2: Modificar Arquivos Compilados
Mais complexo, requer rebuild após atualizações do Traccar.

## 📝 Próximos Passos

1. Criar arquivo CSS customizado com a nova paleta
2. Montar volume para persistir customizações
3. Aplicar estilos aos componentes principais:
   - Header/Navigation
   - Sidebar
   - Cards/Panels
   - Botões
   - Inputs
   - Tabelas
4. Testar em desenvolvimento
5. Documentar alterações

## ⚠️ Considerações

- Manter compatibilidade com atualizações do Traccar
- Usar `!important` apenas quando necessário
- Testar todas as funcionalidades após customização
- Fazer backup antes de alterações significativas

---

**Status**: Preparando estrutura para customização
**Data**: 28 de Janeiro de 2025
