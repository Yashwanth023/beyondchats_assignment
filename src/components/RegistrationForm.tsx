import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { RegistrationData } from "@/lib/types";

interface Props {
  onComplete: (data: RegistrationData) => void;
}

export const RegistrationForm = ({ onComplete }: Props) => {
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    onComplete({
      name: "Test User",
      email: "test@example.com",
      password: "",
    });
  };

  return (
    <Card className="w-full max-w-md p-8 shadow-lg bg-white/90 backdrop-blur-sm animate-fadeIn">
      <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Create your account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Input
            placeholder="Full Name"
            className="h-12 text-lg"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            className="h-12 text-lg"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            type="password"
            placeholder="Password"
            className="h-12 text-lg"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <Button type="submit" className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
          Create Account
        </Button>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        <Button
          type="button"
          variant="outline"
          className="w-full h-12 text-lg border-2 hover:bg-gray-50 transition-all duration-300"
          onClick={handleGoogleLogin}
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
          Google
        </Button>
      </form>
    </Card>
  );
};