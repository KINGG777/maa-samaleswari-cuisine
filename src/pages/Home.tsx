import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Users, Star } from "lucide-react";
import specialDish from "@/assets/special-dish.jpg";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border shadow-soft hover:shadow-medium transition-shadow animate-fade-in">
              <CardContent className="pt-8">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Clock size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Open Daily</h3>
                <p className="text-muted-foreground">
                  Mon - Sun: 10:00 AM - 10:00 PM
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border shadow-soft hover:shadow-medium transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <MapPin size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Prime Location</h3>
                <p className="text-muted-foreground">
                  Easy to reach, ample parking available
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border shadow-soft hover:shadow-medium transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-8">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Users size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Family Friendly</h3>
                <p className="text-muted-foreground">
                  Perfect for gatherings and celebrations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Today's Special Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Today's Special</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience our chef's signature creation - a traditional Odia thali prepared with authentic recipes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={specialDish}
                alt="Traditional Odia Thali"
                className="rounded-2xl shadow-medium w-full h-auto"
              />
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="mb-6">
                <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Chef's Recommendation
                </span>
                <h3 className="font-playfair text-3xl font-bold mb-4">Traditional Odia Thali</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A complete meal featuring an assortment of traditional curries, dal, rice, vegetables, 
                  fish curry, papad, and authentic chutneys. Each element is carefully prepared to bring 
                  you the authentic taste of Odisha.
                </p>
                <div className="flex items-center mb-6">
                  <Star className="text-secondary fill-secondary" size={20} />
                  <Star className="text-secondary fill-secondary" size={20} />
                  <Star className="text-secondary fill-secondary" size={20} />
                  <Star className="text-secondary fill-secondary" size={20} />
                  <Star className="text-secondary fill-secondary" size={20} />
                  <span className="ml-2 text-muted-foreground">(4.9/5 from 200+ reviews)</span>
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="font-playfair text-4xl font-bold text-primary">₹299</span>
                  <span className="text-muted-foreground ml-2">per person</span>
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/menu">Explore Full Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Authentic Flavors?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Book your table now and enjoy a memorable dining experience with your loved ones
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            <Link to="/contact">Reserve Your Table</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
