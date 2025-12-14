# Setup Guide: shadcn/ui + Tailwind CSS + Sass

This project is configured with **shadcn/ui**, **Tailwind CSS v4**, and **Sass**. This guide will help you understand how to use these technologies together.

## ✅ What's Already Configured

### 1. **Tailwind CSS v4.1.18**
- ✓ Installed via `@tailwindcss/vite` plugin
- ✓ Configured in `vite.config.ts`
- ✓ CSS variables and theming setup in `src/App.css`
- ✓ PostCSS configured with autoprefixer
- ✓ Dark mode support enabled

### 2. **shadcn/ui**
- ✓ Configuration file: `components.json`
- ✓ Style: "radix-lyra"
- ✓ Icon library: Lucide React
- ✓ Path aliases configured (`@/` → `./src/`)
- ✓ Multiple components already installed in `src/components/ui/`
- ✓ Utility function (`cn`) set up in `src/lib/utils.ts`

### 3. **Sass v1.96.0**
- ✓ Installed as dev dependency
- ✓ Vite automatically processes `.scss` and `.sass` files
- ✓ No additional configuration needed

---

## 🎨 Using Tailwind CSS

### Basic Usage

Use Tailwind utility classes directly in your JSX/TSX files:

```tsx
export function MyComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-8 bg-card rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Hello World
        </h1>
        <p className="text-muted-foreground">
          This uses Tailwind utility classes
        </p>
      </div>
    </div>
  );
}
```

### Using Theme Colors

Your project uses CSS variables for theming. These are defined in `src/App.css`:

```tsx
// Use theme colors via Tailwind classes
<div className="bg-primary text-primary-foreground">Primary</div>
<div className="bg-secondary text-secondary-foreground">Secondary</div>
<div className="bg-accent text-accent-foreground">Accent</div>
<div className="bg-muted text-muted-foreground">Muted</div>
<div className="bg-destructive text-destructive-foreground">Destructive</div>
```

### Dark Mode

Dark mode is configured using the `.dark` class. Add it to the root element:

```tsx
// Toggle dark mode by adding/removing the 'dark' class
<html className="dark">
  {/* Your app */}
</html>
```

---

## 🧩 Using shadcn/ui

### Currently Installed Components

Check `src/components/ui/` for available components:
- `alert-dialog`
- `badge`
- `button`
- `card`
- `combobox`
- `dropdown-menu`
- `field`
- `input-group`
- `input`
- `label`
- `select`
- `separator`
- `textarea`

### Using Components

Import and use components with the `@/` alias:

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function MyForm() {
  return (
    <Card className="p-6 max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <Badge variant="secondary">New</Badge>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="you@example.com" 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            placeholder="••••••••" 
          />
        </div>
        
        <Button className="w-full" variant="default">
          Create Account
        </Button>
      </div>
    </Card>
  );
}
```

### Adding New Components

Use the shadcn CLI to add more components:

```bash
# Add a specific component
npx shadcn@latest add dialog
npx shadcn@latest add tooltip
npx shadcn@latest add tabs
npx shadcn@latest add sheet

# Add multiple components at once
npx shadcn@latest add dialog tooltip tabs
```

### Component Variants

Many components support variants via props:

```tsx
// Button variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Button sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

### Customizing Components

shadcn components are copied to your project, so you can modify them directly:

1. Open the component file in `src/components/ui/`
2. Modify the styles, variants, or behavior
3. Changes apply immediately - no need to rebuild

---

## 💅 Using Sass/SCSS

### Creating SCSS Files

Create `.scss` files anywhere in your project. Vite will automatically process them:

```scss
// src/styles/variables.scss
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$spacing-unit: 1rem;
$border-radius: 0.5rem;

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin card-shadow {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

### Importing SCSS in Components

```tsx
// Import SCSS in your TypeScript/React files
import './MyComponent.scss';

export function MyComponent() {
  return (
    <div className="my-component">
      <h1 className="my-component__title">Hello</h1>
    </div>
  );
}
```

```scss
// MyComponent.scss
.my-component {
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  &__title {
    font-size: 2rem;
    color: white;
    text-align: center;
  }
}
```

### Combining Sass with Tailwind

You can use both together! Use Tailwind for utilities and Sass for complex component styles:

```tsx
import './CustomCard.scss';

