import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const SuccessScreen = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleAdminPanel = () => {
    console.log("Navigating to admin panel");
    navigate("/admin");
    toast.success("Welcome to the Admin Panel!");
  };

  const handleStartChatbot = () => {
    console.log("Starting chatbot conversation");
    navigate("/chat");
    toast.success("Starting your chatbot conversation!");
  };

  return (
    <div className="relative">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
      <Card className="w-full max-w-md p-8 shadow-xl bg-white/90 backdrop-blur-sm animate-fadeIn border-2 border-[#D6BCFA]/20">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] rounded-full mx-auto mb-8 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#6E59A5]">
            🎉 Integration Successful!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your chatbot is ready to use. You can now start managing your
            conversations and customize your chatbot.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={handleAdminPanel}
              className="w-full h-12 text-lg bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:from-[#8b77e5] hover:to-[#5E499F] transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Explore Admin Panel
            </Button>
            <Button
              onClick={handleStartChatbot}
              variant="outline"
              className="w-full h-12 text-lg border-2 border-[#D6BCFA] hover:bg-[#D6BCFA]/10 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Start talking to your chatbot
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};