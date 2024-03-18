
import '../SideBar/SideBar.scss';
import {Link , NavLink} from "react-router-dom"
import LogoS from "../../assets/images/a.r-png.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faUser ,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'

  
function SideBar() {
  return (
   <>
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img src={LogoS} alt='logo'/>
        </Link>
        <nav>
             <NavLink exact="true" activeclassname="active" to="/">
                 <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
             </NavLink>
             <NavLink exact="true" activeclassname="active"  className="about-link" to="/about">
                 <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
             </NavLink>
             <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                 <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
             </NavLink>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ahmed-rabie-0970902a7/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Ahmed-Rabi3e"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="skype:live:" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
    </div>
   </>
  );
}

export default SideBar;
