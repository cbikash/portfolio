import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

import {useEffect, useState} from "react";
import {FaFacebookSquare, FaLinkedin, FaGithub, FaPhoneAlt, FaMap} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { Input } from '@/components/ui/input';
import { Dialog } from '@/components/ui/dialog';
import ScrollToTopButton from '@/components/scroll-top';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [active, setActive] = useState("Home");
    let date = new Date();
    let year = date.getFullYear();

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: "ABOUT ME", content: "This is content for Tab 1." },
        { label: "SKILLS", content: "This is content for Tab 2." },
        { label: "EXPERIENCE", content: "This is content for Tab 3." },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const hash = window.location.hash.replace("#", ""); // Remove the '#' symbol
        if (hash) setActive(hash);
    }, []);

    useEffect(() => {
        // Check the screen width on mount and set the initial state of the menu
        if (window.innerWidth >= 1024) {
            setIsMenuOpen(true); // Default open on large screens
        } else {
            setIsMenuOpen(false); // Default closed on smaller screens
        }

        // Function to handle window resize events
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(true); // Keep open on large screens
            } else {
                setIsMenuOpen(false); // Close on smaller screens
            }
        };

        // Add event listener for resizing
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run only once on mount

    return (
        <>
            <Head title="Bikas chaudhary"/>
            <div className="min-h-[00px] pb-[245px] px-0 h-screen" style={{
                background: "linear-gradient(to right, #182848, #5758bb)",
                clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
            }}>
                <nav
                    className="flex items-center md:bg-amber-200 justify-between bg-white  md:bg-transparent text-gray-900 md:text-transparent flex-wrap  p-6 md:mx-28">
                    <div className="flex items-center flex-shrink-0 text-gray-900 md:text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight ">Bikas chaudhary Tharu</span>
                    </div>
                    {/* Menu button for small screens */}
                    <div className="block lg:hidden">
                        <button
                            onClick={toggleMenu} // Toggle the menu visibility
                            className=" flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-gray-900 hover:border-gray-900"
                        >
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Menu links: Only visible on large screens */}
                    <div
                        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto
                          ${isMenuOpen ? 'block opacity-100 transform translate-x-0' : 'hidden opacity-0 transform translate-x-full'}
                          transition-all duration-300 ease-in-out`}
                    >
                        <div className="text-sm lg:flex-grow">
                            {["Home", "About", "Services", "Projects"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={() => setActive(item)}
                                    className={`relative block mt-4 lg:inline-block lg:mt-0
                                    text-gray md:text-white hover:text-gray-900 md:hover:text-white mr-4 group
                                    ${active === item ? "text-[#a9143f]" : ""}`}
                                >
                                    {item}
                                    <span className={`absolute left-0 bottom-0 w-5 h-[2px] bg-[#a9143f] transition-all duration-500
                                        ${active === item ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                                    </span>
                                </a>
                            ))}
                        </div>
                        <div className={'flex gap-2'}>
                            <a
                                href="#"
                                className="inline-block text-sm px-4 py-2 leading-none border rounded md:text-white text-gray-900 border-gray-300 md:border-white hover:border-transparent hover:text-gray-500 md:hover:text-white hover:bg-white md:hover:bg-gray-900 mt-4 lg:mt-0"
                            >
                                Download
                            </a>
                            <a
                                href="#"
                                className="inline-block text-sm px-4 py-2 leading-none border rounded md:text-white text-gray-900 border-gray-300 md:border-white hover:border-transparent hover:text-gray-500 md:hover:text-white hover:bg-white md:hover:bg-gray-900 mt-4 lg:mt-0"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </nav>

                <div>
                    <div className="text-center mt-20 md:mt-40  flex flex-col">
                        <span className={'text-6xl text-white text-center font-bold'}>Bikas Chaudhary Tharu</span>
                        <span className={'text-xl text-white text-center font-bold mt-4'}>
                            Driving Innovation, Powering Progress.
                        </span>
                    </div>
                    <div className="flex   justify-center items-center mt-5  text-center">
                        <div
                            style={{
                                position: "relative",
                                display: "inline-block",
                                padding: "5px 40px",
                                background:
                                    "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(169, 20, 63), rgba(255, 255, 255, 0))",
                            }}
                        >
                            <div
                                className="flex flex-col md:flex-row sm:flex-col md:gap-2  items-center text-white justify-center">
                                <span>Living In Nepal</span>
                                <span className="md:border-r-2  border-amber-50 md:h-4 md:mx-4 border-solid"></span>
                                <span>+977 98459623239704</span>
                                <span className="md:border-r-2  border-amber-50 md:h-4 md:mx-4 border-solid"></span>
                                <span>tharuchaudharybikasderer@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={'flex justify-center items-center mt-10 text-center gap-4 text-white'}>
                        <span>
                            <a href="https://www.facebook.com/vxbikas/">
                                <FaFacebookSquare/>
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/vxbikas/">
                                <FaLinkedin/>
                            </a>
                        </span>
                        <span>
                            <a href="https://github.com/cbikash">
                                <FaGithub/>
                            </a>
                        </span>
                    </div>


                    <div className={'flex justify-center items-center mt-10 text-center gap-4 text-white'}>
                        <div>
                            <button className={'px-12 py-2 border-2 border-white rounded-md'}>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className={'mt-20'} id={'About'}>
                <div className={'flex flex-col items-center justify-center mb-20'}>
                    <h2 className={'text-4xl font-bold'}>About Me</h2>
                    <span className={'border-red-600 h-8 border-2 m-4'}></span>
                    <p className={'w-10/12 md:w-1/2 text-center'}>
                        Bikas Chaudhary, a backend developer based in Kathmandu, Nepal, excels in Symfony, Laravel,
                        React and Vuejs.
                    </p>
                </div>

                <div className={'flex flex-col md:flex-row gap-12 mb-20 mx-12 md:mx-28 '}>
                    <div className={'flex-1'}>
                        <div className="mx-auto">
                            <div
                                className="flex flex-col md:flex-row gap-2 items-center justify-center md:items-start md:justify-start ">
                                {tabs.map((tab, index) => (
                                    <div className={''}>
                                        <button
                                            key={index}
                                            className={`relative border-2 py-2 px-12 rounded-sm focus:outline-none transition-all duration-200 text-sm
                                            ${activeTab === index ? "bg-blue-600 border-blue-600 text-white font-semibold" : "text-gray-900 bg-gray-50 border-gray-50 hover:text-blue-500"}`}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.label}
                                            {activeTab === index && (
                                                <div
                                                    className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-600"></div>
                                            )}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <div className={`${activeTab === 0 ? "display" : "hidden"}`}>
                                    <div>
                                        <span className={'text-3xl font-bold'}>My Story</span>
                                    </div>
                                    <div className={'mt-8'}>
                                        <p className={'text-gray-400'}>Far far away, behind the word mountains, far from
                                            the countries Vokalia and Consonantia, there live the blind texts. Separated
                                            they live in Bookmarksgrove right at the coast of the Semantics, a large
                                            language ocean.</p>
                                    </div>

                                    <div className={'mt-8'}>
                                        <span className={'text-3xl font-bold'}>I Do Web Design & Developement since I was 18 Years Old</span>
                                    </div>

                                    <div className={'mt-8'}>
                                        <p className={'text-gray-400'}>
                                            Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts.
                                        </p>
                                    </div>
                                </div>

                                <div className={`${activeTab === 1 ? "display" : "hidden"}`}>
                                    <div>
                                        <span className={'text-3xl font-bold'}>Skill</span>
                                    </div>
                                    <div className={'mt-8'}>
                                        <p className={'text-gray-400'}>Far far away, behind the word mountains, far from
                                            the countries Vokalia and Consonantia, there live the blind texts. Separated
                                            they live in Bookmarksgrove right at the coast of the Semantics, a large
                                            language ocean.</p>
                                    </div>
                                    <div className={'mt-8'}>
                                        <div className={'flex mt-4 gap-8'}>
                                            <div className={'flex-1'}>
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between gap-4 mb-2">
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            PHP
                                                        </h6>
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            50%
                                                        </h6>
                                                    </div>
                                                    <div
                                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
                                                        <div
                                                            className="flex items-center justify-center w-1/2 h-full overflow-hidden bg-gray-900 text-white break-all rounded-full">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'flex-1'}>
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between gap-4 mb-2">
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            Laravel
                                                        </h6>
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            50%
                                                        </h6>
                                                    </div>
                                                    <div
                                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
                                                        <div
                                                            className="flex items-center justify-center w-1/2 h-full overflow-hidden bg-gray-900 text-white break-all rounded-full">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'flex mt-4 gap-8'}>
                                            <div className={'flex-1'}>
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between gap-4 mb-2">
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            Symfony
                                                        </h6>
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            50%
                                                        </h6>
                                                    </div>
                                                    <div
                                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
                                                        <div
                                                            className="flex items-center justify-center w-1/2 h-full overflow-hidden bg-gray-900 text-white break-all rounded-full">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'flex-1'}>
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between gap-4 mb-2">
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            Javascript
                                                        </h6>
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            50%
                                                        </h6>
                                                    </div>
                                                    <div
                                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
                                                        <div
                                                            className="flex items-center justify-center w-1/2 h-full overflow-hidden bg-gray-900 text-white break-all rounded-full">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'flex mt-4 gap-8'}>
                                            <div className={'flex-1'}>
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between gap-4 mb-2">
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            Database
                                                        </h6>
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            50%
                                                        </h6>
                                                    </div>
                                                    <div
                                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
                                                        <div
                                                            className="flex items-center justify-center w-1/2 h-full overflow-hidden bg-gray-900 text-white break-all rounded-full">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'flex-1'}>
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between gap-4 mb-2">
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            React/VueJs
                                                        </h6>
                                                        <h6
                                                            className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                                            50%
                                                        </h6>
                                                    </div>
                                                    <div
                                                        className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium">
                                                        <div
                                                            className="flex items-center justify-center w-1/2 h-full overflow-hidden bg-gray-900 text-white break-all rounded-full">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${activeTab === 2 ? "display" : "hidden"}`}>
                                    <div>
                                        <h2 className={'text-2xl font-bold'}><a href="https://fintechnepal.com/">Fintech
                                            Nepal</a></h2>
                                        <div className={'flex mt-2 text-blue-400'}>
                                            <span>2020-12-36</span>
                                            <FaLocationDot className={'ml-2 mt-1 w-3 h-3'}/>
                                            <p className={'ml-2 text-gray-400'}>
                                                Mid-Baneshwor, Kathmandu, Nepal
                                            </p>
                                        </div>
                                        <div className={'mt-4'}>
                                            <p className={'text-gray-400'}>A small river named Duden flows by their
                                                place and supplies it with the necessary regelialia.</p>
                                        </div>
                                    </div>

                                    <div className={'mt-4'}>
                                        <h2 className={'text-2xl font-bold'}><a href="https://shikhartech.com">Shikhartech
                                            Nepal</a></h2>
                                        <div className={'flex mt-2 text-blue-400'}>
                                            <span>2020-12-36</span>
                                            <FaLocationDot className={'ml-2 mt-1 w-3 h-3'}/>
                                            <p className={'ml-2 text-gray-400'}>
                                                Balkumari, Lalitpur, Nepal
                                            </p>
                                        </div>
                                        <div className={'mt-4'}>
                                            <p className={'text-gray-400'}>A small river named Duden flows by their
                                                place and supplies it with the necessary regelialia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={'flex-1'}>
                        <div className="relative flex justify-center md:justify-start">
                            <img
                                src="1.jpg"
                                alt="About Image"
                                style={{
                                    boxShadow: '-20px -19px 0px -4px #efefef'
                                }}
                                className="w-[400px] h-auto relative"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className={'mt-20 bg-gray-50 py-20'} id={'Services'}>
                <div className={'flex flex-col items-center justify-center mb-20'}>
                    <h2 className={'text-4xl font-bold'}>Services</h2>
                    <span className={'border-red-600 h-8 border-2 m-4'}></span>
                    <p className={'w-10/12 md:w-1/2 text-center'}>
                        This is My Expertise, The Services I'll Provide My Clients
                    </p>
                </div>

                <div className={'flex flex-col md:flex-row gap-4 mb-20 md:mx-28'}>
                    <div className={'flex-1 rounded-sm shadow-sm p-12 bg-white w-full'}>
                        <span className={'text-2xl font-bold text-blue-400'}>UI & UX Design</span>
                        <p className={'text-gray-400 mt-4'}>
                            Frontend development involves crafting the visual and interactive aspects of websites and
                            web applications using languages like HTML, CSS, and JavaScript, along with frameworks such
                            as React.js or Angular. Developers focus on creating responsive, accessible interfaces while
                            optimizing performance and ensuring cross-browser compatibility, all while collaborating
                            efficiently using version control and deploying updates rapidly through continuous
                            integration and deployment.
                        </p>
                    </div>

                    <div className={'flex-1 rounded-sm shadow-sm p-12 bg-white w-full'}>
                        <span className={'text-2xl font-bold text-blue-400'}>UI & UX Design</span>
                        <p className={'text-gray-400 mt-4'}>
                            Frontend development involves crafting the visual and interactive aspects of websites and
                            web applications using languages like HTML, CSS, and JavaScript, along with frameworks such
                            as React.js or Angular. Developers focus on creating responsive, accessible interfaces while
                            optimizing performance and ensuring cross-browser compatibility, all while collaborating
                            efficiently using version control and deploying updates rapidly through continuous
                            integration and deployment.
                        </p>
                    </div>

                    <div className={'flex-1 rounded-sm shadow-sm p-12 bg-white w-full'}>
                        <span className={'text-2xl font-bold text-blue-400'}>UI & UX Design</span>
                        <p className={'text-gray-400 mt-4'}>
                            Frontend development involves crafting the visual and interactive aspects of websites and
                            web applications using languages like HTML, CSS, and JavaScript, along with frameworks such
                            as React.js or Angular. Developers focus on creating responsive, accessible interfaces while
                            optimizing performance and ensuring cross-browser compatibility, all while collaborating
                            efficiently using version control and deploying updates rapidly through continuous
                            integration and deployment.
                        </p>
                    </div>
                </div>

                <div className={'flex mx-6 md:mx-60'}>
                    <div>
                        <p className={'font-bold text-gray-600 mb-4'}>Have any works you want to done by me? <span
                            className={'text-blue-400'}>Contact Me</span></p>
                        <p className={'text-gray-400'}>Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </section>

            <section className={'py-20'} id={'Portfolio'}>
                <div className={'flex flex-col items-center justify-center mb-20'}>
                    <h2 className={'text-4xl font-bold'}>Portfolio</h2>
                    <span className={'border-red-600 h-8 border-2 m-4'}></span>
                    <p className={'w-10/12 md:w-1/2 text-center'}>
                        My Latest Work
                    </p>
                </div>

                <div className={'flex flex-col md:flex-row gap-4 mx-4 mb-20 md:mx-28'}>
                    <div className="flex flex-col md:flex-row gap-4 mx-4 mb-20 md:mx-28">
                        {/* Image 1 */}
                        <div className="relative flex-1">
                            <img src="p1.jpg" alt="" className="w-full h-auto"/>
                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                This is overlay
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="relative flex-1">
                            <img src="p2.jpg" alt="" className="w-full h-auto"/>
                            {/* Overlay */}
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                This is overlay
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className={'py-20  bg-gray-50'} id={'Blogs'}>
                <div className={'flex flex-col items-center justify-center mb-20'}>
                    <h2 className={'text-4xl font-bold'}>Blogs</h2>
                    {/*<span className={'border-red-600 h-8 border-2 m-4'}></span>*/}


                    <span
                        className="border-red-600 h-8 border-2 m-4 animate-pulse shadow-md shadow-red-500 hover:shadow-lg transition-all duration-3000"></span>

                    <p className={'w-10/12 md:w-1/2 text-center'}>
                        Recent From Blog
                    </p>
                </div>

                <div className={'flex flex-col md:flex-row gap-8 mb-20 mx-4 md:mx-28'}>
                    <div className={'flex-1 bg-white rounded-2xl shadow-md pb-8'}>
                        <div className={'w-full'}>
                            <img src="b.jpg" className={'rounded-t-2xl'} alt="blog 1"/>
                        </div>
                        <div className={'mt-4 py-6 mx-8'}>
                            <div className={'flex'}>
                                <div className={'flex'}>
                                    <FaCalendarAlt className={'text-blue-400 mt-1'}/>
                                    <span className={'ml-2 text-gray-400'}>Jan. 18, 2021</span>
                                </div>
                                <div className={'flex ml-4'}>
                                    <FaComment className={'text-blue-400 mt-1'}/>
                                    <span className={'ml-2 text-blue-400'}>3, Comments</span>
                                </div>
                            </div>

                            <div className={'mt-8'}>
                                <span className={'text-2xl font-bold '}>Tips About Creating A New Web Design</span>
                                <div className={'mt-4 text-gray-400'}>
                                    <p>
                                        A small river named Duden flows by their place and supplies it with the
                                        necessary regelialia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'flex-1 bg-white rounded-2xl shadow-md pb-8'}>
                        <div className={'w-full'}>
                            <img src="b1.jpg" className={'rounded-t-2xl'} alt="blog 1"/>
                        </div>
                        <div className={'mt-4 py-6 mx-8'}>
                            <div className={'flex'}>
                                <div className={'flex'}>
                                    <FaCalendarAlt className={'text-blue-400 mt-1'}/>
                                    <span className={'ml-2 text-gray-400'}>Jan. 18, 2021</span>
                                </div>
                                <div className={'flex ml-4'}>
                                    <FaComment className={'text-blue-400 mt-1'}/>
                                    <span className={'ml-2 text-blue-400'}>3, Comments</span>
                                </div>
                            </div>

                            <div className={'mt-8'}>
                                <span className={'text-2xl font-bold '}>Tips About Creating A New Web Design</span>
                                <div className={'mt-4 text-gray-400'}>
                                    <p>
                                        A small river named Duden flows by their place and supplies it with the
                                        necessary regelialia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id={'Contact'} className={''}>
                <div className={'flex flex-col md:flex-row gap-2'}>
                    <div className="flex-1 w-full">
                        <iframe
                            className="w-full h-full min-h-[400px]"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7064.584189864533!2d85.38786461932793!3d27.70826633449682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2snp!4v1741373246048!5m2!1sen!2snp"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>


                    <div className={'flex-1'}>
                        <div className={'p-8'}>
                            <h2 className={'text-3xl mb-3'}>Contact Me</h2>
                            <p>We're open for any suggestion or just to have a chat</p>
                            <div className={'flex flex-col md:flex-row mt-6'}>
                                <div className={'flex-1 m-2 md:m-0'}>
                                    <span className={'font-bold'}>My Address:</span>
                                    <p className={'text-gray-500'}>Kathmandu, Nepal</p>
                                </div>
                                <div className={'flex-1 m-2 md:m-0'}>
                                    <span className={'font-bold'}>My Email:</span>
                                    <p className={'text-gray-800'}>vcbikash123@gmail.com</p>
                                </div>
                                <div className={'flex-1 m-2 md:m-0'}>
                                    <span className={'font-bold'}>My Phone:</span>
                                    <p className={'text-gray-800'}>+977 9845969704</p>
                                </div>
                            </div>

                            <div className={'mt-8'}>
                                <form>
                                    <div className={'flex flex-row gap-8'}>
                                        <div className={'flex-1 w-full'}>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                className={'border-gray-300 w-full'}
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                        <div className={'flex-1 w-full'}>
                                            <input type="text" placeholder={'Email'}
                                                   className={'border-gray-300 w-full'} />
                                        </div>
                                    </div>
                                    <div className={'mt-4 w-full'}>
                                        <input placeholder={'Subject'} type="text"
                                               className={'border-gray-300 w-full'} />
                                    </div>
                                    <div className={'mt-4 w-full'}>
                                        <textarea rows={5} placeholder={'Create Message here'}
                                                  className={'border-gray-300 w-full'} />
                                    </div>
                                    <div className={'mt-4 w-full'}>
                                        <button
                                            className={'px-12 py-2 border-2 text-white border-[#5758bb] rounded-md bg-[#5758bb]'}>
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className={'mt-12 mb-12'}>
                                <h2 className={'text-2xl mb-2'}>Follow me here</h2>
                                <div className={'flex gap-4 text-[#5758bb] font-bold'}>
                                    <span className={'hover:text-gray-900'}>Facebook</span>
                                    <span className={'hover:text-gray-900'}>Instagram</span>
                                    <span className={'hover:text-gray-900'}>Github</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'bg-[#5758bb] px-6 md:px-28'}>
                    <div className={'flex flex-col md:flex-row p-6 py-12 '}>
                        <div className={'flex-1 text-center md:text-left'}>
                            <h2 className={'font-bold text-2xl text-white'}>Have any works you want to done by me?</h2>
                            <p className={'text-white mt-3'}>Far far away, behind the word mountains</p>
                        </div>
                        <div className={'flex-1 flex mt-5 md:mt-0 items-center justify-center'}>
                            <button
                                className={'px-12 py-2 border-2 text-white border-white rounded-md hover:bg-white hover:border-white hover:text-gray-900'}>
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>

            </section>

            <section id={'footer'}>
                <div className={'bg-gray-50 py-20'}>
                    <div className={'flex flex-col md:flex-row gap-12 md:gap-4 p-6 md:mx-28'}>
                        <div className={'flex-1'}>
                            <h2 className={'font-bold text-2xl md:mb-12 mb-4'}>Bikas Chaudhary Tharu</h2>
                            <p className={'text-gray-400'}>
                                A small river named Duden flows by their place and supplies it with the necessary
                                regelialia.
                            </p>
                            <div className={'flex mt-8 mt-4 gap-2'}>
                                <a href="#">
                                    <FaFacebookSquare className={`text-[#5758bb] w-6 h-6 `}/>
                                </a>

                                <a href="#">
                                    <FaGithub className={`text-[#5758bb] w-6 h-6`}></FaGithub>
                                </a>
                                <a href="">
                                    <FaLinkedin className={`text-[#5758bb] w-6 h-6`}/>
                                </a>

                            </div>
                        </div>
                        <div className={'flex-1'}>
                            <h2 className={'font-bold text-2xl  mb-4 md:mb-12'}>Services</h2>
                            <div className={''}>
                                <ul>
                                    <li className={`mb-2 hover:text-[#5758bb]`}>Web Design</li>
                                    <li className={`mb-2 hover:text-[#5758bb]`}>Web Development</li>
                                    <li className={`mb-2 hover:text-[#5758bb]`}>Graphic Design</li>
                                    <li className={`mb-2 hover:text-[#5758bb]`}>UI/UX Design</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'flex-1'}>
                            <h2 className={'font-bold text-2xl mb-4 md:mb-12'}>Have a Questions?</h2>
                            <div>
                                <ul>
                                    <li className={'mb-4'}>
                                        <p className={'flex gap-6'}>
                                            <FaMap className={'text-[#5758bb] h-5 w-5'}/>
                                            <p>Kathmandu, Nepal</p>
                                        </p>
                                    </li>

                                    <li className={'mb-4'}>
                                        <p className={'flex gap-6'}>
                                            <FaPhoneAlt className={'text-[#5758bb] h-4 w-4'}/>
                                            <a href={''}>+977 9845969704</a>
                                        </p>
                                    </li>

                                    <li className={'mb-4'}>
                                        <p className={'flex gap-6'}>
                                            <SiMinutemailer className={'text-[#5758bb] h-5 w-5'}/>
                                            <a href={'mailto:vcbikash12@gmail.com'}> vcbikash12@gmail.com</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col items-center justify-center bg-gray-100 p-10 '}>
                    <div>
                        <span className={'text-gray-400 font-bold'}>
                            Copyright ©{year} All rights reserved
                        </span>
                    </div>
                </div>
                <ScrollToTopButton />

            </section>


        </>
    )
}
