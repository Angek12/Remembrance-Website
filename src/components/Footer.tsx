import { Heart, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-primary">TWIBUKE</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Preserving Rwandan wisdom through digital storytelling. 
              Connecting generations, honoring heritage, building community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/stories" className="text-muted-foreground hover:text-accent transition-colors">Story Library</Link></li>
              <li><Link to="/elders" className="text-muted-foreground hover:text-accent transition-colors">Meet Elders</Link></li>
              <li><Link to="/proverbs" className="text-muted-foreground hover:text-accent transition-colors">Proverbs</Link></li>
              <li><Link to="/songs" className="text-muted-foreground hover:text-accent transition-colors">Traditional Songs</Link></li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/upload" className="text-muted-foreground hover:text-accent transition-colors">Share Stories</Link></li>
              <li><Link to="/volunteer" className="text-muted-foreground hover:text-accent transition-colors">Donate a Visit</Link></li>
              <li><Link to="/schools" className="text-muted-foreground hover:text-accent transition-colors">For Schools</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 TWIBUKE. Made with {" "}
            <Heart className="h-4 w-4 inline text-accent" />
            {" "} for preserving Rwandan heritage.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;