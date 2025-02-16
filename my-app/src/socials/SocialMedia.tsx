import react from 'react'
import linkedinIcon from '../assets/icons8-linkedin-80.png'
import githubicon from '../assets/icons8-github-48.png'
import twittericon from '../assets/icons8-x-80.png'

function SocialMedia(){
    return(
        <>
        <style>{
            `
            .social-media{
            opacity:0.5;
            margin-top:25px
        
            }
            >socials{
            display:flex;
            ;
            }
            `
            }

        </style>
          <div className='social-media'>

            <h3>Get in touch</h3>
            <hr/>
            <div className='socials'>
                <a href="https://x.com/Biswaji22176021">
                X 
                </a>
                <a href="https://www.linkedin.com/in/biswajit-parida-56501a186/">
                  Linkedin
                </a>

            </div>


            
            </div>       
        </>
    )
}
export default  SocialMedia;