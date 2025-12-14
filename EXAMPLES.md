# Practical Examples: shadcn + Tailwind + Sass

This file contains real-world examples showing how to effectively combine shadcn/ui, Tailwind CSS, and Sass.

---

## Example 1: Profile Card with Hover Effects

### Component (ProfileCard.tsx)
```tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "./ProfileCard.scss";

interface ProfileCardProps {
  name: string;
  role: string;
  avatar: string;
  skills: string[];
}

export function ProfileCard({ name, role, avatar, skills }: ProfileCardProps) {
  return (
    <Card className="profile-card p-6 max-w-sm">
      <div className="profile-card__avatar-wrapper mb-4">
        <img 
          src={avatar} 
          alt={name}
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
        <div className="profile-card__status" />
      </div>

      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {skills.map(skill => (
          <Badge key={skill} variant="secondary" className="skill-badge">
            {skill}
          </Badge>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="default" className="flex-1">
          Connect
        </Button>
        <Button variant="outline" size="icon">
          💬
        </Button>
      </div>
    </Card>
  );
}
```

### Styles (ProfileCard.scss)
```scss
.profile-card {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(135deg, oklch(0.7 0.15 162), oklch(0.6 0.13 163));
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.15);
  }

  &__avatar-wrapper {
    position: relative;
    z-index: 1;
  }

  &__status {
    position: absolute;
    bottom: 8px;
    right: calc(50% - 36px);
    width: 16px;
    height: 16px;
    background: #10b981;
    border: 3px solid white;
    border-radius: 50%;
    animation: pulse-status 2s ease-in-out infinite;
  }
}

.skill-badge {
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
}

@keyframes pulse-status {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
}
```

---

## Example 2: Dashboard Stats Grid

### Component (StatsGrid.tsx)
```tsx
import { Card } from "@/components/ui/card";
import "./StatsGrid.scss";

interface StatItem {
  id: string;
  label: string;
  value: string | number;
  change: number;
  icon: string;
}

interface StatsGridProps {
  stats: StatItem[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card 
          key={stat.id} 
          className="stat-card p-6"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="stat-card__icon">
              {stat.icon}
            </div>
            <div className={`stat-card__change ${stat.change >= 0 ? 'positive' : 'negative'}`}>
              {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
            </div>
          </div>

          <div className="stat-card__value mb-1">
            {stat.value}
          </div>

          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>

          <div className="stat-card__progress">
            <div 
              className="stat-card__progress-bar" 
              style={{ width: `${Math.min(100, Math.abs(stat.change) * 2)}%` }}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
```

### Styles (StatsGrid.scss)
```scss
.stat-card {
  position: relative;
  overflow: hidden;
  animation: slide-in-up 0.5s ease-out backwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
      oklch(0.7 0.15 162), 
      oklch(0.6 0.13 163)
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &__icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background: oklch(from var(--primary) l c h / 0.1);
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  &:hover &__icon {
    transform: scale(1.1) rotate(5deg);
  }

  &__value {
    font-size: 2rem;
    font-weight: 700;
    color: var(--foreground);
  }

  &__change {
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;

    &.positive {
      background: oklch(0.95 0.05 145);
      color: oklch(0.4 0.15 145);
    }

    &.negative {
      background: oklch(0.95 0.05 25);
      color: oklch(0.5 0.2 25);
    }
  }

  &__progress {
    margin-top: 1rem;
    height: 4px;
    background: oklch(from var(--muted) l c h);
    border-radius: 2px;
    overflow: hidden;
  }

  &__progress-bar {
    height: 100%;
    background: linear-gradient(90deg, 
      oklch(0.7 0.15 162), 
      oklch(0.6 0.13 163)
    );
    border-radius: 2px;
    transition: width 0.8s ease;
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Example 3: Notification Toast

### Component (NotificationToast.tsx)
```tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "./NotificationToast.scss";

interface NotificationToastProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  onClose: () => void;
}

export function NotificationToast({ type, title, message, onClose }: NotificationToastProps) {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <div className={`notification-toast notification-toast--${type}`}>
      <div className="notification-toast__icon">
        {icons[type]}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <Badge variant="secondary" className="text-xs">
            Now
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="notification-toast__close"
      >
        ✕
      </Button>

      <div className="notification-toast__progress" />
    </div>
  );
}
```

### Styles (NotificationToast.scss)
```scss
$notification-types: (
  'success': oklch(0.7 0.15 145),
  'error': oklch(0.6 0.2 25),
  'warning': oklch(0.75 0.15 85),
  'info': oklch(0.65 0.15 240),
);

