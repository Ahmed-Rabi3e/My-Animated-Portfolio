import './Logo.scss';
import LogoS from '../../../assets/images/logo-s.png'

function Logo() {

  return (
    <div className="logo-container"  >
      <img
        className="solid-logo"
        
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  );
}

export default Logo;