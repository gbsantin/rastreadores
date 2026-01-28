# Design System - Traccar Frontend

## 🎨 Paleta de Cores

### Cores Principais

| Cor | Hex | Uso |
|-----|-----|-----|
| **Prussian Blue** | `#13293D` | Header, backgrounds escuros, elementos principais |
| **Sapphire Blue** | `#006494` | Sidebar, backgrounds secundários, overlays |
| **Celadon Blue** | `#247BA0` | Destaque, componentes ativos, borders |
| **Carolina Blue** | `#1B98E0` | Botões primary, links, interações |
| **Azure X11** | `#E8F1F2` | Backgrounds claros, superfícies |
| **Dark Navy** | `#1F2121` | Textos principais |
| **Cinza Médio** | `#A7A9A9` | Textos secundários, borders |

### Uso no Tailwind

```tsx
// Backgrounds
bg-prussian    // Header
bg-sapphire    // Sidebar
bg-azure       // Main content
bg-white       // Cards

// Textos
text-darkNavy      // Textos principais
text-cinzaMedio    // Textos secundários
text-white         // Textos sobre fundos escuros

// Bordas
border-celadon     // Borders principais
border-sapphire    // Borders secundários

// Botões e Interações
bg-carolina        // Botões primary
bg-celadon         // Estados ativos
```

## 📐 Espaçamento

### Grid de 8px

- `space-y-1` = 4px (0.5 * 8px)
- `space-y-2` = 8px (1 * 8px)
- `space-y-4` = 16px (2 * 8px)
- `space-y-6` = 24px (3 * 8px)
- `space-y-8` = 32px (4 * 8px)

### Padding/Margin Padrão

- Cards: `p-6` (24px)
- Inputs: `px-3 py-2` (12px vertical, 12px horizontal)
- Botões: `px-4 py-2` (16px horizontal, 8px vertical)
- Seções: `p-6` ou `p-8`

## 🔲 Border Radius

- **Cards/Modais**: `rounded-lg` (12px)
- **Inputs/Buttons**: `rounded-md` (8px)
- **Pequenos elementos**: `rounded-sm` (6px)
- **Badges**: `rounded-full`

## 🌑 Sombras

- **Suave**: `shadow-soft` = `0 4px 12px rgba(0, 0, 0, 0.1)`
- **Média**: `shadow-medium` = `0 6px 20px rgba(0, 0, 0, 0.15)`
- **Padrão Tailwind**: `shadow-sm`, `shadow`, `shadow-md`

## 📝 Tipografia

### Tamanhos

- **Small**: `text-xs` (12px)
- **Body**: `text-sm` (14px) ou `text-base` (16px)
- **Large**: `text-lg` (18px)
- **Heading**: `text-xl` (20px), `text-2xl` (24px), `text-3xl` (30px)

### Pesos

- **Regular**: `font-normal` (400)
- **Medium**: `font-medium` (500)
- **Semibold**: `font-semibold` (600)
- **Bold**: `font-bold` (700)

### Line Height

- Padrão: `leading-normal` (1.5)
- Títulos: `leading-tight` (1.25)

## 🎯 Componentes

### Button

```tsx
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>
```

### Badge

```tsx
<Badge variant="default">Online</Badge>
<Badge variant="success">Ativo</Badge>
<Badge variant="outline">Offline</Badge>
```

## 🎨 Estados de Hover/Focus

### Hover

- Botões: `hover:bg-carolina-light`
- Links: `hover:text-carolina`
- Cards: `hover:shadow-medium`

### Focus

- Inputs: `focus-visible:ring-2 focus-visible:ring-carolina`
- Botões: `focus-visible:ring-2 focus-visible:ring-ring`

## ⚡ Transições

- Duração padrão: `150ms`
- Timing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Propriedades: `color, background-color, border-color, transform`

## 📱 Responsividade

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

### Exemplos

```tsx
// Grid responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Texto responsivo
<h1 className="text-2xl md:text-3xl lg:text-4xl">

// Padding responsivo
<div className="p-4 md:p-6 lg:p-8">
```

## 🌙 Dark Mode

Suporte preparado com variáveis CSS. Para ativar:

```tsx
// Adicionar toggle no Header
<button onClick={() => document.documentElement.classList.toggle('dark')}>
  Toggle Dark
</button>
```

Cores dark mode já configuradas em `globals.css`.

## 📋 Checklist de Design

Ao criar novos componentes, verificar:

- [ ] Usa cores da paleta oficial
- [ ] Border radius apropriado (12px/8px/6px)
- [ ] Espaçamento em múltiplos de 8px
- [ ] Sombras suaves
- [ ] Transições de 150ms
- [ ] Estados hover/focus definidos
- [ ] Responsivo (mobile-first)
- [ ] Tipografia clara e legível
