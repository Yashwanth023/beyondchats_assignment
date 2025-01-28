import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  onComplete: () => void;
}

export const ChatbotIntegration = ({ onComplete }: Props) => {
  const [isTestingChat, setIsTestingChat] = useState(false);

  const handleTest = async () => {
    setIsTestingChat(true);
    // Simulate test
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsTestingChat(false);
    onComplete();
  };

  return (
    <Card className="w-full max-w-2xl p-8 shadow-lg bg-white/90 backdrop-blur-sm animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Chatbot Integration
      </h2>
      <Tabs defaultValue="test" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="test" className="text-lg py-3">Test Chatbot</TabsTrigger>
          <TabsTrigger value="integrate" className="text-lg py-3">Integration Code</TabsTrigger>
        </TabsList>
        <TabsContent value="test" className="mt-4">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 text-center">
              Test your chatbot before integrating it into your website
            </p>
            <Button
              onClick={handleTest}
              className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              disabled={isTestingChat}
            >
              {isTestingChat ? "Testing..." : "Test Chatbot"}
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="integrate" className="mt-4">
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <code className="text-sm text-white font-mono">
                {`<script src="https://beyondchats.com/widget.js"></script>
<script>
  BeyondChats.init({
    widgetId: "YOUR_WIDGET_ID"
  });
</script>`}
              </code>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(`<script src="https://beyondchats.com/widget.js"></script>
<script>
  BeyondChats.init({
    widgetId: "YOUR_WIDGET_ID"
  });
</script>`);
              }}
              className="w-full h-12 text-lg border-2 hover:bg-gray-50 transition-all duration-300"
            >
              Copy Integration Code
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};