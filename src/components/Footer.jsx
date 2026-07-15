import React,{useState} from 'react'
import '../css/footer.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
    const [subscribeEmail, setSubscribeEmail] = useState('')
    const handleSubscribe = (e)=>{
        e.preventDefault();
    
        //create a new object that contains the dynamic template params
        const templateParams = {
          email: subscribeEmail
        }
        emailjs
          .send('service_tjk2anu', 'template_pfqy2bw', templateParams, '-YDlVhrgGseGZTMMr')
          .then(
            (response) => {
                setSubscribeEmail('');
                toast.success("The email is sent", {autoClose: 3000})
            },
            (error) => {
              toast.error("Failed to send email", {autoClose: 3000})
            },
          );
      }
    return (
        <>
            <footer>
                <form onSubmit={handleSubscribe}>
                <div className="first-col colm">
                    <h3>One-8  VK18</h3>
                    <input type="email" placeholder="Enter Your Email" value={subscribeEmail} onChange={(e)=>setSubscribeEmail(e.target.value)} required />
                    <button className="homebtn btn-sm" type='submit'>Subscribe</button>
                </div>
                </form>
                <ToastContainer />
                <div className="second-col colm">
                    <h3>Contact Us</h3>
                    <p>Phone: +91 8595153810</p>
                    <p>Email: saurabh.singh_cs23@gla.ac.in</p>
                    <p>Address: GLA University Mathura, 281004</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/saurabh-singh-a1a26a3a5/" className="icon">
                            <img src="/social-icon-img/twitter.svg" alt="" />
                        </a>
                        <a href="https://www.facebook.com/share/1D4gD24L1b/" className="icon" id='fb'>
                            <img src="/social-icon-img/facebook-f.svg" alt="" />
                        </a>
                        <a href="#" className="icon">
                            <img src="/social-icon-img/youtube.svg" alt="" />
                        </a>
                        <a href="https://www.instagram.com/saurabh._chaudhary18?igsh=dnAxMmhvZWJ1Y2Q0" className="icon">
                            <img src="/social-icon-img/instagram.svg" alt="" />
                        </a>
                        <a href="#" className="icon">
                            <img src="/social-icon-img/google-plus-g.svg" alt="" />
                        </a>
                        <a href="https://github.com/saurabhchaudhary-18" className="icon">
                            <img src="/social-icon-img/github.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="third-col colm">
                    <h3>Recent News</h3>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Get In Touch</p>
                </div>
            </footer>
        </>
    )
}

export default Footer