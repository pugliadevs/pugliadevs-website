import type { LandingPageData } from "@/config/landing.interface";
import landingData from "@/data/landing.json";

export const getLandingData = async (): Promise<LandingPageData> => {
  return landingData as LandingPageData;
};
