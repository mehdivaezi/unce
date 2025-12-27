import { Sparkles, Instagram, Send, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gradient-gold">زرین نیوز</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              مرجع تخصصی اخبار و تحلیل بازار طلا و جواهر ایران
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">صفحه اصلی</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">قیمت طلا</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">اخبار و مقالات</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">تحلیل بازار</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">درباره ما</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">خدمات</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">خبرنامه روزانه</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">هشدار قیمت</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">مشاوره سرمایه‌گذاری</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">آموزش تخصصی</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">پشتیبانی VIP</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@zarinnews.ir</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>تهران، خیابان ولیعصر، برج طلایی</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © ۱۴۰۳ زرین نیوز. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-primary transition-colors">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
