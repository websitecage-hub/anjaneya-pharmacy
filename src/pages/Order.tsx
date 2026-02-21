import { motion } from "framer-motion";
import { Truck, MapPin, Clock, Phone, Upload, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import deliveryImage from "@/assets/delivery.jpg";

const deliveryZones = [
  { range: "Within 1 km", time: "20-30 min", fee: "Free", color: "bg-medical-green-light text-medical-green" },
  { range: "1-2 km", time: "30-45 min", fee: "₹20", color: "bg-medical-blue-light text-medical-blue" },
  { range: "2-3 km", time: "45-60 min", fee: "₹40", color: "bg-medical-amber-light text-medical-amber" },
];

const Order = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", address: "", medicines: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed! We'll call you to confirm shortly.");
    setFormData({ name: "", phone: "", address: "", medicines: "", notes: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Order Medicines</h1>
            <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">
              Get medicines delivered to your doorstep within 1-3 km of Jai Vihar, Baprola.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">Delivery Zones</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {deliveryZones.map((zone, i) => (
              <motion.div
                key={zone.range}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card text-center border border-border"
              >
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${zone.color}`}>
                  <MapPin className="w-3 h-3" />
                  {zone.range}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-1">
                  <Clock className="w-3.5 h-3.5" /> {zone.time}
                </div>
                <div className="font-display text-xl font-bold text-foreground">{zone.fee}</div>
                <div className="text-xs text-muted-foreground">delivery fee</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Place Your Order</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                    <Input
                      placeholder="+91-XXXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Delivery Address *</label>
                    <Textarea
                      placeholder="Your full address (within 3 km of Jai Vihar)"
                      rows={2}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Medicines Required *</label>
                    <Textarea
                      placeholder="List the medicines you need (name, dosage, quantity)"
                      rows={4}
                      value={formData.medicines}
                      onChange={(e) => setFormData({ ...formData, medicines: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Notes</label>
                    <Input
                      placeholder="Any special instructions"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="bg-secondary rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      We'll call you to confirm your order and provide the total cost before dispatching.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground rounded-xl" size="lg">
                    Place Order <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Side info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <img src={deliveryImage} alt="Delivery" className="rounded-2xl shadow-elevated w-full object-cover max-h-[280px]" />

              <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">How It Works</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "Submit your order with medicine names" },
                    { step: "2", text: "We'll call to confirm availability & price" },
                    { step: "3", text: "Medicine delivered to your doorstep" },
                    { step: "4", text: "Pay via cash on delivery" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                        {item.step}
                      </div>
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-2">Prefer to Call?</h3>
                <p className="text-sm text-muted-foreground mb-3">Order directly over the phone</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Phone className="w-5 h-5" />
                  +91-XXXXXXXXXX
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
