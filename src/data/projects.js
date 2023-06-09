import theVueShop from "../assets/projects/the-vue-shop.vercel.app_ .png";
import mySandBox from "../assets/projects/my-sandbox-two.vercel.app_.png";
import ohMyFood from "../assets/projects/leocapde.github.io_P3-Animations-CSS_.png";
import laChouetteAgence from "../assets/projects/leocapde.github.io_P4-Optimisation-SEO_.png";
// import toDoList from "../assets/projects/leocapde.github.io_Todo-list_.png";

export const projectsList = [
  {
    title: "The Vue Shop 🛒",
    image: `${theVueShop}`,
    alt: "screen the-vue-shop",
    description:
      "Simplicité et design moderne, cette application de e-commerce permet à l'utilisateur de facilement trouver et acheter les meilleurs produits techs du marché.",
    skills: ["VueJS", "SCSS"],
    github: "https://github.com/leocapde/the-vue-shop",
    site: "https://the-vue-shop.vercel.app/",
  },
  {
    title: "My SandBox 🏖️",
    image: `${mySandBox}`,
    alt: "screen my sandbox",
    description:
      "C'est dans My SandBox que je créé et que j'expose toutes sortes d'animations CSS ou de loaders qui peuvent être facilement réutilisable dans mes autres apllications",
    skills: ["React", "Vanilla CSS"],
    github: "https://github.com/leocapde/my-sandbox",
    site: "https://my-sandbox-two.vercel.app/",
  },
  {
    title: "Ohmyfood 🍝",
    image: `${ohMyFood}`,
    alt: "screen Ohmyfood",
    description:
      "Ce site web a d'abord été créé pour les smartphones en répertoriant les menus de restaurants gastronomiques. Il intègre égalements diverses annimations CSS.",
    skills: ["HTML", "Sass"],
    github: "https://github.com/leocapde/P3-Animations-CSS",
    site: "https://leocapde.github.io/P3-Animations-CSS/",
  },
  {
    title: "La chouette agence 🦉",
    image: `${laChouetteAgence}`,
    alt: "screen la Chouette Agence",
    description:
      "Optimisation d'un site web déjà existant. Augmentation du référencement via les normes SEO et Amélioration de l'expérience utilisateur grâce aux règles d’accessibilité WCAG.",
    skills: ["Vanilla JS", "Vanilla CSS"],
    github: "https://github.com/leocapde/P4-Optimisation-SEO",
    site: "https://leocapde.github.io/P4-Optimisation-SEO/",
  },
  // {
  //   title: "To Do List 📝",
  //   image: `${toDoList}`,
  //   alt: "screen To Do List",
  //   description:
  //     "Liste simplifié permettant de gérer une multitude tâches à faire. Simplicité d'ajout, de tri ou de suppression des tâches souhaitées.",
  //   skills: ["Vanilla JS", "Bootstrap 5"],
  //   github: "https://github.com/leocapde/Todo-list",
  //   site: "https://leocapde.github.io/Todo-list/",
  // },
];
