import devWeb from "../assets/dev-web.webp";
import "./about.css";

export default function About() {
  return (
    <section id="About">
      <div className="section-container about-container">
        <div className="about-img">
          <img src={devWeb} className="about-logo" alt="ordinateur portable" />
        </div>
        <div className="about-description">
          <h2>About me</h2>
          <h3>Un jeune développeur web pour tous vos projets 👨🏼‍💻</h3>
          <div className="about-text">
            En tant que développeur web junior, je possède toutes les
            compétences nécessaires en HTML, CSS et JavaScript.
            <br />
            Au cours de mon apprentissage j’ai pu me perfectionner dans
            différentes librairies et frameworks front-end tels que React ou
            bien VueJS. J’ai également eu l’occasion de découvrir l'univers du
            back-end en créant notament des API REST grâce à NodeJS.
            <br />
            Tous les projets que j'ai réalisés m'ont tous permis d'acquérir
            aujourd'hui le nécessaires pour créer et maintenir de sites web
            réactifs tout en offrant une expérience utilisateur incroyable.
          </div>
        </div>
      </div>
    </section>
  );
}
