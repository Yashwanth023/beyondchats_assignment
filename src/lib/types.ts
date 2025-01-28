export type RegistrationData = {
  name: string;
  email: string;
  password: string;
};

export type OrganizationData = {
  companyName: string;
  websiteUrl: string;
  description: string;
};

export type Step = "registration" | "organization" | "integration" | "success";