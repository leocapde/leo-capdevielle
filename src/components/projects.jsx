import "./projects.css";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="section-container projetcs-container">
        <h2>Projects</h2>
        <div className="projects-list">
          <div className="project-container">
            <div className="project-img">Image</div>
            <div className="project-infos">
              <h3 className="project-title">The Vue Shop 🛒</h3>
              <p className="project-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                voluptas architecto sapiente maiores quia consequuntur beatae
                debitis veniam pariatur, tempore inventore? Ratione, eius
                ducimus atque iusto, illum dolore quos ullam pariatur architecto
                quasi nihil similique?
              </p>
              <div className="project-skills">
                <div className="project-skill">Vue.js</div>
                <div className="project-skill">SCSS</div>
              </div>
              <div className="project-link">
                <a href="https://github.com/leocapde/the-vue-shop">Gituhb</a>
                <a href="https://the-vue-shop.vercel.app/">Live demo</a>
              </div>
            </div>
          </div>

          <div className="project-container project-container-reverse">
            <div className="project-img">Image</div>
            <div className="project-infos">
              <h3 className="project-title">Ohmyfood 🍝</h3>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, vitae excepturi accusamus repudiandae sunt deserunt
                maiores, tempore, ducimus id iure ea consequatur. Tenetur,
                deleniti consequatur?
              </p>
              <div className="project-skills">
                <div className="project-skill">HTML</div>
                <div className="project-skill">Sass</div>
              </div>
              <div className="project-link">
                <a href="https://github.com/leocapde/the-vue-shop">Gituhb</a>
                <a href="https://the-vue-shop.vercel.app/">Live demo</a>
              </div>
            </div>
          </div>

          <div className="project-container">
            <div className="project-img">Image</div>
            <div className="project-infos">
              <h3 className="project-title">La chouette agence 🦉</h3>
              <p className="project-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                debitis repellendus mollitia labore velit sit odio veniam illo
                maxime accusamus, vitae beatae dolore pariatur ex. Distinctio
                inventore error maxime, beatae atque deserunt vero doloremque
                officia.
              </p>
              <div className="project-skills">
                <div className="project-skill">Vanilla JS</div>
                <div className="project-skill">Vanilla CSS</div>
              </div>
              <div className="project-link">
                <a href="https://github.com/leocapde/the-vue-shop">Gituhb</a>
                <a href="https://the-vue-shop.vercel.app/">Live demo</a>
              </div>
            </div>
          </div>

          <div className="project-container project-container-reverse">
            <div className="project-img">Image</div>
            <div className="project-infos">
              <h3 className="project-title">To Do List 📝</h3>
              <p className="project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, officia, unde nulla expedita natus quia quibusdam
                explicabo nam nihil voluptatum ea amet libero impedit veniam,
                laborum qui eveniet eum! Quasi!
              </p>
              <div className="project-skills">
                <div className="project-skill">Vanilla JS</div>
                <div className="project-skill">Bootstrap 5</div>
              </div>
              <div className="project-link">
                <a href="https://github.com/leocapde/the-vue-shop">Gituhb</a>
                <a href="https://the-vue-shop.vercel.app/">Live demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
