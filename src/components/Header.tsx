import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf } from "lucide-react";
import vayuMascot from "@/assets/vayu-mascot.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Learn", href: "#learn" },
    { label: "Games", href: "#games" },
    { label: "Challenges", href: "#challenges" },
    { label: "Community", href: "#community" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={vayuMascot} 
              alt="ClimaQuest Logo" 
              className="w-10 h-10"
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                ClimaQuest
              </span>
              <Leaf className="w-5 h-5 text-primary" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <Button variant="hero" className="font-medium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <img 
                    src={vayuMascot} 
                    alt="ClimaQuest" 
                    className="w-8 h-8"
                  />
                  <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    ClimaQuest
                  </span>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" className="justify-start">
                    Sign In
                  </Button>
                  <Button variant="hero" className="justify-start">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;