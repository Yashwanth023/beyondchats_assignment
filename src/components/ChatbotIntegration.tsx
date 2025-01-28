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
    <Card className="w-full max-w-2xl p-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-center mb-6">
        Chatbot Integration
      </h2>
      <Tabs defaultValue="test" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="test">Test Chatbot</TabsTrigger>
          <TabsTrigger value="integrate">Integration Code</TabsTrigger>
        </TabsList>
        <TabsContent value="test" className="mt-4">
          <div className="space-y-4">
            <p className="text-gray-600">
              Test your chatbot before integrating it into your website.
            </p>
            <Button
              onClick={handleTest}
              className="w-full"
              disabled={isTestingChat}
            >
              {isTestingChat ? "Testing..." : "Test Chatbot"}
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="integrate" className="mt-4">
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <code className="text-sm">
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
              className="w-full"
            >
              Copy Integration Code
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};