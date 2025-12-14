import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "./DemoCard.scss";

export function DemoCard() {
  return (
    <div className="demo-wrapper p-8 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="demo-header text-center">
          <Badge variant="secondary" className="mb-4">
            Live Demo
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            shadcn + Tailwind + Sass
          </h1>
          <p className="text-xl text-muted-foreground">
            All three technologies working together seamlessly
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="feature-card p-6">
            <div className="feature-card__icon mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground">
              Utility-first CSS framework for rapid UI development
            </p>
          </Card>

          <Card className="feature-card p-6">
            <div className="feature-card__icon mb-4">🧩</div>
            <h3 className="text-xl font-bold mb-2">shadcn/ui</h3>
            <p className="text-sm text-muted-foreground">
              Beautiful, accessible components built with Radix UI
            </p>
          </Card>

          <Card className="feature-card p-6">
            <div className="feature-card__icon mb-4">💅</div>
            <h3 className="text-xl font-bold mb-2">Sass/SCSS</h3>
            <p className="text-sm text-muted-foreground">
              Powerful CSS preprocessor with mixins and variables
            </p>
          </Card>
        </div>

        {/* Interactive Form Card */}
        <Card className="gradient-card p-8">
          <h2 className="text-3xl font-bold mb-6">Try It Out</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="input-animated"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="input-animated"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                placeholder="Tell us what you think..."
                className="input-animated"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="default" className="btn-gradient">
                Submit Form
              </Button>
              <Button variant="outline" className="btn-pulse">
                Learn More
              </Button>
              <Button variant="ghost">Cancel</Button>
            </div>
          </div>
        </Card>

        {/* Stats Section */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat-item">
            <div className="stat-item__value">100%</div>
            <div className="stat-item__label">Customizable</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__value">∞</div>
            <div className="stat-item__label">Possibilities</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__value">3</div>
            <div className="stat-item__label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__value">1</div>
            <div className="stat-item__label">Amazing Stack</div>
          </div>
        </div>

        {/* Color Palette Demo */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Theme Colors</h2>
          <div className="flex flex-wrap gap-3">
            <div className="color-swatch bg-primary text-primary-foreground">
              Primary
            </div>
            <div className="color-swatch bg-secondary text-secondary-foreground">
              Secondary
            </div>
            <div className="color-swatch bg-accent text-accent-foreground">
              Accent
            </div>
            <div className="color-swatch bg-muted text-muted-foreground">
              Muted
            </div>
            <div className="color-swatch bg-destructive text-destructive-foreground">
              Destructive
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
