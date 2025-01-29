import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchMetaDescription } from "@/utils/urlUtils";
import { generateAIResponse } from "@/utils/aiUtils";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  onComplete: () => void;
}

export const ChatbotIntegration = ({ onComplete }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const { toast } = useToast();

  const handleTest = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    onComplete();
  };

  const handleUrlAnalysis = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      console.log("Analyzing URL:", url);
      const description = await fetchMetaDescription(url);
      setMetaDescription(description);
      addMessage("assistant", `Meta description for ${url}: ${description || "No description found"}`);
    } catch (error) {
      console.error("Error analyzing URL:", error);
      toast({
        title: "Error",
        description: "Failed to analyze URL",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addMessage = (role: "user" | "assistant", content: string) => {
    setMessages(prev => [...prev, { role, content }]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    setInputValue("");
    addMessage("user", userMessage);
    setIsLoading(true);

    try {
      const response = await generateAIResponse(userMessage);
      addMessage("assistant", response);
    } catch (error) {
      console.error("Error generating response:", error);
      toast({
        title: "Error",
        description: "Failed to generate response",
        variant: "destructive",
      });
      addMessage("assistant", "I apologize, but I encountered an error. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
              {isLoading && (
                <div className="text-center text-gray-500">
                  Thinking...
                </div>
              )}
            </ScrollArea>
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={isLoading}
              >
                Send
              </Button>
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
                disabled={isLoading}
              />
              <Button 
                onClick={handleUrlAnalysis}
                disabled={isLoading}
              >
                Analyze
              </Button>
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
                toast({
                  title: "Success",
                  description: "Integration code copied to clipboard",
                });
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