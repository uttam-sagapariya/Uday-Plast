import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium kitchenware collection showcasing plates and bowls"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Premium Kitchenware
          <span className="block text-primary mt-2">
            Crafted with Excellence
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Manufacturing high-quality plates and bowls in various sizes for homes
          and businesses worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("products")}
            className="text-lg px-8"
          >
            View Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="text-lg px-8"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
