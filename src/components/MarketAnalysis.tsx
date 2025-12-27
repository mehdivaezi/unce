import { LineChart, BarChart3, PieChart, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const analysisData = [
  {
    icon: LineChart,
    title: "تحلیل تکنیکال روزانه",
    description: "بررسی نمودارهای قیمت و شناسایی نقاط ورود و خروج با استفاده از اندیکاتورهای حرفه‌ای",
  },
  {
    icon: BarChart3,
    title: "پیش‌بینی هفتگی",
    description: "گزارش جامع از روند احتمالی بازار طلا در هفته آینده با درصد دقت بالای ۸۵٪",
  },
  {
    icon: PieChart,
    title: "سبد سرمایه‌گذاری",
    description: "پیشنهاد ترکیب بهینه سکه، طلای آب‌شده و جواهرات برای حفظ و افزایش سرمایه",
  },
  {
    icon: Activity,
    title: "هشدار قیمت",
    description: "اطلاع‌رسانی فوری در زمان رسیدن قیمت به سطوح کلیدی و فرصت‌های معاملاتی",
  },
];

const MarketAnalysis = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تحلیل <span className="text-gradient-gold">حرفه‌ای</span> بازار
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            تیم تحلیلگران ما با بیش از ۱۰ سال تجربه، هر روز بازار را رصد کرده و تحلیل‌های دقیق ارائه می‌دهند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analysisData.map((item, index) => (
            <Card 
              key={item.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">۹۵٪</div>
              <div className="text-sm text-muted-foreground">دقت پیش‌بینی</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">۳۶۵</div>
              <div className="text-sm text-muted-foreground">روز فعال در سال</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">۵۰+</div>
              <div className="text-sm text-muted-foreground">تحلیلگر متخصص</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">۲۴/۷</div>
              <div className="text-sm text-muted-foreground">پشتیبانی آنلاین</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
