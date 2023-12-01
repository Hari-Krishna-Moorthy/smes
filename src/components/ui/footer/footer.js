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
                            Product
                        </h6>
                        <p className="mb-4">
                            <a href="/products/JP" className="text-neutral-200 text-sm"
                            >Japanese Spare Parts</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="/products/DE" className="text-neutral-200 text-sm"
                            >European Spare Parts</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="/products/KR" className="text-neutral-200 text-sm"
                            >Korean Spare Parts</a
                            >
                        </p>
                        <p>
                            <a href="/products/CN" className="text-neutral-200 text-sm"
                            >Chinese Spare Parts</a
                            >
                        </p>
                    </div>

                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Services
                        </h6>
                        <p className="mb-4">
                            <a href="/services/1" className="text-neutral-200 text-sm"
                            >Ship Repair and Services</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="/services/2" className="text-neutral-200 text-sm"
                            >Refrigeration and Heating</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="/services/3" className="text-neutral-200 text-sm"
                            >Ship Store And Equipment</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="/services/4" className="text-neutral-200 text-sm"
                            >Crew Supply</a
                            >
                        </p>
                        <p className="mb-4">
                            <a href="/services/5" className="text-neutral-200 text-sm"
                            >IT Support</a
                            >
                        </p>
                    </div>

                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Policies
                        </h6>
                        <p className="mb-4">
                            <a href="/terms" className="text-neutral-200 text-sm"
                            >Privacy Policy</a
                            >
                        </p>
                        <p className="">
                            <a href="/terms" className="text-neutral-200 text-sm"
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

                        <ul className="list-none text-sm mb-7">
                            <li>Singapore Marine Engineering And Spares Pte Ltd</li>
                            <li>No. 10, Penjuru Road,</li>
                            <li>Singapore - 609124</li>
                        </ul>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Reach Us
                        </h6>
                        <p className=" text-sm flex py-1 items-center justify-center md:justify-start">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
                            </svg>
                            <span> +65 62808404 </span>
                        </p>
                        <p className=" text-sm flex py-1 items-center justify-center md:justify-start">
                            <svg fill="#FFFFFF" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 279.525 279.525">
                                <g>
                                    <path d="M165.066,1.544c-29.272,0-56.007,11.05-76.268,29.191c4.494,7.146,7.047,15.46,7.287,24.042l0.001,0.025l0.001,0.025
		                          c0.102,3.867,0.333,7.735,0.664,11.597c15.368-21.117,40.258-34.88,68.315-34.88c46.571,0,84.459,37.888,84.459,84.459
		                          c0,46.08-37.098,83.634-82.994,84.422c4.191,3.502,8.518,6.84,12.976,9.974l0.02,0.015l0.021,0.014
		                          c6.07,4.282,11.014,9.896,14.483,16.317c49.133-12.861,85.493-57.633,85.493-110.742C279.525,52.89,228.18,1.544,165.066,1.544z"/>
                                    <path d="M162.256,234.942c-13.076-10.438-21.234-17.389-32.909-28.204c-3.435-3.182-7.633-5.164-11.944-5.164
		                         c-3.299,0-6.557,1.051-9.239,3.252c-2.768,2.33-5.536,4.66-8.305,6.989c-22.499-26.738-39.206-57.895-49.027-91.431
		                         c3.472-1.016,6.945-2.033,10.417-3.049c7.652-2.343,11.252-10.512,10.129-18.701c-2.443-17.824-3.77-26.679-5.282-43.018
		                         c-0.775-8.375-6.349-15.65-14.338-16.085c-1.246-0.121-2.491-0.181-3.726-0.181c-29.71,0-55.578,34.436-46.009,76.564
		                         c11.907,52.172,37.684,100.243,74.551,139.031c15.102,15.856,33.603,23.036,50.312,23.036c17.627,0,33.261-7.984,40.833-22.195
		                         C171.778,248.891,168.83,240.19,162.256,234.942z"/>
                                    <path d="M130.645,118.121c-7.912,7.341-13.089,13.113-15.823,17.643c-1.93,3.195-3.338,6.573-4.187,10.04
		                         c-0.399,1.632-0.032,3.326,1.007,4.649c1.038,1.321,2.596,2.079,4.276,2.079h37.758c4.626,0,8.39-3.764,8.39-8.39
		                         c0-4.626-3.764-8.39-8.39-8.39h-17.051c0.139-0.164,0.282-0.328,0.428-0.493c1.114-1.254,3.842-3.874,8.107-7.785
		                          c4.473-4.105,7.493-7.179,9.232-9.398c2.621-3.336,4.571-6.593,5.794-9.679c1.247-3.145,1.88-6.498,1.88-9.967
		                        c0-6.224-2.254-11.507-6.699-15.705c-4.416-4.164-10.495-6.274-18.071-6.274c-6.884,0-12.731,1.802-17.377,5.356
		                          c-2.803,2.146-4.961,5.119-6.415,8.839c-0.982,2.513-0.728,5.388,0.68,7.689c1.408,2.302,3.852,3.837,6.537,4.105
		                         c0.299,0.03,0.597,0.045,0.891,0.045c3.779,0,7.149-2.403,8.387-5.979c0.388-1.121,0.901-2.012,1.527-2.65
		                         c1.318-1.343,3.093-1.997,5.428-1.997c2.373,0,4.146,0.618,5.418,1.889c1.269,1.269,1.886,3.12,1.886,5.66
	                             c0,2.359-0.843,4.819-2.505,7.314C140.862,108.028,138.199,111.083,130.645,118.121z"/>
                                    <path d="M206.235,76.451h-6.307c-1.797,0-3.475,0.886-4.489,2.37l-29.168,42.698c-0.851,1.246-1.301,2.703-1.301,4.212v6.919
		                        c0,2.997,2.439,5.436,5.436,5.436h23.945v5.787c0,4.775,3.885,8.66,8.66,8.66c4.775,0,8.66-3.885,8.66-8.66v-5.787h0.865
		                        c4.437,0,8.047-3.61,8.047-8.047c0-4.437-3.61-8.047-8.047-8.047h-0.865V81.887C211.671,78.89,209.232,76.451,206.235,76.451z
		                        M194.352,121.992h-10.748l10.748-15.978V121.992z"/>
                                </g>
                            </svg>
                            <span>   +65 82986792 </span>
                        </p>

                        <p className=" text-sm flex py-1 items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <span> sales@smesgroup.com.sg </span>
                        </p>
                        <p className=" text-sm flex py-1 items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            <span> singaporemarine@gmail.com </span>
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
            <div className="text-sm p-6 border-t-2 border-grey-1">
                <div className="flex justify-between items-center flex-col sm:flex-row">
                    <span className="text-left sm:order-1">
                        Created by <a className="text-cyan-600 text-bold" target="_blank" href="https://www.innovationgeeks.in"> INNOVATION GEEKS </a> © | All Rights Reserved
                    </span>
                    <span className="flex space-x-4 sm:order-2">
                        <Socials name="instagram" link="https://github.com/INNOVATION-GEEKS-IN" />
                        <Socials name="linkedin" link="https://www.linkedin.com/company/innovation-geeks-private-ltd" />
                        <Socials name="github" link="https://github.com/INNOVATION-GEEKS-IN" />
                    </span>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
