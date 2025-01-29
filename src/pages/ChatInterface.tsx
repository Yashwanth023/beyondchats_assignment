import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ChatInterface = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <Card className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Chat Interface
        </h1>
        <p className="text-gray-600 mb-8">
          Start your conversation with the chatbot here. This interface will allow you to interact with your AI assistant.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default ChatInterface;