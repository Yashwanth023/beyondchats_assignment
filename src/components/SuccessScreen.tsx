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
      <Card className="w-full max-w-md p-8 shadow-lg bg-white/90 backdrop-blur-sm animate-fadeIn">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
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
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            🎉 Integration Successful!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your chatbot is ready to use. You can now start managing your
            conversations and customize your chatbot.
          </p>
          <div className="space-y-4">
            <Button className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
              Explore Admin Panel
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 text-lg border-2 hover:bg-gray-50 transition-all duration-300"
            >
              Start talking to your chatbot
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};