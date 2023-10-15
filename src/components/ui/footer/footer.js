import Logo from "../logo/logo";
import Socials from "../utils/socials";

const Footer = () => {
    return (

        <footer
            style={{
                backgroundColor: "#1C204F"
            }}
            className="flex flex-col text-white w-full">

            <div
                className="flex  border-b-2 border-grey-1 p-6 lg:justify-between">
                <div className="items-start ">

                    <div className="pt-6">
                        <Logo color='white' />
                    </div>
                    <div className="pb-6 pt-2">
                        <p>
                            Singapore Marine Engineering & Spares PTE LTD © | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>

            <div className=" mx-6 py-10 text-center md:text-left ">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5  ">
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Services
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Ship Repair and Services</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Refrigeration and Heating</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Ship Store And Equipment</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Crew Supply</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >IT Support</a
                            >
                        </p>
                    </div>
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Product
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Japanese Spare Parts</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >European Spare Parts</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Korean Spare Parts</a
                            >
                        </p>
                        <p>
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Chinese Spare Parts</a
                            >
                        </p>
                    </div>
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Policies
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Privacy Policy</a
                            >
                        </p>
                        <p className="">
                            <a href="#!" className="text-neutral-200 text-sm"
                            >Terms of Use</a
                            >
                        </p>
                    </div>
                    {/* border-b-2 border-grey-1 p-6 lg:justify-between */}
                    <div className="lg:border-l-2 border-grey-1 lg:px-8 lg:col-span-2">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Global Office Address
                        </h6>

                        <ul className="list-none text-sm mb-4">
                            <li>Unit no.#07-05, </li>
                            <li>Eco-tech@SunviewNo.1,Sunview Road,</li>
                            <li>Singapore - 627615</li>
                        </ul>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Reach Us
                        </h6>
                        <p className="text-sm flex items-center justify-center md:justify-start">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
                            </svg>
                            <span> +65 62808404 </span>
                            
                            <span className="p-4" ></span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <span> singaporemarine@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center border-t-2 border-grey-1 p-8 m-4">
                <div className="grid lg:grid-cols-2">
                    <div>
                        <Socials name="facebook" link="https://www.facebook.com/" />
                        <Socials name="twitter" link="https://www.twitter.com/" />
                        <Socials name="google" link="https://www.google.com/" />
                        <Socials name="instagram" link="https://www.instagram.com/" />
                        <Socials name="linkedin" link="https://www.linkedin.com/" />
                        <Socials name="github" link="https://www.github.com/" />
                    </div>
                    <div>
                        <span>Singapore Marine Engineering & Spares PTE LTD © | All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
