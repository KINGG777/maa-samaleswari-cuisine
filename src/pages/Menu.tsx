import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Menu = () => {
  const menuSections = [
    {
      title: "Breakfast",
      items: [
        { name: "Puri Sabji", description: "Fluffy puris with spiced potato curry", price: 80 },
        { name: "Chhena Poda", description: "Traditional Odia cheese dessert", price: 60 },
        { name: "Dalma", description: "Lentils with vegetables and mild spices", price: 90 },
        { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup", price: 70 },
        { name: "Masala Dosa", description: "Crispy rice crepe with potato filling", price: 100 },
      ],
    },
    {
      title: "Lunch",
      items: [
        { name: "Odia Thali", description: "Complete meal with rice, dal, curry, fish, and sweets", price: 299 },
        { name: "Chicken Curry", description: "Tender chicken in aromatic spices", price: 250 },
        { name: "Fish Orly", description: "Coastal style fried fish", price: 280 },
        { name: "Paneer Butter Masala", description: "Cottage cheese in creamy tomato gravy", price: 220 },
        { name: "Mutton Curry", description: "Slow-cooked mutton with traditional spices", price: 320 },
        { name: "Vegetable Biryani", description: "Fragrant rice with mixed vegetables", price: 180 },
      ],
    },
    {
      title: "Dinner",
      items: [
        { name: "Tandoori Chicken", description: "Clay oven grilled chicken with spices", price: 300 },
        { name: "Butter Naan", description: "Soft leavened bread with butter", price: 40 },
        { name: "Dal Makhani", description: "Creamy black lentils slow-cooked overnight", price: 180 },
        { name: "Chicken Biryani", description: "Aromatic rice layered with spiced chicken", price: 270 },
        { name: "Prawn Masala", description: "Juicy prawns in tangy spice blend", price: 350 },
        { name: "Paneer Tikka", description: "Grilled cottage cheese with bell peppers", price: 240 },
      ],
    },
    {
      title: "Fast Food",
      items: [
        { name: "Veg Burger", description: "Crispy patty with fresh vegetables", price: 90 },
        { name: "Chicken Burger", description: "Grilled chicken with special sauce", price: 120 },
        { name: "French Fries", description: "Crispy golden potato fries", price: 80 },
        { name: "Veg Spring Roll", description: "Crispy rolls with vegetable filling", price: 100 },
        { name: "Chicken Wings", description: "Spicy fried chicken wings", price: 180 },
        { name: "Paneer Roll", description: "Soft roll with spiced paneer", price: 110 },
      ],
    },
    {
      title: "Beverages & Desserts",
      items: [
        { name: "Lassi", description: "Traditional yogurt drink", price: 60 },
        { name: "Fresh Lime Soda", description: "Refreshing lemon drink", price: 50 },
        { name: "Masala Chai", description: "Spiced Indian tea", price: 30 },
        { name: "Rasmalai", description: "Soft cheese patties in sweet milk", price: 80 },
        { name: "Gulab Jamun", description: "Deep fried milk dumplings in syrup", price: 70 },
        { name: "Ice Cream", description: "Choice of flavors", price: 90 },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Our Menu</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our selection of authentic Odia and Indian dishes, prepared fresh daily with 
              traditional recipes and premium ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {menuSections.map((section, index) => (
              <div
                key={section.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="border-border shadow-soft">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="font-playfair text-3xl text-center">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {section.items.map((item, itemIndex) => (
                        <div key={item.name}>
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                              <CardDescription className="text-muted-foreground">
                                {item.description}
                              </CardDescription>
                            </div>
                            <div className="font-playfair text-xl font-bold text-primary whitespace-nowrap">
                              ₹{item.price}
                            </div>
                          </div>
                          {itemIndex < section.items.length - 1 && (
                            <Separator className="mt-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-primary/20 bg-primary/5">
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">
                <strong>Note:</strong> All prices are in Indian Rupees (₹). Menu items and prices are subject to change. 
                For special dietary requirements or allergies, please inform our staff.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Menu;
