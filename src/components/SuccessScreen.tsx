import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Confetti from "react-confetti";

export const SuccessScreen = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
      <Card className="w-full max-w-md p-6 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4">
          🎉 Integration Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Your chatbot is ready to use. You can now start managing your
          conversations and customize your chatbot.
        </p>
        <div className="space-y-4">
          <Button className="w-full">Explore Admin Panel</Button>
          <Button variant="outline" className="w-full">
            Start talking to your chatbot
          </Button>
        </div>
      </Card>
    </div>
  );
};