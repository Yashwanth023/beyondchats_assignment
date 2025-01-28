import { useState } from "react";
import { StepIndicator } from "@/components/StepIndicator";
import { RegistrationForm } from "@/components/RegistrationForm";
import { OrganizationSetup } from "@/components/OrganizationSetup";
import { ChatbotIntegration } from "@/components/ChatbotIntegration";
import { SuccessScreen } from "@/components/SuccessScreen";
import type { Step, RegistrationData, OrganizationData } from "@/lib/types";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("registration");
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(
    null
  );
  const [organizationData, setOrganizationData] = useState<OrganizationData | null>(
    null
  );

  const handleRegistrationComplete = (data: RegistrationData) => {
    console.log("Registration completed:", data);
    setRegistrationData(data);
    setCurrentStep("organization");
  };

  const handleOrganizationComplete = (data: OrganizationData) => {
    console.log("Organization setup completed:", data);
    setOrganizationData(data);
    setCurrentStep("integration");
  };

  const handleIntegrationComplete = () => {
    console.log("Integration completed");
    setCurrentStep("success");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to BeyondChats
          </h1>
          <p className="text-gray-600">
            Let's get your chatbot up and running in just a few steps
          </p>
        </div>

        {currentStep !== "success" && <StepIndicator currentStep={currentStep} />}

        <div className="flex justify-center">
          {currentStep === "registration" && (
            <RegistrationForm onComplete={handleRegistrationComplete} />
          )}
          {currentStep === "organization" && (
            <OrganizationSetup onComplete={handleOrganizationComplete} />
          )}
          {currentStep === "integration" && (
            <ChatbotIntegration onComplete={handleIntegrationComplete} />
          )}
          {currentStep === "success" && <SuccessScreen />}
        </div>
      </div>
    </div>
  );
};

export default Index;