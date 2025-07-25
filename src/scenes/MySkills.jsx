
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const MySkills = () => {

          const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
return(
          <section id = "skills" className="pt-10 pb-24">
                    {/* header and image section */}
                    <div className="md:flex md:justify-between md:gap-16 mt-32">
                              <motion.div
                                        className="md:w-1/3"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                                  variants={{
                                                            hidden: { opacity: 0, x: -50 },
                                                            visible: { opacity: 1, x: 0 }
                                                  }}
                              >
                                        <p className="font-playfair font-semibold text-4xl mb-5">
                                                  MY <span className="text-red">SKILLS</span>
                                        </p>
                                        <LineGradient width="max-auto w-1/3 ml-2 " />
                                        <p className="mt-10 mb-7">
                                                  I am a full-stack developer with a passion for creating dynamic and responsive web applications. 
                                                  My skills include HTML, CSS, JavaScript, React, Node.js, and more.
                                        </p>
                              </motion.div>
                              <div className="mt-16 md:mt-0">
                                 {isAboveMediumScreen ? (

                                        <div
                                        className= 
                                                  "relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                                        >

                                                  <img 
                                                  alt="skills"
                                                  className='z-10'
                                                  src="assets/skills-image.png"
                                                  />
                                        </div>

                                 ):(
                                       
                                                  <img 
                                                  alt="skills"
                                                  className='z-10'
                                                  src="assets/skills-image.png"
                                                  />
                                 )}
                              </div>

                    </div>
                    {/* skills section */}
                    <div
                     className="md:flex md:justify-between mt-16 gap-32"
                    >
                              {/* experience */}
                              <motion.div
                                        className="md:w-1/3 mt-10"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                                  variants={{
                                                            hidden: { opacity: 0, y: 50 },
                                                            visible: { opacity: 1, y: 0 }
                                                  }}
                              >
                                        <div
                                         className="relative h-32"
                                        >
                                                  <div className="z-10">
                                                     <p className="font-playfair font-semibold text-5xl">01</p>
                                                     <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                                                  </div>
                                                  <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
                                        </div>
                                        <p className="mt-5">
                                                  I have over 3 years of experience in web development, working with various technologies and frameworks to build scalable and efficient applications.
                                        </p>
                              </motion.div>
                              {/* experience 2Inovation*/}
                              <motion.div
                                        className="md:w-1/3 mt-10"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay:0.2,duration: 0.5 }}
                                                  variants={{
                                                            hidden: { opacity: 0, y: 50 },
                                                            visible: { opacity: 1, y: 0 }
                                                  }}
                              >
                                        <div
                                         className="relative h-32"
                                        >
                                                  <div className="z-10">
                                                     <p className="font-playfair font-semibold text-5xl">02</p>
                                                     <p className="font-playfair font-semibold text-3xl mt-3">Inovative</p>
                                                  </div>
                                                  <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
                                        </div>
                                        <p className="mt-5">
                                                  I am always looking for new ways to innovate and improve my skills. I enjoy exploring new technologies and finding creative solutions to complex problems.
                                        </p>
                              </motion.div>
                              {/* Imaginative 3Inovation*/}
                              <motion.div
                                        className="md:w-1/3 mt-10"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay:0.4,duration: 0.5 }}
                                                  variants={{
                                                            hidden: { opacity: 0, y: 50 },
                                                            visible: { opacity: 1, y: 0 }
                                                  }}
                              >
                                        <div
                                         className="relative h-32"
                                        >
                                                  <div className="z-10">
                                                     <p className="font-playfair font-semibold text-5xl">03</p>
                                                     <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                                                  </div>
                                                  <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
                                        </div>
                                        <p className="mt-5">
                                                  I believe that imagination is key to success in web development. I strive to think outside the box and come up with unique solutions that set my work apart.</p>
                              </motion.div>
                    </div>
          </section>
);
};

export default MySkills;