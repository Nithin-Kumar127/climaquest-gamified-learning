import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  Mail, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from "lucide-react";
import vayuMascot from "@/assets/vayu-mascot.png";

const Footer = () => {
  const quickLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Age Groups", href: "#age-groups" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Educator Resources", href: "#educators" },
  ];

  const support = [
    { label: "Help Center", href: "#help" },
    { label: "Contact Us", href: "#contact" },
    { label: "Report Issue", href: "#report" },
    { label: "Feature Request", href: "#features" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Child Safety", href: "#safety" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={vayuMascot} 
                alt="ClimaQuest" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-2xl font-bold">ClimaQuest</h3>
                <div className="flex items-center gap-1 text-primary-foreground/80">
                  <span className="text-sm">Powered by Vayu</span>
                  <Leaf className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Empowering the next generation of climate champions through engaging, 
              gamified education that makes environmental learning fun and impactful.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="secondary" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>© 2024 ClimaQuest. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for our planet.</span>
          </div>
          
          <div className="text-sm text-primary-foreground/80">
            Climate education for a sustainable future
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;