.notification-toast {
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  background: var(--card);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-left: 4px solid transparent;
  position: relative;
  overflow: hidden;
  animation: slide-in-right 0.3s ease-out;
  min-width: 320px;
  max-width: 420px;

  &__icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bold;
    flex-shrink: 0;
  }

  &__close {
    flex-shrink: 0;
    opacity: 0.6;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }

  &__progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    animation: progress-bar 5s linear forwards;
  }

  // Generate styles for each notification type
  @each $type, $color in $notification-types {
    &--#{$type} {
      border-left-color: $color;

      .notification-toast__icon {
        background: oklch(from #{$color} l c h / 0.15);
        color: $color;
      }

      .notification-toast__progress {
        background: $color;
      }
    }
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes progress-bar {
  from {
    transform: scaleX(1);
    transform-origin: left;
  }
  to {
    transform: scaleX(0);
    transform-origin: left;
  }
}
```

---

## Example 4: Interactive Pricing Card

### Component (PricingCard.tsx)
```tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "./PricingCard.scss";

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ name, price, period, features, popular }: PricingCardProps) {
  return (
    <Card className={`pricing-card ${popular ? 'pricing-card--popular' : ''} p-6`}>
      {popular && (
        <Badge className="pricing-card__badge">
          Most Popular
        </Badge>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="pricing-card__price">
          <span className="pricing-card__currency">$</span>
          <span className="pricing-card__amount">{price}</span>
          <span className="pricing-card__period">/{period}</span>
        </div>
      </div>

      <ul className="pricing-card__features mb-6">
        {features.map((feature, index) => (
          <li key={index} className="pricing-card__feature">
            <span className="pricing-card__check">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <Button 
        variant={popular ? "default" : "outline"} 
        className="w-full pricing-card__button"
      >
        Get Started
      </Button>
    </Card>
  );
}
```

### Styles (PricingCard.scss)
```scss
.pricing-card {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.15);
  }

  &__badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, oklch(0.7 0.15 162), oklch(0.6 0.13 163));
  }

  &__price {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  &__currency {
    font-size: 1.5rem;
    font-weight: 600;
    align-self: flex-start;
    margin-top: 0.5rem;
  }

  &__amount {
    font-size: 4rem;
    font-weight: 700;
    background: linear-gradient(135deg, oklch(0.7 0.15 162), oklch(0.6 0.13 163));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__period {
    font-size: 1rem;
    color: var(--muted-foreground);
    align-self: flex-end;
    margin-bottom: 0.75rem;
  }

  &__features {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid oklch(from var(--border) l c h / 0.5);

    &:last-child {
      border-bottom: none;
    }
  }

  &__check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: oklch(from var(--primary) l c h / 0.15);
    color: var(--primary);
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    flex-shrink: 0;
  }

  &__button {
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  // Popular card styles
  &--popular {
    border: 2px solid var(--primary);
    box-shadow: 0 10px 15px -3px oklch(from var(--primary) l c h / 0.2);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, 
        oklch(0.7 0.15 162), 
        oklch(0.6 0.13 163),
        oklch(0.77 0.15 163)
      );
      border-radius: 0.5rem 0.5rem 0 0;
    }

    .pricing-card__button {
      box-shadow: 0 4px 6px -1px oklch(from var(--primary) l c h / 0.3);
    }
  }
}
```

---

## Example 5: Search Bar with Auto-complete

### Component (SearchBar.tsx)
```tsx
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import "./SearchBar.scss";

interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
}

interface SearchBarProps {
  placeholder?: string;
  results: SearchResult[];
  onSearch: (query: string) => void;
}

export function SearchBar({ placeholder = "Search...", results, onSearch }: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__input-wrapper">
        <span className="search-bar__icon">🔍</span>
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          className="search-bar__input"
        />
        {query && (
          <button 
            className="search-bar__clear"
            onClick={() => handleSearch("")}
          >
            ✕
          </button>
        )}
      </div>

      {focused && query && results.length > 0 && (
        <Card className="search-bar__results">
          {results.map((result) => (
            <div key={result.id} className="search-result">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="search-result__title">{result.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {result.category}
                    </Badge>
                  </div>
                  <p className="search-result__description">{result.description}</p>
                </div>
                <span className="search-result__arrow">→</span>
              </div>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
}
```

### Styles (SearchBar.scss)
```scss
.search-bar {
  position: relative;
  width: 100%;
  max-width: 600px;

  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__icon {
    position: absolute;
    left: 1rem;
    font-size: 1.25rem;
    pointer-events: none;
    z-index: 1;
  }

  &__input {
    padding-left: 3rem;
    padding-right: 3rem;
    height: 3rem;
    font-size: 1rem;
    transition: all 0.2s ease;

    &:focus {
      box-shadow: 0 0 0 3px oklch(from var(--ring) l c h / 0.1),
                  0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
  }

  &__clear {
    position: absolute;
    right: 1rem;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--muted);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.2s ease;
    z-index: 1;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  &__results {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    max-height: 400px;
    overflow-y: auto;
    z-index: 50;
    padding: 0.5rem;
    animation: slide-down 0.2s ease-out;
  }
}

.search-result {
  padding: 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--accent);
  }

  &__title {
    font-weight: 600;
    color: var(--foreground);
  }

  &__description {
    font-size: 0.875rem;
    color: var(--muted-foreground);
    margin-top: 0.25rem;
  }

  &__arrow {
    color: var(--muted-foreground);
    opacity: 0;
    transform: translateX(-8px);
    transition: all 0.2s ease;
  }

  &:hover &__arrow {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Tips for Combining All Three

### 1. **Use Tailwind for Layout & Utilities**
```tsx
className="flex items-center gap-4 p-6 rounded-lg"
```

### 2. **Use shadcn for Interactive Components**
```tsx
<Button>, <Card>, <Input>, <Dialog>, etc.
```

### 3. **Use Sass for Complex Styles**
```scss
- Animations (@keyframes)
- Pseudo-elements (::before, ::after)
- Complex selectors (&__element, &--modifier)
- Mixins and functions
```

### 4. **Combine All Three**
```tsx
// Tailwind utilities + shadcn components + custom Sass class
<Card className="feature-card p-6 rounded-lg shadow-lg">
```

---

## Performance Tips

1. **Avoid duplicating Tailwind utilities in Sass**
   - ✅ Good: Use Tailwind classes directly
   - ❌ Bad: Recreating `flex`, `p-4`, etc. in Sass

2. **Use CSS variables for theme colors**
   - Access Tailwind colors via `var(--primary)`, `var(--muted)`, etc.

3. **Keep Sass for what it's good at**
   - Complex animations
   - Computed values
   - BEM methodology
   - Mixins for reusable patterns

4. **Let shadcn handle accessibility**
   - Don't override ARIA attributes
   - Extend styles, don't replace functionality

---

Happy coding! 🚀