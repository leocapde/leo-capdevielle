import "./contact.css";
import gmail from "../assets/contact/gmail-logo.svg";
import linkedin from "../assets/contact/linkedin-logo.png";
import github from "../assets/contact/github-logo.svg";

export default function Contact() {
  return (
    <section id="Contact">
      <div className="section-container contact-container">
        <h2>Contact</h2>
        <div className="contact-wrapper">
          <div className="contact-item">
            <div className="contact-item-logo">
              <img src={gmail} alt="gmail logo" />
            </div>
            <div className="contact-item-description">
              <h4 className="contact-item-title">Mail</h4>
              <a href="mailto:leo.capde64@gmail.com">
                <p className="contact-item-infos">leo.capde64@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-logo">
              <img src={linkedin} alt="linkedin logo" />
            </div>
            <div className="contact-item-description">
              <h4 className="contact-item-title">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/l%C3%A9o-capdevielle-2467ba18a/">
                <p className="contact-item-infos">Léo Capdevielle</p>
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-logo">
              <img src={github} alt="github logo" />
            </div>
            <div className="contact-item-description">
              <h4 className="contact-item-title">GitHub</h4>
              <a href="https://github.com/leocapde">
                <p className="contact-item-infos">leocapde</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
