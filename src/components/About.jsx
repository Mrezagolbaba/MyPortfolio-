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
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                        laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                        Laborum, voluptas natus?
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
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
