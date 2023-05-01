import photoProfil from "../assets/photo-profil.jpeg";
import html from "../assets/skills/html-logo.svg";
import css from "../assets/skills/css-logo.svg";
import js from "../assets/skills/js-logo.svg";
import react from "../assets/skills/react-logo.svg";
import vuejs from "../assets/skills/vuejs-logo.svg";
import nodejs from "../assets/skills/nodejs-logo.png";
import "./home.css";

export default function App() {
  return (
    <section id="Home">
      <div className="section-container home-container">
        <div className="home-presenting">
          <div className="home-description">
            <h1 className="home-title">Développeur web junior 💻</h1>
            <p className="home-text">
              Hello there ! <br />
              Je m’appelle Léo Capdevielle, je suis un jeune développeur web et
              je vis dans le sud-ouest de la France à Pau 📍
            </p>
            <div className="home-links">
              <div className="home-link">
                <a href="https://www.linkedin.com/in/l%C3%A9o-capdevielle-2467ba18a/">
                  LinkedIn {""}
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="home-link">
                <a href="https://github.com/leocapde">
                  Github {""}
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="home-img">
            <div className="home-img-container">
              <img src={photoProfil} className="home-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="home-skills">
          <a
            className="skill-item"
            href="https://developer.mozilla.org/fr/docs/Web/HTML"
            title="HTML"
          >
            <img src={html} alt="logo html" />
          </a>
          <a
            className="skill-item"
            href="https://developer.mozilla.org/fr/docs/Web/CSS"
            title="CSS"
          >
            <img src={css} alt="logo html" />
          </a>
          <a
            className="skill-item"
            href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
            title="JavaScript"
          >
            <img src={js} alt="logo javascript" />
          </a>
          <a className="skill-item" href="https://react.dev/" title="React">
            <img src={react} alt="logo react" />
          </a>
          <a className="skill-item" href="https://vuejs.org/" title="VueJS">
            <img src={vuejs} alt="logo vuejs" />
          </a>
          <a
            className="skill-item"
            href="https://nodejs.org/en/about"
            title="NodeJS"
          >
            <img src={nodejs} alt="logo Nodejs" />
          </a>
        </div>
      </div>
    </section>
  );
}
