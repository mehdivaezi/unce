import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, TrendingUp, Bell } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-32 right-16 text-primary/20 animate-float" style={{ animationDelay: '2s' }}>
        <TrendingUp className="w-16 h-16" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm animate-fade-in">
            <Bell className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">بیش از ۱۰,۰۰۰ مشترک فعال</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="block mb-2">خبرنامه تخصصی</span>
            <span className="text-gradient-gold">طلا و جواهر</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            آخرین اخبار، تحلیل‌های بازار و قیمت لحظه‌ای طلا و جواهرات را هر روز در ایمیل خود دریافت کنید
          </p>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Input 
              type="email" 
              placeholder="ایمیل خود را وارد کنید" 
              className="flex-1 text-right"
            />
            <Button variant="gold" size="lg" type="submit">
              عضویت رایگان
            </Button>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">۱۵۰+</div>
              <div className="text-sm text-muted-foreground">خبر در ماه</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">۹۸٪</div>
              <div className="text-sm text-muted-foreground">رضایت کاربران</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">۵ سال</div>
              <div className="text-sm text-muted-foreground">سابقه فعالیت</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
