import { motion } from "framer-motion";
import { ShieldCheck, Heart, Users, Award, Clock, MapPin } from "lucide-react";
import pharmacistImage from "@/assets/pharmacist.jpg";
import heroImage from "@/assets/hero-pharmacy.jpg";

const values = [
  { icon: ShieldCheck, title: "Quality Assurance", desc: "We source medicines only from certified distributors and trusted pharmaceutical companies." },
  { icon: Heart, title: "Customer Care", desc: "Every customer is treated like family. Your health and satisfaction is our top priority." },
  { icon: Users, title: "Community Focused", desc: "Proudly serving the Jai Vihar, Baprola community for over a decade." },
  { icon: Award, title: "Licensed Pharmacy", desc: "Fully licensed and compliant with all government pharmaceutical regulations." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img src={heroImage} alt="Anjaneya Pharmacy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">About Us</h1>
            <p className="text-primary-foreground/80 text-lg max-w-lg">
              Learn about our journey, values, and commitment to your health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Anjaneya Pharmacy was founded with a simple mission – to provide affordable, quality healthcare products to the people of Jai Vihar, Baprola, New Delhi.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                What started as a small medical shop has grown into a trusted pharmacy that the community relies on for all their healthcare needs. We stock over 5,000 medicines, health supplements, and medical devices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced pharmacists are always available to guide you with the right medicines and health advice. We believe in building lasting relationships based on trust and genuine care.
              </p>
              <div className="mt-6 flex gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  8 AM – 10 PM
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Jai Vihar, Baprola
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={pharmacistImage} alt="Our pharmacist" className="rounded-2xl shadow-elevated w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-foreground text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
