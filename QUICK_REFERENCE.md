# Quick Reference: shadcn/ui + Tailwind CSS + Sass

## 📦 Installation Status
✅ All dependencies installed and configured  
✅ Tailwind CSS v4.1.18  
✅ shadcn/ui (radix-lyra style)  
✅ Sass v1.96.0  

---

## 🎨 Tailwind CSS Cheat Sheet

### Layout & Spacing
```tsx
<div className="flex items-center justify-between gap-4 p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-4">
```

### Typography
```tsx
<h1 className="text-4xl font-bold">
<p className="text-muted-foreground text-sm">
<span className="uppercase tracking-wide">
```

### Theme Colors
```tsx
bg-primary text-primary-foreground
bg-secondary text-secondary-foreground
bg-accent text-accent-foreground
bg-muted text-muted-foreground
bg-destructive text-destructive-foreground
bg-background text-foreground
bg-card text-card-foreground
```

### Responsive Breakpoints
```tsx
className="text-sm md:text-base lg:text-lg"
className="hidden md:block"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

---

## 🧩 shadcn/ui Quick Commands

### Add Components
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add select
npx shadcn@latest add table
npx shadcn@latest add tabs
npx shadcn@latest add tooltip
npx shadcn@latest add dropdown-menu
```

### Import Components
```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
```

### Button Variants
```tsx
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

---

## 💅 Sass/SCSS Quick Reference

### Creating SCSS Files
```scss
// src/styles/myStyles.scss

// Variables
$primary-color: #3b82f6;
$spacing: 1rem;

// Mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Usage
.my-component {
  @include flex-center;
  padding: $spacing * 2;
  
  &__title {
    color: $primary-color;
  }
  
  &:hover {
    transform: scale(1.05);
  }
}
```

### Import in TSX
```tsx
import './myStyles.scss';

export function MyComponent() {
  return <div className="my-component">...</div>;
}
```

### Sass Functions
```scss
@function rem($px) {
  @return #{$px / 16}rem;
}

.element {
  padding: rem(24); // 1.5rem
}
```

### Loops & Conditionals
```scss
// Generate classes
@for $i from 1 through 4 {
  .gap-#{$i} {
    gap: #{$i * 0.25}rem;
  }
}

// Map iteration
$colors: (
  'primary': #3b82f6,
  'secondary': #8b5cf6,
);

@each $name, $color in $colors {
  .text-#{$name} {
    color: $color;
  }
}
```

---

## 🔥 Common Patterns

### Complete Form Example
```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full">Sign In</Button>
      </div>
    </Card>
  );
}
```

### Card Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id} className="p-6">
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-muted-foreground">{item.description}</p>
    </Card>
  ))}
</div>
```

### Combining All Three
```tsx
// Component.tsx
import { Button } from "@/components/ui/button";
import './Component.scss';

export function Component() {
  return (
    <div className="fancy-wrapper bg-background p-8 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Title</h1>
      <Button className="fancy-button">Click Me</Button>
    </div>
  );
}
```

```scss
// Component.scss
.fancy-wrapper {
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  }
}

.fancy-button {
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgb(59 130 246 / 0.3);
  }
}
```

---

## 🎯 Best Practices

1. **Use Tailwind for:**
   - Spacing, layout, typography
   - Responsive design
   - Quick prototyping

2. **Use shadcn/ui for:**
   - Complex interactive components
   - Accessible UI elements
   - Consistent design system

3. **Use Sass for:**
   - Complex animations
   - Component-specific styles
   - Mixins and functions
   - Deep nesting and pseudo-elements

---

## 🛠️ Utility Function

```tsx
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Combine Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage
<div className={cn(
  "base-class",
  isActive && "active-class",
  className
)} />
```

---

## 🌙 Dark Mode

```tsx
// Toggle dark mode by adding/removing 'dark' class to html
<html className="dark">

// Use in components
<div className="bg-white dark:bg-gray-900">
<p className="text-gray-900 dark:text-gray-100">
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn components
│   ├── MyComponent.tsx
│   └── MyComponent.scss # Sass styles
├── lib/
│   └── utils.ts         # cn() utility
├── styles/
│   └── global.scss      # Global Sass
├── App.css              # Tailwind imports
└── main.tsx
```

---

## 🚀 Run Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
```

---

## 📚 Resources

- **Tailwind Docs**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **Sass Docs**: https://sass-lang.com/documentation
- **Lucide Icons**: https://lucide.dev/icons/