import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchMetaDescription } from "@/utils/urlUtils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  onComplete: () => void;
}

export const ChatbotIntegration = ({ onComplete }: Props) => {
  const [isTestingChat, setIsTestingChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const handleTest = async () => {
    setIsTestingChat(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsTestingChat(false);
    onComplete();
  };

  const handleUrlAnalysis = async () => {
    if (!url) return;
    console.log("Analyzing URL:", url);
    const description = await fetchMetaDescription(url);
    setMetaDescription(description);
    addMessage("assistant", `Meta description for ${url}: ${description || "No description found"}`);
  };

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages(prev => [...prev, { role, content }]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    setInputValue("");
    addMessage("user", userMessage);

    // Simulate chatbot response
    setTimeout(() => {
      let response = "I'm a chatbot assistant. How can I help you today?";
      if (userMessage.toLowerCase().includes("help")) {
        response = "I can help you with:\n- Analyzing website URLs\n- Answering general questions\n- Providing integration support";
      } else if (userMessage.toLowerCase().includes("integration")) {
        response = "To integrate the chatbot, copy the code from the 'Integration Code' tab and paste it into your website's HTML.";
      }
      addMessage("assistant", response);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-2xl p-8 shadow-lg bg-white/90 backdrop-blur-sm animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Chatbot Integration
      </h2>
      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="chat" className="text-lg py-3">Chat</TabsTrigger>
          <TabsTrigger value="url" className="text-lg py-3">URL Analysis</TabsTrigger>
          <TabsTrigger value="integrate" className="text-lg py-3">Integration Code</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="mt-4">
          <div className="space-y-4">
            <ScrollArea className="h-[300px] w-full border rounded-md p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="url" className="mt-4">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL..."
                className="flex-1"
              />
              <Button onClick={handleUrlAnalysis}>Analyze</Button>
            </div>
            {metaDescription && (
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="font-semibold mb-2">Meta Description:</h3>
                <p>{metaDescription}</p>
              </div>
            )}
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