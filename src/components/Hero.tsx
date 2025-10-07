import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import bgImg from "../../public/background.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 text-blue-400"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Premium kitchenware collection showcasing plates and bowls"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/90"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Premium Crockery
            <span className="block mt-2">& Plastic Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto">
            Combining innovation, durability, and sustainability to meet the
            needs of modern businesses and households
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="accent"
              onClick={scrollToContact}
              className="text-lg px-8"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-8 bg-background/10 backdrop-blur-sm text-foreground border-foreground/30 hover:bg-background/20 hover:text-black hover:border-black"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-foreground">
              <div className="text-3xl md:text-4xl font-bold">20+</div>
              <div className="text-sm md:text-base text-foreground/80">
                Years Experience
              </div>
            </div>
            <div className="text-foreground">
              <div className="text-3xl md:text-4xl font-bold">5000+</div>
              <div className="text-sm md:text-base text-foreground/80">
                Happy Clients
              </div>
            </div>
            <div className="text-foreground">
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-sm md:text-base text-foreground/80">
                Quality Assured
              </div>
            </div>
            <div className="text-foreground">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-sm md:text-base text-foreground/80">
                Customer Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
