import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MembershipModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MembershipModal = ({ open, onOpenChange }: MembershipModalProps) => {
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setIsSubmitted(true);
      toast({
        title: "عضویت موفق",
        description: "شماره شما با موفقیت ثبت شد",
      });
      setTimeout(() => {
        onOpenChange(false);
        setIsSubmitted(false);
        setPhone("");
      }, 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            {isSubmitted ? (
              <CheckCircle className="w-8 h-8 text-green-500" />
            ) : (
              <Bell className="w-8 h-8 text-primary" />
            )}
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            {isSubmitted ? "ثبت‌نام موفق!" : "عضویت رایگان"}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {isSubmitted
              ? "به زودی هشدارها و تحلیل‌ها برای شما ارسال خواهد شد"
              : "شماره موبایل خود را وارد کنید تا هشدارها و تحلیل‌ها را دریافت کنید"}
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="relative">
              <Input
                type="tel"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="text-center text-lg tracking-wider"
                dir="ltr"
              />
            </div>
            <Button type="submit" variant="gold" className="w-full">
              ثبت‌نام رایگان
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              با ثبت‌نام، شرایط و قوانین را می‌پذیرید
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MembershipModal;
