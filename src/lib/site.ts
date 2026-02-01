import flagUs from "../../public/assets/united-states.png";
import flagIndia from "../../public/assets/India.png";
import flagKuwait from "../../public/assets/kuwait.png";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Orvia", href: "/orvia", icon: "⚡" },
  { label: "Projects", href: "/#projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const contactNumbers = [
  { label: "US", value: "+1 650 705 9118", flag: flagUs.src },
  { label: "India", value: "+91 76218 84841", flag: flagIndia.src },
  { label: "Kuwait", value: "+965 6998 4942", flag: flagKuwait.src },
];

export const primaryEmail = "info@virtuprose.com";
export const legalName = "Virtuprose Solutions Private Limited";
