import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Gamepad2, 
  Camera, 
  MessageCircle, 
  BarChart3, 
  Award,
  Users,
  Target
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning Modules",
      description: "Age-appropriate content that adapts to your learning style with flashcards, videos, and hands-on activities.",
      badge: "Learn",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Gamepad2,
      title: "Climate Games & Quizzes",
      description: "Test your knowledge with engaging games that make climate science fun and memorable.",
      badge: "Play",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Camera,
      title: "Action Central Challenges",
      description: "Complete real-world climate actions and share photos of your eco-friendly projects to earn points.",
      badge: "Act",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      icon: MessageCircle,
      title: "Ask Vayu - AI Climate Guide",
      description: "Get instant answers to your climate questions from our friendly AI assistant, Vayu.",
      badge: "Chat",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your learning journey and see how your eco-points stack up against other climate heroes.",
      badge: "Track",
      color: "bg-indigo-500/10 text-indigo-600",
    },
    {
      icon: Award,
      title: "Achievements & Rewards",
      description: "Unlock badges, certificates, and special recognition for your climate action achievements.",
      badge: "Achieve",
      color: "bg-yellow-500/10 text-yellow-600",
    },
  ];

  const stats = [
    { number: "50+", label: "Learning Modules", icon: BookOpen },
    { number: "1000+", label: "Interactive Quizzes", icon: Target },
    { number: "10K+", label: "Active Learners", icon: Users },
    { number: "25+", label: "Achievement Badges", icon: Award },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Climate Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover a comprehensive platform designed to make climate education engaging, 
            interactive, and impactful for learners of all ages.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-strong transition-all duration-300 group border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Join Our Growing Community
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.location.href = '/auth'}
          >
            Start Learning Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;