import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Zap, Users, Trophy } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-climate.jpg";
import vayuMascot from "@/assets/vayu-mascot.png";

const Hero = () => {
  const { user } = useAuth();

  return (
    <section className="relative min-h-screen bg-gradient-earth overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Diverse young people exploring nature with technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={vayuMascot} 
                alt="Vayu - ClimaQuest mascot" 
                className="w-16 h-16 animate-bounce"
              />
              <div>
                <h2 className="text-lg font-medium text-muted-foreground">Meet Vayu, Your Climate Guide</h2>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                ClimaQuest
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Embark on an exciting journey to learn about climate change, earn eco-points, 
              and become a champion for our planet's future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {user ? (
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Continue Your Quest
                </Button>
              ) : (
                <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/auth">Start Your Quest</Link>
                </Button>
              )}
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">10K+ Young Climate Heroes</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Award-Winning Platform</span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-pathfinder-bg/80 backdrop-blur-sm border-pathfinder/20 hover:shadow-strong transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-pathfinder rounded-lg">
                  <Leaf className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Pathfinder (Ages 8-12)</h3>
                  <p className="text-muted-foreground">Discover nature's secrets through fun games and colorful adventures!</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-explorer-bg/80 backdrop-blur-sm border-explorer/20 hover:shadow-strong transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-explorer rounded-lg">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Explorer (Ages 13-17)</h3>
                  <p className="text-muted-foreground">Dive deeper into climate science with interactive challenges!</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-innovator-bg/80 backdrop-blur-sm border-innovator/20 hover:shadow-strong transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-innovator rounded-lg">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Innovator (Ages 18+)</h3>
                  <p className="text-muted-foreground">Lead climate action projects and analyze real environmental data!</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;