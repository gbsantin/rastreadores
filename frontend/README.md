# Traccar Frontend - Interface Moderna

Frontend moderno para o Traccar GPS Tracking System, desenvolvido com Next.js, React, TypeScript, Tailwind CSS e shadcn/ui.

## 🎨 Design System

### Paleta de Cores

- **Prussian Blue** (#13293D) - Backgrounds escuros, elementos principais
- **Sapphire Blue** (#006494) - Backgrounds secundários, sidebar
- **Celadon Blue** (#247BA0) - Destaque, componentes ativos
- **Carolina Blue** (#1B98E0) - Botões primary, links, interações
- **Azure X11** (#E8F1F2) - Backgrounds claros, superfícies
- **Dark Navy** (#1F2121) - Textos principais
- **Cinza Médio** (#A7A9A9) - Textos secundários, borders

## 🚀 Instalação

```bash
cd frontend
npm install
```

## 💻 Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📦 Build

```bash
npm run build
npm start
```

## 🏗️ Estrutura

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Dashboard
│   └── globals.css        # Estilos globais
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   └── layout/            # Componentes de layout
├── lib/
│   └── utils.ts           # Utilitários
└── public/                # Arquivos estáticos
```

## 🎯 Componentes

- **Header**: Navegação superior com logo e ações do usuário
- **Sidebar**: Menu lateral com navegação principal
- **Dashboard**: Página principal com mapa e lista de dispositivos
- **Cards**: Componentes de card reutilizáveis
- **Badges**: Indicadores de status
- **Buttons**: Botões com variantes

## 📝 Próximos Passos

- [ ] Integração com API do Traccar
- [ ] Página de detalhes de dispositivo
- [ ] Página de histórico
- [ ] Integração de mapa (Google Maps / OpenStreetMap)
- [ ] Modo dark completo
- [ ] Responsividade mobile
