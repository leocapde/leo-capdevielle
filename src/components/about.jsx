import logo from "../assets/logo.svg";
import "./about.css";

export default function About() {
  return (
    <section id="About">
      <div className="section-container about-container">
        <div className="about-img">
          <img src={logo} className="about-logo" alt="logo" />
        </div>
        <div className="about-description">
          <h2>About</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde harum
            veniam mollitia. Impedit quasi dignissimos reprehenderit unde
            consequuntur commodi? Laborum alias sunt eos placeat dolores
            voluptates accusantium doloribus maiores quis nulla possimus vero,
            quibusdam magni maxime recusandae reiciendis culpa quisquam eveniet
            sint at! Fuga odio quasi minima rem. Eos atque perferendis neque ab
            inventore praesentium veniam distinctio quis vero odit aspernatur
            porro architecto culpa numquam ipsa quibusdam sequi perspiciatis
            laboriosam, ea nulla amet molestiae quaerat? Facilis iusto, totam
            labore doloribus dolor unde ratione consequuntur, voluptate minima
            consequatur a, dolores quasi pariatur nisi accusantium suscipit
            soluta error inventore eius consectetur! Animi!
          </div>
        </div>
      </div>
    </section>
  );
}
