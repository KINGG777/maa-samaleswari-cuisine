import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, ChefHat } from "lucide-react";
import interiorImage from "@/assets/restaurant-interior.jpg";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A journey of passion, tradition, and authentic flavors
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img
                src={interiorImage}
                alt="Restaurant Interior"
                className="rounded-2xl shadow-medium w-full h-auto"
              />
            </div>

            <div className="animate-fade-in">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Where Tradition Meets Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Named after the revered Goddess Samaleswari, Maa Samaleswari Restaurant was founded 
                  with a vision to bring authentic Odia and Indian cuisine to food lovers who appreciate 
                  traditional flavors and cultural heritage.
                </p>
                <p>
                  Our journey began in 2015 with a small family kitchen and a big dream - to share 
                  the rich culinary traditions of Odisha with the world. Today, we stand proud as a 
                  destination for those seeking genuine flavors, prepared with love and authenticity.
                </p>
                <p>
                  Every recipe in our kitchen has been passed down through generations, carefully 
                  preserved and perfected. We use only the finest ingredients, traditional cooking 
                  methods, and time-honored spice blends to ensure each dish tells a story of our 
                  cultural heritage.
                </p>
                <p className="font-medium text-foreground">
                  At Maa Samaleswari, we don't just serve food - we serve memories, traditions, 
                  and the warmth of home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">What Makes Us Special</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our commitment to excellence in every aspect of your dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-border shadow-soft hover:shadow-medium transition-shadow animate-fade-in">
              <CardContent className="pt-8">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Heart size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every dish is prepared with care, passion, and dedication to perfection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border shadow-soft hover:shadow-medium transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-8">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Award size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">
                  Only the finest and freshest ingredients make it to your plate
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
                <h3 className="font-playfair text-xl font-semibold mb-2">Family Values</h3>
                <p className="text-muted-foreground">
                  A warm, welcoming atmosphere that makes you feel right at home
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border shadow-soft hover:shadow-medium transition-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-8">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <ChefHat size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Expert Chefs</h3>
                <p className="text-muted-foreground">
                  Experienced culinary masters who honor traditional recipes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed opacity-95">
              To preserve and celebrate the rich culinary heritage of Odisha while creating memorable 
              dining experiences that bring people together. We believe that food is more than sustenance - 
              it's a connection to our roots, our culture, and our loved ones. Through every meal we serve, 
              we aim to share the warmth, love, and traditions that define Odia hospitality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
