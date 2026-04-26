export type SiteConfig = typeof siteConfig;

const isCloudEnv = process.env.NEXT_PUBLIC_IS_CLOUD_ENV === "true";

export const siteConfig = {
  name: isCloudEnv ? "Milli Cloud Security Cloud" : "Milli Cloud Security",
  description:
    "Milli Cloud Security is a national cloud security assessment and compliance platform. With hundreds of ready-to-use security checks, remediation guidance, and compliance frameworks across AWS, Azure, GCP, Kubernetes and more, Milli Cloud Security delivers AI-driven, customizable assessments, dashboards, reports, and integrations \u2014 making cloud security simple, scalable, and cost-effective for organizations of any size.",
};
