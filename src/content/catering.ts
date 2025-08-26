import type { HeroContent } from "../types/catering";
import heroImg from "../assets/images/hero-sandwich.jpg"; 
// ↑ make sure file exists: src/assets/hero-sandwich.jpg

export const heroContent: HeroContent = {
  heroImage: heroImg,
  heading: "Birthday? Wedding? Office party?",
  tagline:
    "We cater to all. Cluck Clucks is your go-to for great chicken. Fill out the form below or send us an email for special catering orders.",
  orderLink: "https://order.toasttab.com/online/cluck-clucks-ajax",
  requestLink: "mailto:info@cluckcluckschicken.com",
};
