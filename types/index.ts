export interface NavItem {
  href: string;
  label: string;
}



export interface Service {
  title: string;
  description: string;
  image: string;
}

  
  
export type HeroData = {
    title: string;
    description: string;
    buttonText1: string;
    buttonLink1: string;
    buttonText2: string;
    buttonLink2: string;
    image: string; 
  };
  
  
  import { IconType } from 'react-icons';

  export interface FooterLink {
    name: string;
    href: string;
    icon?: IconType; 
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  


  export type TeamMember = {
    name: string;
    role: string;
    imageUrl: string;
  };