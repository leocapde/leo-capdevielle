import "./projects.css";
import { projectsList } from "../data/projects";

export default function Projects() {
  return (
    <section id="Projects">
      <div className="section-container projetcs-container">
        <h2>Projects</h2>
        <div className="projects-list">
          {projectsList.map((project, index) =>
            index % 2 === 0 ? (
              <div className="project-container">
                <div className="project-img">
                  <a href="https://the-vue-shop.vercel.app/">
                    <img src={project.image} alt={project.alt} />
                  </a>
                </div>
                <div className="project-infos">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-skills">
                    {project.skills.map((skill) => (
                      <div className="project-skill">{skill}</div>
                    ))}
                  </div>
                  <div className="project-link">
                    <a href={project.github}>
                      Github {""}
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href={project.site}>
                      Live demo {""}
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="project-container project-container-reverse">
                <div className="project-img">
                  <a href="https://the-vue-shop.vercel.app/">
                    <img src={project.image} alt={project.alt} />
                  </a>
                </div>
                <div className="project-infos">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-skills">
                    {project.skills.map((skill) => (
                      <div className="project-skill">{skill}</div>
                    ))}
                  </div>
                  <div className="project-link">
                    <a href={project.github}>
                      Github {""}
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href={project.site}>
                      Live demo {""}
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
