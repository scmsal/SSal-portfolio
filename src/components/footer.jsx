import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-sm text-cobalt px-12 py-2 flex flex-row justify-between items-center mb-4">
      <div>
        © {new Date().getFullYear()} Stephanie Salifu. All rights reserved.
      </div>
      <div className="flex space-x-3 mt-2 items-center">
        <a href="mailto:scm.salifu@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" alt="envelope icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/stephanie-s-a7091854/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
