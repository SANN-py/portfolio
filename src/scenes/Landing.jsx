
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../components/SocialMediaIcons';


const Laning = ({setSelectedPage})=>{
          const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

return(

<section id = "home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
          {/* image section */}
          <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
             {isAboveMediumScreens ? (
                    <div
                      className= 
                      "relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                              <img 
                                        alt="profile"
                                        className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
                                        src="assets/profile-circle.png"
                              />
                    </div>
             ):(
                              <img 
                                        alt="profile"
                                        className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]'
                                        src="assets/profile-circle.png"
                              />
             )}
          </div>
             {/* Main text section */}
             <div className='z-30 mt-12 basis-2/5 md:mt-32'>
                    {/* heading section */}
                    <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.5 }}
                     variants={{
                              hidden: { opacity: 0, x: -50 },
                              visible: { opacity: 1, x: 0 }
                     }}
                    >
                    <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                       KIM{" "}
                       <span
                         className='xs:relative xs:text-deep-blue xs:font-semibold z-20
                         xs:before:content-brush before:absolute before:-left-[25px]
                         before:-top-[120px] before:z-[-1]'
                       >
                              SANN
                       </span>
                    </p>
                    <p
                        className='mt-20 mb-7 text-sm text-center md:text-start'      
                    >
                              I am 25 years old. I am from kompot province. I have experience 
                              in working 7 years since 2018.Currently, I am a student at Western 
                              University, majoring in Computer Science. I am passionate about learning 
                              new technologies and improving my skills in software development.
                    </p>

                    </motion.div>
                    {/* call to action */}

                    <motion.div
                     className='flex mt-5 justify-center md:justify-start'
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.2, duration: 0.5 }}
                     variants={{
                              hidden: { opacity: 0, x: -50 },
                              visible: { opacity: 1, x: 0 }
                     }}
                    >
                    <AnchorLink
                     className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                     hover:bg-blue hover:text-white transition duration-500'
                     onClick={()=> setSelectedPage('contact')}
                     href='#contact'
                    >
                     Contact Me
                    </AnchorLink>
                    <AnchorLink
                     className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                     onClick={()=> setSelectedPage('contact')}
                     href='#contact'
                    >
                     <div
                      className='bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'
                     >
                              Let's Talk
                     </div>
                    </AnchorLink>

                    </motion.div>

                    <motion.div
                     className='flex mt-5 justify-center md:justify-start'
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.4, duration: 0.5 }}
                     variants={{
                              hidden: { opacity: 0, x: -50 },
                              visible: { opacity: 1, x: 0 }
                     }}
                    >
                     <SocialMediaIcons />

                    </motion.div>
             </div>

         
</section>

)
}

export default Laning;