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
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] transition-all duration-500 -translate-y-1/2 rounded-full"
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
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 shadow-lg ${
                  getCurrentStepIndex() >= index
                    ? "bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] text-white transform hover:scale-110"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-3 text-sm font-medium text-gray-600">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};