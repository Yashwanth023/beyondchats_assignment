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
    <Card className="w-full max-w-md p-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-center mb-6">Setup Organization</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <Input
            placeholder="Website URL"
            type="url"
            value={formData.websiteUrl}
            onChange={(e) =>
              setFormData({ ...formData, websiteUrl: e.target.value })
            }
            required
          />
        </div>
        <div>
          <Textarea
            placeholder="Company Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isScanning}
        >
          {isScanning ? "Scanning Website..." : "Continue"}
        </Button>
      </form>
    </Card>
  );
};