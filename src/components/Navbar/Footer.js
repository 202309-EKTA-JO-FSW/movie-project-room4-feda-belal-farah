import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerr'>
        <div>
          <h1>Feda</h1>
          <ul>
            <li>
              <a href="https://github.com/fedabaqain" target='_blank' className='hoverr'>Github</a>
              <FontAwesomeIcon icon={faGithub} className='icon'/>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/feda-beqain-206963294/" className='hoverr' target='_blank'>Linkedin</a>
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </li>
          </ul>
        </div>

        <div>
          <h1>Belal</h1>
          <ul>
            <li>
              <a href="https://github.com/belalninja" target='_blank' className='hoverr'>Github</a>
              <FontAwesomeIcon icon={faGithub} className='icon'/>
            </li>
            <li>
              <a href="https://jo.linkedin.com/in/belal-abo-mo-alsh-919275220" className='hoverr' target='_blank'>Linkedin</a>
              <FontAwesomeIcon icon={faLinkedin} className='icon'/>
            </li>
          </ul>
        </div>

        <div>
          <h1>Farah </h1>
          <ul>
            <li>
              <a href="https://github.com/FarahArar" target='_blank' className='hoverr'>Github</a>
              <FontAwesomeIcon icon={faGithub} className='icon'/>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/farah-arar-845ba826a/" className='hoverr' target='_blank'>Linkedin</a>
              <FontAwesomeIcon icon={faLinkedin} className='icon'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
