import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#f1f1f1' }}>
      {/* Grid container */}
      <div className="container pt-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <Button variant="link" >
            <img src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714770511/txvmg0ecrmwr2c1ym20n.png" height={'25px'} width={'25px'}/>
          </Button>

          {/* instagrame */}
          <Button variant="link" className="btn-floating btn-lg text-dark m-1">
          <img src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714770511/uj9cykiqg0kkce22wgh4.png" height={'25px'} width={'25px'}/>
          </Button>

          {/* whatsapp */}
          <Button variant="link" className="btn-floating btn-lg text-dark m-1">
            <img src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714770511/kbbtfdr1qv5up6s0x9dt.png" height={'25px'} width={'25px'}/>
          </Button>

          {/* messanger */}
          <Button variant="link" className="btn-floating btn-lg text-dark m-1">
             <img src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714770512/qci41jqrpdsqmnmyad3e.png" height={'25px'} width={'25px'}/>
          </Button>

          {/* youtube */}
          
          <Button variant="link" className="btn-floating btn-lg text-dark m-1">
          <img src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714770511/ghdvwnbrerd3gakfnh6f.png" height={'25px'} width={'25px'}/>
          </Button>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-dark" href="#">Achraf Ayadi</a>
      </div>
      {/* Copyright */}
    </footer>
  );  
}

export default Footer;
