
import { FaGithub } from 'react-icons/fa';


const SocialMediaIcons = () => {


return(


          <div className="flex justify-center md:justify-start my-10 gap-7" >
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.linkedin.com/"
             target="_blank"
             rel="noreferrer"
            >
                     <img alt="linked-link" src="../assets/linkedin.png"/>
            </a>
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.twitter.com/"
             target="_blank"
             rel="noreferrer"
            >
                     <img alt="twitter-link" src="../assets/twitter.png"/>
            </a>
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://facebook.com/"
             target="_blank"
             rel="noreferrer"
            >
                     <img alt="facebook-link" src="../assets/facebook.png"/>
            </a>
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://www.instagram.com/"
             target="_blank"
             rel="noreferrer"
            >
                     <img alt="instagram-link" src="../assets/instagram.png"/>
            </a>
            <a
             className="hover:opacity-50 transition duration-500"
             href="https://github.com/SANN-py"
             target="_blank"
             rel="noreferrer"
            >
                     <FaGithub size={34.5} className="text-white" title="GitHub Profile" />
            </a>
          
          </div>
)
}
export default SocialMediaIcons