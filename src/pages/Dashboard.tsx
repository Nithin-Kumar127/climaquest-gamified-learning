import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Trophy, Target, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Welcome back, Climate Hero!
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to continue your quest to save the planet?
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-pathfinder-bg/50 border-pathfinder/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eco Points</CardTitle>
                <Leaf className="h-4 w-4 text-pathfinder" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,340</div>
                <p className="text-xs text-muted-foreground">+180 from last week</p>
              </CardContent>
            </Card>

            <Card className="bg-explorer-bg/50 border-explorer/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Challenges Completed</CardTitle>
                <Target className="h-4 w-4 text-explorer" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 this month</p>
              </CardContent>
            </Card>

            <Card className="bg-innovator-bg/50 border-innovator/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                <Trophy className="h-4 w-4 text-innovator" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+2 this week</p>
              </CardContent>
            </Card>

            <Card className="bg-success/10 border-success/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Community Rank</CardTitle>
                <Users className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">#142</div>
                <p className="text-xs text-muted-foreground">Top 15% globally</p>
              </CardContent>
            </Card>
          </div>

          {/* Current Progress */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Quest Progress</CardTitle>
                <CardDescription>Complete your climate action challenges</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Renewable Energy Explorer</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Carbon Footprint Tracker</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Ecosystem Guardian</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest climate hero milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-pathfinder-bg text-pathfinder">
                    New Badge
                  </Badge>
                  <span className="text-sm">Solar Panel Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-explorer-bg text-explorer">
                    Level Up
                  </Badge>
                  <span className="text-sm">Explorer Level 5</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-innovator-bg text-innovator">
                    Challenge
                  </Badge>
                  <span className="text-sm">Weekly Carbon Goal</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Continue Your Journey</CardTitle>
              <CardDescription>Pick up where you left off</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="pathfinder" className="h-auto p-6 flex flex-col items-center gap-2">
                  <Leaf className="w-8 h-8" />
                  <span className="font-semibold">New Challenge</span>
                  <span className="text-sm opacity-90">Start a climate quest</span>
                </Button>
                <Button variant="explorer" className="h-auto p-6 flex flex-col items-center gap-2">
                  <Users className="w-8 h-8" />
                  <span className="font-semibold">Join Community</span>
                  <span className="text-sm opacity-90">Connect with others</span>
                </Button>
                <Button variant="innovator" className="h-auto p-6 flex flex-col items-center gap-2">
                  <Trophy className="w-8 h-8" />
                  <span className="font-semibold">View Leaderboard</span>
                  <span className="text-sm opacity-90">See your ranking</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;