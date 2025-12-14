# Solaris - shadcn/ui + Tailwind CSS + Sass Setup

Welcome! This project is fully configured with **shadcn/ui**, **Tailwind CSS v4**, and **Sass**. Everything is ready to use! 🎉

## ✅ What's Already Installed

### 1. **Tailwind CSS v4.1.18**
- ✓ Configured with the new `@tailwindcss/vite` plugin
- ✓ CSS variables for theming
- ✓ Dark mode support
- ✓ Custom color palette using OKLCH colors

### 2. **shadcn/ui**
- ✓ Pre-configured with "radix-lyra" style
- ✓ Lucide icons integrated
- ✓ Path aliases set up (`@/` → `./src/`)
- ✓ Multiple components already installed
- ✓ `cn()` utility function ready

### 3. **Sass v1.96.0**
- ✓ Installed and ready to use
- ✓ Vite automatically processes `.scss` and `.sass` files
- ✓ No additional configuration needed

---

## 🚀 Quick Start

### Run the Development Server
```bash
npm run dev
```

Visit `http://localhost:1420` to see your app.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📚 Usage Guide

### Using Tailwind CSS

Just add utility classes to your JSX:

```tsx
export function MyComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-8 bg-card rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Hello World
        </h1>
        <p className="text-muted-foreground">
          Using Tailwind utilities!
        </p>
      </div>
    </div>
  );
}
```

**Available Theme Colors:**
- `bg-primary text-primary-foreground`
- `bg-secondary text-secondary-foreground`
- `bg-accent text-accent-foreground`
- `bg-muted text-muted-foreground`
- `bg-destructive text-destructive-foreground`

### Using shadcn/ui Components

Import and use pre-built components:

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <Button className="w-full">Sign In</Button>
      </div>
    </Card>
  );
}
```

**Add More Components:**
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs
npx shadcn@latest add tooltip
```

**Currently Installed Components:**
- Alert Dialog
- Badge
- Button
- Card
- Combobox
- Dropdown Menu
- Field
- Input & Input Group
- Label
- Select
- Separator
- Textarea

### Using Sass/SCSS

Create `.scss` files and import them:

```scss
// MyComponent.scss
$primary-color: #3b82f6;
$spacing: 1rem;

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-component {
  @include flex-center;
  padding: $spacing * 2;
  
  &__title {
    color: $primary-color;
    font-size: 2rem;
  }
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
}
```

```tsx
// MyComponent.tsx
import './MyComponent.scss';

export function MyComponent() {
  return (
    <div className="my-component">
      <h1 className="my-component__title">Hello!</h1>
    </div>
  );
}
```

---

## 🎨 Combining All Three

You can use all three technologies together seamlessly:

```tsx
// Component.tsx
import { Button } from "@/components/ui/button";
import './Component.scss';

export function Component() {
  return (
    <div className="fancy-wrapper p-8 bg-background rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Amazing Title</h1>
      <p className="text-muted-foreground mb-6">
        This combines Tailwind utilities with custom Sass styles
      </p>
      <Button className="fancy-button">
        Click Me
      </Button>
    </div>
  );
}
```

```scss
// Component.scss
.fancy-wrapper {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  }
}

.fancy-button {
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px -3px rgb(59 130 246 / 0.3);
  }
}
```

---

## 🌙 Dark Mode

Dark mode is already configured! Toggle it by adding/removing the `dark` class:

```tsx
// Add to root element (usually in index.html or App.tsx)
<html className="dark">
```

Or use JavaScript to toggle:

```tsx
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
```

Tailwind automatically applies dark mode styles:
```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  This adapts to dark mode!
</div>
```

---

## 📁 Project Structure

```
Solaris/
├── src/
│   ├── components/
│   │   ├── ui/                  # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── DemoCard.tsx         # Example component
│   │   └── DemoCard.scss        # Sass styles
│   ├── lib/
│   │   └── utils.ts             # cn() utility
│   ├── styles/
│   │   └── example.scss         # Example Sass file
│   ├── App.css                  # Tailwind imports & theme
│   ├── App.tsx
│   └── main.tsx
├── components.json              # shadcn config
├── vite.config.ts               # Vite + Tailwind config
├── tsconfig.json                # TypeScript config
└── package.json
```

---

## 🎯 Best Practices

### When to Use Each Technology

**Use Tailwind for:**
- ✅ Spacing, padding, margins (`p-4`, `m-6`, `gap-4`)
- ✅ Layout (`flex`, `grid`, `items-center`)
- ✅ Typography (`text-xl`, `font-bold`)
- ✅ Colors (theme colors via `bg-primary`)
- ✅ Responsive design (`md:flex`, `lg:grid-cols-4`)
- ✅ Quick prototyping

**Use shadcn/ui for:**
- ✅ Interactive components (dialogs, dropdowns, tabs)
- ✅ Form elements (inputs, selects, checkboxes)
- ✅ Accessible UI patterns
- ✅ Consistent design system
- ✅ Complex components you don't want to build from scratch

**Use Sass for:**
- ✅ Complex animations and keyframes
- ✅ Deeply nested styles
- ✅ Pseudo-elements (::before, ::after)
- ✅ Reusable mixins and functions
- ✅ BEM methodology (`.block__element--modifier`)
- ✅ Component-specific complex styles

---

## 🛠️ Utility Function: `cn()`

Combine class names safely with the `cn()` utility:

```tsx
import { cn } from "@/lib/utils";

// Basic usage
<div className={cn("base-class", "another-class")} />

// Conditional classes
<div className={cn(
  "base-class",
  isActive && "active-class",
  isDisabled && "disabled-class"
)} />

// Merging with component props
function MyButton({ className, ...props }) {
  return (
    <button 
      className={cn("default-button-styles", className)}
      {...props}
    />
  );
}
```

---

## 📖 Documentation

- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **Sass**: https://sass-lang.com/documentation
- **Lucide Icons**: https://lucide.dev/icons/

---

## 🔥 Example: Complete Dashboard Card

Here's a real-world example combining all three:

```tsx
// DashboardCard.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "./DashboardCard.scss";

export function DashboardCard() {
  return (
    <Card className="dashboard-card p-6 bg-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Total Sales</h3>
        <Badge variant="secondary">+12%</Badge>
      </div>
      
      <div className="dashboard-card__value mb-2">
        $12,345
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        Compared to last month
      </p>
      
      <div className="dashboard-card__chart mb-4">
        {/* Chart visualization */}
      </div>
      
      <Button variant="outline" className="w-full">
        View Details
      </Button>
    </Card>
  );
}
```

```scss
// DashboardCard.scss
.dashboard-card {
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  }
  
  &__value {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  &__chart {
    height: 150px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    }
  }
}
```

---

## 💡 Tips

1. **Use the `cn()` utility** when combining class names to avoid conflicts
2. **Customize shadcn components** directly in `src/components/ui/` - they're yours!
3. **Leverage CSS variables** defined in `App.css` for consistent theming
4. **Create Sass mixins** for reusable style patterns
5. **Use Tailwind's responsive prefixes** (`md:`, `lg:`) for mobile-first design
6. **Keep Sass for animations** and complex pseudo-elements

---

## 🎉 You're All Set!

Everything is configured and ready to go. Check out these files for more examples:

- `SETUP_GUIDE.md` - Comprehensive setup documentation
- `QUICK_REFERENCE.md` - Quick reference cheat sheet
- `EXAMPLES.md` - Real-world component examples
- `src/components/DemoCard.tsx` - Working demo component
- `src/styles/example.scss` - Sass examples

Run `npm run dev` and start building! 🚀