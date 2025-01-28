import { Step } from "@/lib/types";

interface StepIndicatorProps {
  currentStep: Step;
}

const steps: { id: Step; label: string }[] = [
  { id: "registration", label: "Registration" },
  { id: "organization", label: "Organization" },
  { id: "integration", label: "Integration" },
];

export const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const getCurrentStepIndex = () => {
    if (currentStep === "success") return steps.length;
    return steps.findIndex((step) => step.id === currentStep);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-primary transition-all duration-500 -translate-y-1/2"
          style={{
            width: `${(getCurrentStepIndex() / (steps.length - 1)) * 100}%`,
          }}
        />
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
                  getCurrentStepIndex() >= index
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};