import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { OrganizationData } from "@/lib/types";

interface Props {
  onComplete: (data: OrganizationData) => void;
}

export const OrganizationSetup = ({ onComplete }: Props) => {
  const [formData, setFormData] = useState<OrganizationData>({
    companyName: "",
    websiteUrl: "",
    description: "",
  });
  const [isScanning, setIsScanning] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    // Simulate website scanning
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsScanning(false);
    onComplete(formData);
  };

  return (
    <Card className="w-full max-w-md p-8 shadow-lg bg-white/90 backdrop-blur-sm animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Setup Organization
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Input
            placeholder="Company Name"
            className="h-12 text-lg"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            placeholder="Website URL"
            type="url"
            className="h-12 text-lg"
            value={formData.websiteUrl}
            onChange={(e) =>
              setFormData({ ...formData, websiteUrl: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Textarea
            placeholder="Company Description"
            className="min-h-[120px] text-lg"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          disabled={isScanning}
        >
          {isScanning ? "Scanning Website..." : "Continue"}
        </Button>
      </form>
    </Card>
  );
};