# Guia de Desenvolvimento

## 🚀 Iniciar Servidor de Desenvolvimento

```bash
cd frontend
npm install  # Primeira vez apenas
npm run dev
```

O servidor estará disponível em: **http://localhost:3000**

## ⚠️ Verificação de Portas

Antes de iniciar o servidor, sempre verifique se a porta está livre:

```bash
# Verificar porta 3000
ss -tulpn | grep :3000
# ou
lsof -i :3000

# Se estiver ocupada, usar outra porta:
npm run dev -- -p 3001
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento (porta 3000)
- `npm run build` - Build para produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa linter

## 🔧 Configuração

### Porta Customizada

Se a porta 3000 estiver ocupada, você pode:

1. **Temporariamente** (via CLI):
   ```bash
   npm run dev -- -p 3001
   ```

2. **Permanente** (editar package.json):
   ```json
   {
     "scripts": {
       "dev": "next dev -p 3001"
     }
   }
   ```

## 🌐 Acessar Frontend

- **WSL**: http://localhost:3000
- **Hetzner**: http://46.62.210.165:3000 (após deploy)

## 🐛 Troubleshooting

### Erro: Porta já em uso

```bash
# Verificar processo usando a porta
lsof -i :3000

# Matar processo (se necessário)
kill -9 <PID>
```

### Erro: Module not found

```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: Next.js config

- Certifique-se de usar `next.config.mjs` (não `.ts`)
- Next.js 14 não suporta TypeScript em arquivos de configuração

## 📦 Estrutura de Desenvolvimento

```
frontend/
├── app/              # Páginas e layouts (App Router)
├── components/       # Componentes React
│   ├── ui/          # Componentes shadcn/ui
│   └── layout/      # Componentes de layout
├── lib/             # Utilitários
└── public/          # Arquivos estáticos
```

## 🔄 Hot Reload

O Next.js tem hot reload automático. Alterações em arquivos são refletidas automaticamente no navegador.

## ✅ Checklist Antes de Deploy

- [ ] Servidor rodando sem erros
- [ ] Porta verificada e disponível
- [ ] Dependências instaladas
- [ ] Build de produção funcionando (`npm run build`)
- [ ] Testes realizados localmente

---

**Última atualização**: 28 de Janeiro de 2025
