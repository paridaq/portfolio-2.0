


function SocialMedia(){
    return(
        <>
        <style>{
            `
            .social-media{
            
            margin-top:25px
            margin-right:20px;
        
            }
            .socials-under{
            opacity:0.7;
            display:flex;
            gap:25px;
            }
            .email{
            opacity:0.7
            }
            .border-text{
            display:inline-block;
            border-bottom:3px solid white;
            padding-buttom:5px;
            

            }
            
            `
            }

        </style>
          <div className='social-media'>

            <h3>Get in touch</h3>
            <hr/>
            <div className="email">
                <p>If you have any inquiries,please feel free to reach out.You 
                    can contact me via email at-
                    <a href="mailto:paridabiswa2k@gmail.com">paridabiswa2k@gmail.com</a>
                </p>
                
            </div>
            <h3 className="border-text">
                follow me on
            </h3>

            <div className='socials-under'>
              <div>
                <a href="https://www.linkedin.com/in/biswajit-parida-56501a186/">
                <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                </a>
              </div>
              <div>
                <a href="https://x.com/Biswaji22176021">
                <img width="48" height="48" src="https://img.icons8.com/lollipop/48/twitterx.png" alt="twitterx"/>
                </a>
              </div>
              <div>
                <a href="https://github.com/paridaq">
                <img width="50" height="50" src="https://img.icons8.com/nolan/64/github.png" alt="github"/> 
                </a>
              </div>
              <div>
                <a href="https://leetcode.com/u/_Biswajit091_/">
                <img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo"/>
                </a>
              </div>

            </div>
           


            
            </div>       
        </>
    )
}
export default  SocialMedia;




//border-bottom css property draws line below the text