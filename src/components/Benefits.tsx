import { Check, Crown, Zap, Shield, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const benefits = [
  "دریافت قیمت لحظه‌ای طلا و سکه",
  "تحلیل روزانه بازار از کارشناسان",
  "هشدار فوری تغییرات مهم قیمت",
  "راهنمای خرید و سرمایه‌گذاری",
  "اخبار اختصاصی صنعت جواهر",
  "دسترسی به آرشیو کامل مقالات",
  "پشتیبانی ۲۴ ساعته تلگرام",
  "عضویت رایگان و بدون تعهد",
];

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">مزایای عضویت</span>
              </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              چرا به خبرنامه <span className="text-gradient-gold">اونس</span> بپیوندید؟
            </h2>
              <p className="text-muted-foreground">
                با عضویت در خبرنامه تخصصی ما، همیشه یک قدم جلوتر از بازار باشید و تصمیمات بهتری بگیرید
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit}
                  className="flex items-center gap-3 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="gold" size="xl" className="w-full sm:w-auto">
              <Gift className="w-5 h-5 ml-2" />
              همین حالا عضو شوید
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 glow-gold-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">سرعت بالا</h3>
              <p className="text-muted-foreground text-sm">
                اخبار و قیمت‌ها را زودتر از هر منبع دیگری دریافت کنید
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">قابل اعتماد</h3>
              <p className="text-muted-foreground text-sm">
                اطلاعات از منابع معتبر و تأیید شده جمع‌آوری می‌شوند
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Crown className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">محتوای انحصاری</h3>
              <p className="text-muted-foreground text-sm">
                تحلیل‌های ویژه که فقط برای اعضا منتشر می‌شوند
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-gold-dark/20 to-primary/5 border-primary/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Gift className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">کاملاً رایگان</h3>
              <p className="text-muted-foreground text-sm">
                بدون هیچ هزینه‌ای از تمام امکانات استفاده کنید
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
