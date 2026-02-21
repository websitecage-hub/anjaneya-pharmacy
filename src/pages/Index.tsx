import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Pill, Truck, Clock, ShieldCheck, HeartPulse, Stethoscope,
  Package, Star, ArrowRight, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense, lazy } from "react";
import heroImage from "@/assets/hero-pharmacy.jpg";
import deliveryImage from "@/assets/delivery.jpg";
import pharmacistImage from "@/assets/pharmacist.jpg";

const PillScene = lazy(() => import("@/components/PillScene"));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  { icon: Pill, title: "Prescription Medicines", desc: "All prescribed drugs available at competitive prices" },
  { icon: HeartPulse, title: "Health Supplements", desc: "Vitamins, minerals and nutritional supplements" },
  { icon: Stethoscope, title: "Health Devices", desc: "BP monitors, glucometers, thermometers & more" },
  { icon: Truck, title: "Home Delivery", desc: "Fast delivery within 1-3 km radius of our store" },
  { icon: ShieldCheck, title: "Genuine Products", desc: "100% authentic medicines from trusted brands" },
  { icon: Package, title: "OTC Products", desc: "Over-the-counter medicines for everyday needs" },
];

const stats = [
  { value: "5000+", label: "Medicines Available" },
  { value: "10+", label: "Years of Service" },
  { value: "3 km", label: "Delivery Radius" },
  { value: "1000+", label: "Happy Customers" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Open 8 AM – 10 PM Daily
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Your Trusted{" "}
                <span className="text-gradient-hero">Neighborhood</span>{" "}
                Pharmacy
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground mb-8 max-w-lg">
                Anjaneya Pharmacy – Serving Jai Vihar, Baprola with quality medicines, health products & fast home delivery within 3 km.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-primary-foreground rounded-xl px-8">
                  <Link to="/order">
                    Order Medicines <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
                  <Link to="/stocks">View Stocks</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[350px] lg:h-[450px] relative"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-glow animate-pulse-glow">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center bg-secondary">
                      <Pill className="w-12 h-12 text-primary animate-spin" />
                    </div>
                  }
                >
                  <PillScene />
                </Suspense>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-primary-foreground"
              >
                <div className="text-3xl md:text-4xl font-display font-bold">{stat.value}</div>
                <div className="text-sm opacity-80 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We offer a wide range of pharmaceutical services to keep you and your family healthy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Banner */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={deliveryImage}
                alt="Medicine delivery"
                className="rounded-2xl shadow-elevated w-full object-cover max-h-[350px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fast Medicine Delivery
              </h2>
              <p className="text-muted-foreground mb-6">
                Get your medicines delivered to your doorstep within 1-3 km radius. Quick, safe, and hassle-free delivery service.
              </p>
              <div className="space-y-3 mb-8">
                {["Delivery within 30-60 minutes", "No minimum order value", "Safe & hygienic packaging", "Cash on delivery available"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-gradient-hero hover:opacity-90 text-primary-foreground rounded-xl px-8">
                <Link to="/order">
                  Order Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-gradient-hero">Anjaneya Pharmacy</span>?
              </h2>
              <p className="text-muted-foreground mb-6">
                With over a decade of trusted service in Jai Vihar, Baprola, we are committed to providing genuine medicines at the best prices.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Star, text: "Trusted Since Years" },
                  { icon: ShieldCheck, text: "100% Genuine" },
                  { icon: Clock, text: "Open 8AM-10PM" },
                  { icon: Truck, text: "Home Delivery" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="rounded-xl px-8">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={pharmacistImage}
                alt="Our pharmacist"
                className="rounded-2xl shadow-elevated w-full object-cover max-h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Medicines? We're Just a Call Away!
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Visit us at Jai Vihar, Baprola or order for delivery within 1-3 km.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90 rounded-xl px-8">
                <Link to="/order">Order Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
