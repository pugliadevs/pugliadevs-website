export interface LandingPageData {
  heroData: HeroData;
  servicesData: ServicesData;
}



export interface HeroData {
  title: string;
  subTitle: string;
  primaryCta: string;
  secondaryCta: string;
  highlightedTitle: string;
}

export interface ServicesData {
  title: string;
  services: Service[];
  prossimiEventi: ProssimiEventi[];
}

export interface ProssimiEventi {
  title: string;
  icon: object;
  date: string;
  location: string;
  imgUrl: string;
}
export interface Service {
  title: string;
  icon: object;
  description: string;
  imgUrl: string;
}
