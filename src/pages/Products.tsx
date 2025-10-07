import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package } from "lucide-react";

import PBS1 from "../../public/PBS-1.png";
import PBS2 from "../../public/PBS-2.png";
import PBS3 from "../../public/PBS-3.png";
import AMBS1 from "../../public/AMBS-1.png";
import AMBS2 from "../../public/AMBS-2.png";
import AMBS3 from "../../public/AMBS-3.png";
import MBS1 from "../../public/MBS-1.png";
import MBS2 from "../../public/MBS-2.png";
import MBS3 from "../../public/MBS-3.png";
import SS1 from "../../public/SS-1.png";
import SS2 from "../../public/SS-2.png";
import SS3 from "../../public/SS-3.png";

const productCategories = [
  {
    title: "Plastic Buffet Set",
    products: [PBS1, PBS2, PBS3],
  },
  {
    title: "Acrylic Melamine Buffet Set",
    products: [AMBS1, AMBS2, AMBS3],
  },
  {
    title: "Melamine Buffet Set",
    products: [MBS1, MBS2, MBS3],
  },
  {
    title: "Melamine Soup Bowl Set",
    products: [SS1, SS2, SS3],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Our Products
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Discover our comprehensive range of premium melamine crockery and
              plastic solutions, designed to meet the diverse needs of hotels,
              restaurants, caterers, and homes.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {category.title}
                </h2>
                <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {category.products.map((product, productIndex, arr) => (
                  <Card
                    key={productIndex}
                    className="shadow-card hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/30 group overflow-hidden"
                  >
                    <CardContent className="p-6">
                      {/* Image Placeholder */}
                      <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-muted transition-smooth overflow-hidden">
                        <div className="text-7xl group-hover:scale-110 transition-smooth">
                          <img src={arr[productIndex]} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer custom solutions tailored to your specific needs. Contact
            us to discuss your requirements.
          </p>
          <a href="/#contact">
            <button className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-elegant transition-smooth">
              Contact Us Today
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
