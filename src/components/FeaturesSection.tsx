import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, BookOpen, Users, GraduationCap, MessageSquare, MapPin } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-accent" />,
      title: "Record & Share",
      description: "Upload videos and audio recordings of elders sharing their stories, traditions, and wisdom for future generations.",
      action: "Start Recording"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Cultural Library",
      description: "Explore proverbs, recipes, songs, and traditional knowledge preserved in Kinyarwanda with English/French translations.",
      action: "Browse Library"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Elder Profiles",
      description: "Connect with community elders, learn about their region, age, and the unique wisdom they want to pass down.",
      action: "Meet Elders"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-accent" />,
      title: "School Resources",
      description: "Educational materials for schools teaching Rwandan culture and history, making heritage learning engaging.",
      action: "For Educators"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Community Engagement",
      description: "Youth can comment, react, and engage respectfully with the wisdom shared by elders in our community.",
      action: "Join Discussion"
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: "Donate a Visit",
      description: "Volunteer to visit an elder in your community and help them record their stories for our digital archive.",
      action: "Volunteer"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Preserving Wisdom Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform connects generations through technology, ensuring that the rich traditions 
            and knowledge of Rwandan elders are never lost.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-traditional hover:shadow-golden transition-all duration-500 hover:-translate-y-2 animate-fall-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="mb-4 group-hover:animate-gentle-bounce">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="outline" className="w-full hover:bg-accent hover:text-accent-foreground">
                  {feature.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;