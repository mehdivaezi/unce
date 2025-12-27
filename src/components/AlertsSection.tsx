import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, TrendingUp, TrendingDown, AlertTriangle, Clock } from "lucide-react";
import MembershipModal from "./MembershipModal";

const alertsData = [
  {
    type: "صعودی",
    title: "سیگنال خرید طلای ۱۸ عیار",
    description: "با توجه به شکست مقاومت ۳,۸۵۰,۰۰۰ تومان، احتمال رشد تا ۴,۰۰۰,۰۰۰ وجود دارد.",
    time: "۲ ساعت پیش",
    isUp: true,
  },
  {
    type: "هشدار",
    title: "نوسان شدید اونس جهانی",
    description: "اونس جهانی در محدوده حساس قرار دارد. احتیاط در معاملات توصیه می‌شود.",
    time: "۵ ساعت پیش",
    isWarning: true,
  },
  {
    type: "نزولی",
    title: "اصلاح قیمت سکه امامی",
    description: "سکه امامی پس از رسیدن به سقف، وارد فاز اصلاحی شده است.",
    time: "۱ روز پیش",
    isUp: false,
  },
];

const AlertsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="alerts" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              آخرین <span className="text-gradient-gold">هشدارها</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              هشدارهای لحظه‌ای بازار را دریافت کنید و همیشه از تغییرات مهم مطلع باشید
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {alertsData.map((alert, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-full ${
                      alert.isWarning
                        ? "bg-yellow-500/10"
                        : alert.isUp
                        ? "bg-green-500/10"
                        : "bg-red-500/10"
                    }`}
                  >
                    {alert.isWarning ? (
                      <AlertTriangle className="w-6 h-6 text-yellow-500" />
                    ) : alert.isUp ? (
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    ) : (
                      <TrendingDown className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          alert.isWarning
                            ? "bg-yellow-500/10 text-yellow-500"
                            : alert.isUp
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {alert.type}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{alert.title}</h3>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              variant="gold" 
              size="lg" 
              className="gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              <Bell className="w-5 h-5" />
              دریافت همه هشدارها
            </Button>
          </div>
        </div>
      </section>

      <MembershipModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default AlertsSection;
