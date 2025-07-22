
import LineGradient from "../components/LineGradient";
import {motion} from "framer-motion";


const Testimonials = () => {

  const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
  justify-end p-16 mt-48 before:absolute before:top-[-150px] before:-ml-[110px] before:left-1/2`;

return(

          <section id = "testimonials" className="pt-32 pb-16">
                    {/* heading */}

                    <motion.div
                                        className="md:w-1/3 text-center md:text-left"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                                  variants={{
                                                            hidden: { opacity: 0, x: -50 },
                                                            visible: { opacity: 1, x: 0 }
                                                  }}
                              >
                                        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                                                  TESTIMONIALS
                                        </p>
                                        <div className="flex justify-center mt-5 md:ml-[-160px] md:mr-20">

                                        <LineGradient width="mx-auto w-2/4" />
                                        </div>
                                        <p className="mt-10 mb-7 text-sm">
                                                  Here are some testimonials from my clients and colleagues. 
                                                  Their feedback is invaluable to me and helps me improve my skills and services.
                                        </p>
                              </motion.div>

                              {/* testimonials */}
                              <div className="md:flex md:justify-between gap-8">
                                        <motion.div
                                        className={`bg-blue ${testimonialStyles} before:content-person1`}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5 }}
                                                  variants={{
                                                            hidden: { opacity: 0, scale: 0.8 },
                                                            visible: { opacity: 1, scale: 1 }
                                                  }}
                              >
                                        <p className="font-playfair text-6xl ml-[-50px]">
                                            "      
                                        </p>
                                        <p className="text-center text-l mt-5">
                                                  Edroh is an exceptional developer. His attention to detail and commitment to quality is evident in every project he undertakes. 
                                                  I highly recommend him for any web development needs.
                                        </p>
                              </motion.div>
                              <motion.div
                                        className={`bg-red ${testimonialStyles} before:content-person2`}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay:0.2,duration: 0.5 }}
                                                  variants={{
                                                            hidden: { opacity: 0, scale: 0.8 },
                                                            visible: { opacity: 1, scale: 1 }
                                                  }}
                              >
                                        <p className="font-playfair text-6xl ml-[-50px]">
                                            "      
                                        </p>
                                        <p className="text-center text-l mt-5">
                                                  Working with Edroh was a pleasure. He is not only skilled but also a great communicator. 
                                                  He delivered the project on time and exceeded our expectations.
                                        </p>
                              </motion.div>
                              <motion.div
                                        className={`bg-yellow ${testimonialStyles} before:content-person3`}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay:0.4,duration: 0.5 }}
                                                  variants={{
                                                            hidden: { opacity: 0, scale: 0.8 },
                                                            visible: { opacity: 1, scale: 1 }
                                                  }}
                              >
                                        <p className="font-playfair text-6xl ml-[-50px]">
                                            "      
                                        </p>
                                        <p className="text-center text-l mt-5">
                                                  Edroh's work is top-notch. His ability to solve complex problems and deliver innovative solutions is impressive. 
                                                  I look forward to working with him again in the future.
                                        </p>
                              </motion.div>
                              </div>
          </section>
)
}
export default Testimonials;