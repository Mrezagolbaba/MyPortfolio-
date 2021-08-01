import Hero from '../assets/mongodb.svg'
import Hero2 from '../assets/node_icon.svg'
import Hero3 from '../assets/react.svg'
import Hero4 from '../assets/expressjs.svg'
function About() {
    return (
        <section className="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Mohamadreza.
                        <br className="hidden lg:inline-block" />I love to build amazing
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed text">
                        Full-stack software engineer ( JavaScript, Typescript, Reactjs, Nodejs, MongoDb) experienced in working with international teams and clients, seeking a new challenge
                        to build novel products.
                    </p>
                    <div className="flex justify-center">
                        <div className="b  mx-auto h-16 w-64 flex justify-center items-center">
                            <div
                                className="i h-16 w-64 bg-green-600 items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            </div>
                            <a href="#contact" className="text-center text-white font-semibold z-10 pointer-events-none">Work With Me!</a>
                        </div>
                        <div className="b mx-auto h-16 w-64 flex justify-center items-center ml-6">
                            <div
                                className="i h-16 w-64 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            </div>
                            <a href="#projects" className="text-center text-white font-semibold z-10 pointer-events-none">See My Past Work</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center lg:max-w-lg lg:w-full md:w-1/2 md:pl-24">
                    <img
                        className="md:w-20 h-20  object-cover object-center rounded"
                        alt="hero"
                        src={Hero}

                    />
                    <img
                        className="md:w-20 h-20  object-cover object-center rounded"
                        alt="hero"
                        src={Hero4}
                    />
                    <img
                        className=" md:w-20 h-20  object-cover object-center rounded"
                        alt="hero"
                        src={Hero3}
                    />
                    <img
                        className="md:w-20 h-20 object-cover object-center rounded"
                        alt="hero"
                        src={Hero2}
                    />
                </div>
            </div>
        </section>
    );
}
export default About;
