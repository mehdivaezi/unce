import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

const priceData = [
  { name: "طلای ۱۸ عیار", price: "۳,۸۵۰,۰۰۰", unit: "تومان/گرم", change: "+۲.۳٪", isUp: true },
  { name: "طلای ۲۴ عیار", price: "۵,۱۲۰,۰۰۰", unit: "تومان/گرم", change: "+۱.۸٪", isUp: true },
  { name: "سکه امامی", price: "۴۵,۵۰۰,۰۰۰", unit: "تومان", change: "-۰.۵٪", isUp: false },
  { name: "نیم سکه", price: "۲۶,۲۰۰,۰۰۰", unit: "تومان", change: "+۱.۲٪", isUp: true },
  { name: "ربع سکه", price: "۱۵,۸۰۰,۰۰۰", unit: "تومان", change: "+۰.۹٪", isUp: true },
  { name: "اونس جهانی طلا", price: "۲,۰۳۵", unit: "دلار", change: "+۰.۴٪", isUp: true },
];

const GoldPrices = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            قیمت <span className="text-gradient-gold">لحظه‌ای</span> طلا
          </h2>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4" />
            به‌روزرسانی: ۱۴۰۳/۱۰/۰۷ - ۱۴:۳۰
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {priceData.map((item, index) => (
            <Card 
              key={item.name}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:glow-gold-sm group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-2xl font-bold text-foreground">
                    {item.price}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.unit}</div>
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                  item.isUp 
                    ? 'bg-green-500/10 text-green-400' 
                    : 'bg-red-500/10 text-red-400'
                }`}>
                  {item.isUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {item.change}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldPrices;
