import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "محمد رضایی",
    role: "سرمایه‌گذار",
    content: "از وقتی عضو این خبرنامه شدم، تصمیم‌گیری‌هام درباره خرید و فروش طلا خیلی بهتر شده. تحلیل‌ها واقعاً کاربردی هستند.",
    rating: 5,
  },
  {
    name: "سارا احمدی",
    role: "صاحب طلافروشی",
    content: "به عنوان یک فعال صنعت طلا، این خبرنامه منبع اصلی اطلاعاتم شده. پیش‌بینی‌ها دقیق و به‌موقع هستند.",
    rating: 5,
  },
  {
    name: "علی محمدی",
    role: "تحلیلگر مالی",
    content: "کیفیت تحلیل‌های ارائه شده در سطح نشریات بین‌المللی است. حتماً به همه علاقه‌مندان به بازار طلا پیشنهاد می‌کنم.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            نظرات <span className="text-gradient-gold">کاربران</span>
          </h2>
          <p className="text-muted-foreground">
            ببینید کاربران ما درباره خبرنامه چه می‌گویند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
