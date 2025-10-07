import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Utensils, Package } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About Uday Plast
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for premium melamine crockery and
            high-performance plastic solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            At Uday Plast, we combine innovation, durability, and sustainability
            to meet the ever-changing needs of modern businesses and households
            alike. Whether you're outfitting a busy banquet hall, stocking
            retail shelves, or enhancing your home, Uday Plast provides
            solutions that balance form, function, and environmental
            responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-card hover:shadow-elegant transition-smooth border-primary/20">
            <CardContent className="p-8">
              <div className="w-14 h-14 gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Melamine Crockery</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We cater to caterers, hotels, restaurants, and food service
                businesses. Our melamine tableware blends elegant design with
                unmatched strength.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lightweight yet shatter-resistant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Stain-proof and easy to clean</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Perfect for high-volume environments</span>
                </li>
              </ul>
              <div className="text-right text-gray-500 hover:text-black cursor-pointer pt-2">
                <Link to="/products">Learn More...</Link>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth border-accent/20">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plastic Products</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Engineered for retailers and commercial applications, our
                premium-grade plastics deliver exceptional performance and
                versatility.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Exceptional wear and corrosion resistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Easy processing and recyclability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Vibrant color options and robust performance</span>
                </li>
              </ul>
              <div className="text-right text-gray-500 hover:text-black cursor-pointer pt-2">
                <Link to="/products">Learn More...</Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-card rounded-2xl shadow-card">
          <h3 className="text-3xl font-bold mb-6 text-center">Our Story</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded with a passion for quality craftsmanship, we've grown into
              a trusted name in kitchenware manufacturing. Our commitment to
              excellence drives every aspect of our business, from design to
              delivery.
            </p>
            <p>
              Each piece is carefully crafted to meet the highest standards of
              durability and aesthetic appeal. We work with restaurants,
              retailers, and homeowners to provide premium kitchenware that
              stands the test of time.
            </p>
            <p>
              With modern facilities and traditional attention to detail, we
              continue to innovate while honoring the craft that made us who we
              are today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
