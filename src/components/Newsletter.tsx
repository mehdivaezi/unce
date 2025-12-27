import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center glow-gold">
            <Mail className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            همین حالا <span className="text-gradient-gold">عضو</span> شوید
          </h2>
          <p className="text-muted-foreground mb-8">
            ایمیل خود را وارد کنید و هر روز آخرین اخبار و تحلیل‌های بازار طلا را دریافت کنید. عضویت کاملاً رایگان است!
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="ایمیل خود را وارد کنید" 
              className="flex-1 text-right"
            />
            <Button variant="gold" size="lg">
              <Send className="w-4 h-4 ml-2" />
              عضویت
            </Button>
          </form>
          
          <p className="mt-6 text-sm text-muted-foreground">
            با عضویت، شرایط و قوانین استفاده از خدمات را می‌پذیرید. اطلاعات شما محفوظ است.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
