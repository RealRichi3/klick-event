import seminars from "./assets/seminars.png"
import workshop from "./assets/workshop.png"
import kids from "./assets/kids.png"
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'

import { Icons } from "./components/Icons"
import VideoPlayer from "./components/VideoPlayer"


export default function App() {
    const goToWhatsApp = () => {
        window.location.href = 'https://wa.me/2347010876015';
    }

    return (
        <>
            <div className="circle-container">
                <div className="circle lg:rounded-t-[50%] w-full"></div>
                <div className="circle2 lg:rounded-t-[50%] w-full"></div>
            </div>

            <main className="flex main-container -mt-[500px] flex-col  items-center justify-center">

                <div className="klick-logo-area">
                    <div className="relative mb-28 mt-10 klick-logo">
                        <VideoPlayer />

                        {/* klick shop image */}

                        {/* <img src={logo} className="aspect-square" /> */}
                        {/* <p className="italic text-center font-bold text-[#0186eb]">Making Parenting a Breeze...</p> */}

                    </div>
                </div>

                <div className="bg-[#0186eb] curve lg:rounded-t-[50%] w-full">
                    <div className="flex flex-col justify-center w-[100vw] max-w-[1200px] space-y-8 pb-8 mx-auto -mt-20">
                        {/* 3 images section */}
                        <div className="people_images_section flex md:flex-col lg:flex-row items-center justify-center space-y-[30px] lg:space-x-[20px] xl:space-x-[80px]">
                            <img src={image1} className="rounded-t-[50%] rounded-b-[50%] border-[15px] border-white aspect-square h-[300px]" />

                            <img src={image2} className="rounded-t-[50%] rounded-b-[50%] border-[15px] border-white aspect-square h-[400px]" />

                            <img src={image3} className="rounded-t-[50%] rounded-b-[50%] border-[15px] border-white aspect-square h-[300px]" />
                        </div>

                        <h5 className="mt-[160px] md:mt-40 lg:mt-16 font-bold text-[20px] text-center">
                            Come Shop Toys, Books, Baby Gear, Children fashion, <br />
                            Women Fashion and Wellness.. and much more.</h5>


                        <div className="children_images_section flex items-center justify-center space-x-10 lg:space-x-32">
                            <div className="flex flex-col items-center">
                                <div className="rounded-t-[50%] rounded-b-[50%] border-[5px] border-yellow-400">
                                    <img src={seminars} className="aspect-square h-[100px]" />
                                </div>
                                <p>Seminars</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="rounded-t-[50%] rounded-b-[50%] border-[5px] border-yellow-400">
                                    <img src={workshop} className="aspect-square h-[100px]" />
                                </div>
                                <p>Interactive workshop</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="rounded-t-[50%] rounded-b-[50%] border-[5px] border-yellow-400">
                                    <img src={kids} className="aspect-square h-[100px]" />
                                </div>
                                <p>Kids Play Area</p>
                            </div>
                        </div>

                        <h5 className="mt-16 font-bold text-[20px] text-center">Saturday, October 28th | 10am - 6pm <br />
                            The Condo - No. 1, Kofo Abayomi Street, VI, Lagos.</h5>

                        <h4 className="text-yellow-400 text-3xl font-semibold text-center mt-16 mb-10">TABLE RESERVATION COSTING</h4>


                        <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-10">
                            {/* cards */}
                            <a href="https://www.klick.africa/en/store/The-KLICK-Event-Store/1521205" rel="noreferrer" target="_blank">
                                <div className="hover:bg-white hover:text-blue-400 hover:font-semibold rounded-[50px] border flex flex-col justify-between space-y-10 mx-auto p-8 items-center text-center min-h-fit md:h-[500px] w-[350px]">
                                    <h1 className="border px-4 py-2 hover:cursor-pointer  hover:border-blue-400 transition-all" >SILVER</h1>
                                    <div className="space-y-4">
                                        <p>6 x 2 table</p>
                                        <p>2 products images <br />
                                            & logo featured on social media</p>
                                    </div>
                                    <h1 className="text-yellow-400 text-2xl font-semibold">N19,000</h1>
                                </div>
                            </a>

                            <a href="https://www.klick.africa/en/store/The-KLICK-Event-Store/1521205" rel="noreferrer" target="_blank">
                                <div className="hover:bg-white hover:text-blue-400 hover:font-semibold rounded-[50px] border flex flex-col justify-between space-y-10 mx-auto p-8 items-center text-center min-h-fit md:h-[500px] w-[350px]">
                                    <h1 className="border px-4 py-2 hover:cursor-pointer hover:border-blue-400 transition-all" >PLATINUM</h1>
                                    <div className="space-y-4">
                                        <p>6 x 2 table</p>
                                        <p>2 products images <br />
                                            & logo featured on social media</p>
                                        <p>Front row placement</p>
                                        <p>30 minutes professional product photography</p>
                                        <p>1 Instagram paid advert</p>
                                    </div>
                                    <h1 className="text-yellow-400 text-2xl font-semibold">N60,000</h1>
                                </div>
                            </a>

                            <a href="https://www.klick.africa/en/store/The-KLICK-Event-Store/1521205" rel="noreferrer" target="_blank">
                                <div className="hover:bg-white hover:text-blue-400 hover:font-semibold rounded-[50px] border flex flex-col justify-between space-y-10 mx-auto p-8 items-center text-center min-h-fit md:h-[500px] w-[350px]">
                                    <h1 className="border px-4 py-2 hover:cursor-pointer hover:border-blue-400 transition-all" >GOLD</h1>
                                    <div className="space-y-4">
                                        <p>6 x 2 table</p>
                                        <p>2 products images <br />
                                            & logo featured on social media</p>
                                        <p>Premium placement</p>
                                        <p>15 minutes professional product photography</p>
                                    </div>
                                    <h1 className="text-yellow-400 text-2xl font-semibold">N39,000</h1>
                                </div>
                            </a>
                        </div>

                        <h5 className="font-bold text-[20px] text-center">To be a seller, klick <a href="https://www.klick.africa/en/store/The-KLICK-Event-Store/1521205" className="text-yellow-400 hover:underline hover:underline-offset-4 hover:text-yellow-300">here</a> to purchase a table</h5>

                        <h5 className="font-semibold text-[20px] text-center">For further information, contact details below</h5>
                    </div>
                </div>

                <footer className="bg-[#ffff00] w-[100%]">
                    <div className="flex mx-auto items-center h-20 justify-between space-x-4 px-4 font-bold text-black">

                        <div className="flex items-center space-x-4">
                            <a href="https://www.facebook.com/klickafricaa" rel="noreferrer" target="_blank"><Icons.facebook className="w-6 h-6 hover:cursor-pointer hover:scale-110" /></a>
                            <a href="https://twitter.com/klick_africa" rel="noreferrer" target="_blank"><Icons.twitter className="w-6 h-6 hover:cursor-pointer hover:scale-110" /></a>
                            <a href="https://www.instagram.com/klickafrica/" rel="noreferrer" target="_blank"><Icons.instagram className="w-6 h-6 hover:cursor-pointer hover:scale-110" /></a>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            <div className="flex items-center" onClick={goToWhatsApp}>
                                <a href="" rel="noreferrer" target="_blank"><Icons.phone className="w-6 h-6 mr-2 hover:cursor-pointer hover:scale-110" /></a>
                                <h1 className="text-xl hover:cursor-pointer hover:scale-110">07010876015</h1>
                            </div>
                            <div className="flex items-center">
                                <a href="" rel="noreferrer" target="_blank"><Icons.mail className="w-6 h-6 mr-2 hover:cursor-pointer hover:scale-105" /></a>
                                <h1 className="text-xl hover:cursor-pointer hover:scale-110">info@klick.africa</h1>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}