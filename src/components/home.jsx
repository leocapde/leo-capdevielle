import logo from "../assets/logo.svg";
import "./home.css";

export default function App() {
  return (
    <section id="Home">
      <div className="section-container home-container">
        <div className="home-presenting">
          <div className="home-description">
            <h1 className="home-title">Développeur web 💻</h1>
            <p className="home-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cum
              placeat porro nesciunt minima explicabo id suscipit laudantium,
              quo aperiam commodi, ad voluptates, ipsa veniam.
            </p>
            <div className="home-links">
              <div className="home-link">
                <a href="https://github.com/leocapde">Github</a>
              </div>
              <div className="home-link">
                <a href="https://www.linkedin.com/in/l%C3%A9o-capdevielle-2467ba18a/">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="home-img">
            <div className="home-img-container">
              <img src={logo} className="home-img" alt="logo" />
            </div>
          </div>
        </div>
        <div className="home-skills">
          <div className="skill-title">Tech stack :</div>
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">JS</div>
          <div className="skill-item">
            <img src={logo} alt="logo" />
          </div>
          <div className="skill-item">Vuejs</div>
          <div className="skill-item">Boots</div>
        </div>
      </div>
    </section>
  );
}
