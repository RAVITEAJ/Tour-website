import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer">
        <div className="footer__top">
            <div className="container">
            <div className="footer__row">
                <h2>subscribe now</h2>
                <form action="#" className='email'>
                    <input type="email" placeholder='enter your email' />
                </form>
                <button>subscribe</button>
            </div>
        </div>
        </div>
        <div className="footer__middle">
            <div className="container">
                <div className="footer__rows">
                    <div className="footer__col">
                        <div className="footer__boxes">
                        <img src="./images/footer-logo.png" alt="" />
                        </div>
                        <h3>customer service</h3>
                        <p>here are many variat ions of passages of Lorem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
                    </div>
                    <div className="footer__col">
                        <h3>let us help you</h3>
                        <p>here are many variat ions of passages of Lorem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
                    </div>
                    <div className="footer__col">
                        <h3>information</h3>
                        <p>here are many variat ions of passages of Lorem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
                    </div>
                    <div className="footer__col">
                        <h3>our shop</h3>
                        <p>here are many variat ions of passages of Lorem Ipsum available , but the majority h ave suffered altera tion in some form, by</p>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__last">
            <p>copyright 2022 all right reserved. <a href="!#">Raviteja code.</a></p>
        </div>
    </div>
  )
}

export default Footer

