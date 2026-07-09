import { baseProfile } from "./base";
import { quickLinks } from "./navigation";
import { about, experience, education, aptitudes, techSkills } from "./about";
import { projects } from "./projects";
import { services } from "./services";
import { contact } from "./contact";
import { certifications } from "./certifications";

export const profile = {
  ...baseProfile,
  quickLinks,
  about,
  experience,
  education,
  aptitudes,
  techSkills,
  projects,
  services,
  contact,
  certifications,
};
