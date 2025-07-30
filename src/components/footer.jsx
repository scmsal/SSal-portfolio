import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-sm text-cobalt px-12 py-2 flex flex-row justify-between items-center mb-4">
      <div>
        © {new Date().getFullYear()} Stephanie Salifu. All rights reserved.
      </div>
      <div className="flex space-x-3 mt-2 items-center">
        <a href="mailto:scm.salifu@gmail.com">
          <FontAwesomeIcon
            icon={["fas", "envelope"]}
            size="2xl"
            alt="envelope icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/stephanie-s-a7091854/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
