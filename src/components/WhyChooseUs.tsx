import { Card, CardContent } from "./ui/card";
import { DollarSign, Zap, Award, FileText, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "We provide affordable rates without compromising on quality, ensuring you receive the best value for your investment",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Innovative Technology",
    description: "Utilizing the latest technology, we guarantee that all our products meet the highest industry standards",
    color: "accent"
  },
  {
    icon: Award,
    title: "High-Quality Assurance",
    description: "Our products, including melamine crockery, are crafted using only the finest materials, ensuring durability and reliability",
    color: "primary"
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    description: "We offer clear and upfront pricing, so you can make informed decisions without any hidden costs",
    color: "accent"
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Our experienced team is dedicated to delivering the best customer service, ensuring seamless interactions and high satisfaction",
    color: "primary"
  },
  {
    icon: Trophy,
    title: "Winning Excellence",
    description: "Uday Plast has earned industry recognition for excellence in innovation and quality, ensuring we always provide the best products",
    color: "accent"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 20 years of industrial experience, Uday Plast has established itself as a leading manufacturer, 
            exporter, and supplier in the melamine crockery and plastic products industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/30 group"
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-smooth ${
                    feature.color === 'primary' ? 'gradient-primary' : 'bg-accent'
                  } group-hover:scale-110`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-primary">
            Innovating Excellence in Every Industry We Serve
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
