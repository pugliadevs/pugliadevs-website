export interface LandingPageData {
  heroData: HeroData;
  servicesData: ServicesData;
  headerData: object;
  meta: object;
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
  icon: string;
  date: string;
  location: string;
  imgUrl: string;
}
export interface Service {
  title: string;
  icon: string;
  description: string;
  imgUrl: string;
}
