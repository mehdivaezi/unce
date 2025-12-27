import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, TrendingUp, AlertTriangle, BarChart3, Sparkles } from "lucide-react";
import MembershipModal from "./MembershipModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    { icon: AlertTriangle, text: "هشدار لحظه‌ای" },
    { icon: TrendingUp, text: "پیش‌بینی دقیق" },
    { icon: BarChart3, text: "تحلیل تخصصی" },
  ];

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-primary/20 animate-float">
          <Sparkles className="w-12 h-12" />
        </div>
        <div className="absolute bottom-32 right-16 text-primary/20 animate-float" style={{ animationDelay: "2s" }}>
          <TrendingUp className="w-16 h-16" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm animate-fade-in">
              <Bell className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">سامانه هشدار و تحلیل بازار طلا</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="block mb-2">هشدار و پیش‌بینی</span>
              <span className="text-gradient-gold">بازار طلا</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              با دریافت هشدارهای لحظه‌ای و تحلیل‌های تخصصی، همیشه یک قدم جلوتر از بازار باشید.
              پیش‌بینی‌های دقیق برای تصمیم‌گیری هوشمندانه.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                variant="gold"
                size="lg"
                className="gap-2 text-lg px-8 py-6 glow-gold"
                onClick={() => setIsModalOpen(true)}
              >
                <Bell className="w-5 h-5" />
                عضویت رایگان
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                بدون نیاز به پرداخت • دریافت هشدار روی موبایل
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">+۵۰۰۰</div>
                <div className="text-sm text-muted-foreground">کاربر فعال</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">۹۵٪</div>
                <div className="text-sm text-muted-foreground">دقت پیش‌بینی</div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">۲۴/۷</div>
                <div className="text-sm text-muted-foreground">پشتیبانی</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <MembershipModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Hero;
