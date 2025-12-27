import { Clock, ArrowLeft, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsData = [
  {
    category: "تحلیل بازار",
    title: "پیش‌بینی قیمت طلا در سال ۱۴۰۴: آیا رشد ادامه دارد؟",
    excerpt: "کارشناسان بازار طلا معتقدند با توجه به شرایط اقتصادی جهانی و تنش‌های ژئوپلیتیکی، قیمت طلا در سال آینده روند صعودی خواهد داشت...",
    time: "۲ ساعت پیش",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80",
  },
  {
    category: "اخبار جهانی",
    title: "فدرال رزرو و تأثیر سیاست‌های پولی بر بازار طلا",
    excerpt: "تصمیمات اخیر فدرال رزرو آمریکا در خصوص نرخ بهره، تأثیر مستقیمی بر قیمت جهانی طلا گذاشته است. تحلیلگران می‌گویند...",
    time: "۵ ساعت پیش",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    category: "جواهرات",
    title: "ترندهای جواهرات ۲۰۲۵: طلا همچنان محبوب‌ترین انتخاب",
    excerpt: "بررسی‌های بازار نشان می‌دهد که طلای زرد و رزگلد همچنان پرطرفدارترین انتخاب برای جواهرات عروسی و هدایای لوکس هستند...",
    time: "۱ روز پیش",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    category: "آموزش",
    title: "راهنمای خرید طلای آب‌شده: نکات کلیدی برای سرمایه‌گذاری",
    excerpt: "طلای آب‌شده یکی از گزینه‌های مناسب برای سرمایه‌گذاری است. در این مقاله با نکات مهم خرید طلای آب‌شده آشنا می‌شوید...",
    time: "۲ روز پیش",
    image: "https://images.unsplash.com/photo-1624365168968-f283d506c6b6?w=800&q=80",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              آخرین <span className="text-gradient-gold">اخبار و مقالات</span>
            </h2>
            <p className="text-muted-foreground">
              به‌روزترین اطلاعات و تحلیل‌های بازار طلا و جواهر
            </p>
          </div>
          <Button variant="goldOutline">
            مشاهده همه
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Article */}
          <Card className="group overflow-hidden bg-card/50 border-border hover:border-primary/50 transition-all duration-300 md:row-span-2 animate-fade-in">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={newsData[0].image} 
                alt={newsData[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-3">
                  <Tag className="w-3 h-3" />
                  {newsData[0].category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {newsData[0].title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {newsData[0].excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {newsData[0].time}
              </div>
            </div>
          </Card>

          {/* Other Articles */}
          {newsData.slice(1).map((news, index) => (
            <Card 
              key={news.title}
              className="group flex overflow-hidden bg-card/50 border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative w-32 md:w-48 shrink-0 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-2">
                    {news.category}
                  </span>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 hidden md:block">
                    {news.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                  <Clock className="w-3 h-3" />
                  {news.time}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
