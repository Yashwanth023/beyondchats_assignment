import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ChatInterface = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] p-8">
      <Card className="max-w-4xl mx-auto p-8 shadow-xl border-2 border-[#D6BCFA]/20">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#6E59A5]">
          Chat Interface
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Start your conversation with the chatbot here. This interface will allow you to interact with your AI assistant.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] hover:from-[#8b77e5] hover:to-[#5E499F] transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default ChatInterface;