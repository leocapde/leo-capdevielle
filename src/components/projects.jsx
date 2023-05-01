import "./projects.css";
import theVueShop from "../assets/projects/the-vue-shop.vercel.app_ .png";
import ohMyFood from "../assets/projects/leocapde.github.io_P3-Animations-CSS_.png";
import laChouetteAgence from "../assets/projects/leocapde.github.io_P4-Optimisation-SEO_.png";
import toDoList from "../assets/projects/leocapde.github.io_Todo-list_.png";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="section-container projetcs-container">
        <h2>Projects</h2>
        <div className="projects-list">
          {/* The Vue Shop */}
          <div className="project-container">
            <div className="project-img">
              <a href="https://the-vue-shop.vercel.app/">
                <img src={theVueShop} alt="screen the-vue-shop" />
              </a>
            </div>
            <div className="project-infos">
              <h3 className="project-title">The Vue Shop 🛒</h3>
              <p className="project-description">
                Simplicité et design moderne, cette application de e-commerce
                permet à l'utilisateur de facilement trouver et acheter les
                meilleurs produits techs du marché.
              </p>
              <div className="project-skills">
                <div className="project-skill">VueJS</div>
                <div className="project-skill">SCSS</div>
              </div>
              <div className="project-link">
                <a href="https://github.com/leocapde/the-vue-shop">
                  Github {""}
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://the-vue-shop.vercel.app/">
                  Live demo {""}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Ohmyfood */}
          <div className="project-container project-container-reverse">
            <div className="project-img">
              <a href="https://leocapde.github.io/P3-Animations-CSS/">
                <img src={ohMyFood} alt="screen Ohmyfood" />
              </a>
            </div>
            <div className="project-infos">
              <h3 className="project-title">Ohmyfood 🍝</h3>
              <p className="project-description">
                Ce site web a d'abord été créé pour les smartphones en
                répertoriant les menus de restaurants gastronomiques. Il intègre
                égalements diverses annimations CSS.
              </p>
              <div className="project-skills">
                <div className="project-skill">HTML</div>
                <div className="project-skill">Sass</div>
              </div>
              <div className="project-link">
                <a href="https://github.com/leocapde/P3-Animations-CSS">
                  Github {""}
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://leocapde.github.io/P3-Animations-CSS/">
                  Live demo {""}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          {/* La chouette agence */}
          <div className="project-container">
            <div className="project-img">
              <a href="https://leocapde.github.io/P4-Optimisation-SEO/">
                <img src={laChouetteAgence} alt="screen la Chouette Agence" />
              </a>
            </div>
            <div className="project-infos">
              <h3 className="project-title">La chouette agence 🦉</h3>
              <p className="project-description">
                Optimisation d'un site web déjà existant. Augmentation du
                référencement via les normes SEO et Amélioration de l'expérience
                utilisateur grâce aux règles d’accessibilité WCAG.
              </p>
              <div className="project-skills">
                <div className="project-skill">Vanilla JS</div>
                <div className="project-skill">Vanilla CSS</div>
              </div>
              <div className="project-link">
                <a href="https://github.com/leocapde/P4-Optimisation-SEO">
                  Github {""}
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://leocapde.github.io/P4-Optimisation-SEO/">
                  Live demo {""}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          {/* To Do List */}
          <div className="project-container project-container-reverse">
            <div className="project-img">
              <a href="https://leocapde.github.io/Todo-list/">
                <img src={toDoList} alt="screen To Do List" />
              </a>
            </div>
            <div className="project-infos">
              <h3 className="project-title">To Do List 📝</h3>
              <p className="project-description">
                Liste simplifié permettant de gérer une multitude tâches à
                faire. Simplicité d'ajout, de tri ou de suppression des tâches
                souhaitées.
              </p>
              <div className="project-skills">
                <div className="project-skill">Vanilla JS</div>
                <div className="project-skill">Bootstrap 5</div>
              </div>
              <div className="project-link">
                <a href="https://github.com/leocapde/Todo-list">
                  Github {""}
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://leocapde.github.io/Todo-list/">
                  Live demo {""}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