export function CustomCard() {
  return (
    <div className="custom-card p-6 rounded-lg shadow-lg bg-card">
      <h2 className="custom-card__title text-2xl font-bold">
        Title
      </h2>
      <p className="text-muted-foreground">
        Description text
      </p>
    </div>
  );
}
```

```scss
// CustomCard.scss
.custom-card {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  }
  
  &__title {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 3rem;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    }
  }
}
```

### Using Sass Features

#### Variables
```scss
$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
  'success': #10b981,
  'danger': #ef4444,
);

@each $name, $color in $colors {
  .text-#{$name} {
    color: $color;
  }
}
```

#### Nesting
```scss
.navigation {
  background: white;
  padding: 1rem;
  
  .nav-list {
    display: flex;
    gap: 1rem;
    
    .nav-item {
      padding: 0.5rem 1rem;
      
      &:hover {
        background: #f3f4f6;
      }
      
      &.active {
        color: #3b82f6;
        font-weight: bold;
      }
    }
  }
}
```

#### Mixins with Arguments
```scss
@mixin button-variant($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  
  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

.btn-primary {
  @include button-variant(#3b82f6, white);
}

.btn-secondary {
  @include button-variant(#8b5cf6, white);
}
```

#### Functions
```scss
@function calculate-rem($px) {
  @return #{$px / 16}rem;
}

.element {
  padding: calculate-rem(24); // 1.5rem
  margin: calculate-rem(32);  // 2rem
}
```

---

## 🎯 Best Practices

### 1. **Use Tailwind for Utilities**
- Spacing, colors, typography, flexbox, grid
- Quick prototyping and layout
- Responsive design with breakpoints

### 2. **Use shadcn/ui for Components**
- Pre-built, accessible UI components
- Consistent design system
- Easy to customize since they're in your codebase

### 3. **Use Sass for Complex Styles**
- Component-specific complex animations
- Complex selectors and pseudo-elements
- Reusable mixins and functions
- When you need programmatic CSS generation

### 4. **Combine All Three**

```tsx
// Component.tsx
import { Button } from "@/components/ui/button";
import './Component.scss';

export function Component() {
  return (
    <div className="fancy-container p-8 bg-background rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="default" className="fancy-button">
          Click Me
        </Button>
      </div>
      {/* Content */}
    </div>
  );
}
```

```scss
// Component.scss
.fancy-container {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
  }
}

.fancy-button {
  // Extend shadcn button with custom animations
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px -3px rgb(59 130 246 / 0.3);
  }
}
```

---

## 🛠️ Useful Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Add shadcn components
npx shadcn@latest add [component-name]

# List all available shadcn components
npx shadcn@latest add
```

---

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **Sass**: https://sass-lang.com/documentation
- **Lucide Icons**: https://lucide.dev/icons/

---

## 🚀 Quick Start Example

Here's a complete example using all three technologies:

```tsx
// src/pages/Dashboard.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import './Dashboard.scss';

export function Dashboard() {
  return (
    <div className="dashboard-container min-h-screen bg-background p-8">
      <header className="dashboard-header mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening today
            </p>
          </div>
          <Badge variant="secondary">Pro Plan</Badge>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="stats-card p-6">
          <div className="stats-card__icon mb-4">📊</div>
          <h3 className="text-2xl font-bold mb-2">1,234</h3>
          <p className="text-muted-foreground">Total Users</p>
        </Card>

        <Card className="stats-card p-6">
          <div className="stats-card__icon mb-4">💰</div>
          <h3 className="text-2xl font-bold mb-2">$12,345</h3>
          <p className="text-muted-foreground">Revenue</p>
        </Card>

        <Card className="stats-card p-6">
          <div className="stats-card__icon mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-2">89%</h3>
          <p className="text-muted-foreground">Growth</p>
        </Card>
      </div>

      <Card className="mt-8 p-6">
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input 
              id="search" 
              placeholder="Search anything..." 
              className="max-w-md"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="default">Create New</Button>
            <Button variant="outline">View Reports</Button>
            <Button variant="ghost">Settings</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

```scss
// src/pages/Dashboard.scss
.dashboard-header {
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      oklch(0.928 0.006 264.531),
      transparent
    );
  }
}

.stats-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  }
  
  &__icon {
    font-size: 2.5rem;
    display: inline-block;
    animation: float 3s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

---

Happy coding! 🎉