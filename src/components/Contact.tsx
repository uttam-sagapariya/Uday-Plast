import { Card, CardContent } from "./ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to enhance your business with premium melamine crockery and
            plastic solutions? Contact us today!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-elegant border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        25, Harekrishna Ind Estate,
                        <br />
                        Opposite ACRE. Anu Design,
                        <br />
                        Near Ambica Nagar, Odhav,
                        <br />
                        Ahmedabad - 382415
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                      <Phone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone Numbers</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p className="flex gap-4">
                          <span>98254 30464</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:udaymelamine@yahoo.com"
                        className="text-primary hover:underline"
                      >
                        udaymelamine@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col justify-center bg-muted/50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Join countless satisfied customers who trust Uday Plast for
                    products that stand the test of time.
                  </p>
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a href="mailto:udaymelamine@yahoo.com">
                        Request a Quote
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a href="tel:9825430464">Call Us Now</a>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 text-center">
                    Available 24/7 for your convenience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
