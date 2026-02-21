import { motion } from "framer-motion";
import { Search, Pill, Heart, Brain, Eye, Bone, Baby, Leaf, Thermometer, ShieldPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const categories = [
  { icon: Pill, name: "General Medicines", count: 800, items: ["Paracetamol", "Ibuprofen", "Aspirin", "Cetirizine", "Amoxicillin", "Azithromycin"] },
  { icon: Heart, name: "Cardiac Care", count: 350, items: ["Atorvastatin", "Amlodipine", "Metoprolol", "Losartan", "Telmisartan", "Clopidogrel"] },
  { icon: Brain, name: "Neuro & Mental Health", count: 200, items: ["Escitalopram", "Sertraline", "Pregabalin", "Gabapentin", "Clonazepam", "Alprazolam"] },
  { icon: Thermometer, name: "Cold & Fever", count: 300, items: ["Dolo 650", "Sinarest", "Cheston Cold", "Crocin", "Vicks Action 500", "Combiflam"] },
  { icon: Bone, name: "Bone & Joint", count: 250, items: ["Calcium + D3", "Shelcal", "Revital", "Diclofenac", "Aceclofenac", "Flexon"] },
  { icon: Eye, name: "Eye & ENT Care", count: 150, items: ["Moxifloxacin Eye Drops", "Tobramycin", "Refresh Tears", "Otrivin", "Nasivion", "Candid Ear"] },
  { icon: Baby, name: "Baby & Mom Care", count: 200, items: ["Gripe Water", "Colicaid", "Iron Folic", "Prenatal Vitamins", "Baby Lotion", "Cerelac"] },
  { icon: Leaf, name: "Ayurvedic & Herbal", count: 300, items: ["Chyawanprash", "Giloy", "Ashwagandha", "Tulsi Drops", "Triphala", "Neem Tablets"] },
  { icon: ShieldPlus, name: "Health Supplements", count: 400, items: ["Multivitamins", "Omega-3", "Protein Powder", "Zinc", "Vitamin C", "B-Complex"] },
];

const Stocks = () => {
  const [search, setSearch] = useState("");

  const filtered = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.items.some((item) => item.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Medicine Stocks</h1>
            <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto mb-8">
              Browse our wide range of medicines and healthcare products.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search medicines, categories..."
                className="pl-12 rounded-xl bg-card text-foreground h-12"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Pill className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p className="text-lg">No medicines found matching your search.</p>
              <p className="text-sm mt-1">Try a different keyword or browse all categories.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cat.count}+ items
                    </Badge>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{cat.name}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-secondary rounded-2xl p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Can't find what you need?
            </h3>
            <p className="text-muted-foreground text-sm mb-1">
              We stock 5000+ medicines. Call us or visit the store for specific availability.
            </p>
            <p className="text-primary font-semibold">+91-XXXXXXXXXX</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Stocks;
