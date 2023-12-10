"use client";
import React, { useState } from "react";
import "./contact.css";
import Navbar from "../../components/ui/navbar/navbar1";
import Footer from "../../components/ui/footer/footer";

import dynamic from "next/dynamic";
import Image from "next/image";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


const MapContainer = dynamic(
    () => import("react-leaflet").then((module) => module.MapContainer),
    {
        ssr: false,
    }
);

const TileLayer = dynamic(
    () => import("react-leaflet").then((module) => module.TileLayer),
    {
        ssr: false,
    }
);

const Marker = dynamic(
    () => import("react-leaflet").then((module) => module.Marker),
    {
        ssr: false,
    }
);

const Tooltip = dynamic(
    () => import("react-leaflet").then((module) => module.Tooltip),
    {
        ssr: false,
    }
);

const Contact = () => {
    const [displayText, setDisplayText] = useState("sales@smesgroup.com.sg");
    let CENTRAL_LOCATION = [32.4652518, 28.8260857];
    const locations = [
        {
            lat: 1.316,
            lon: 103.698,
            name: "Singapore",
            address: {
                address: {
                    office_name: "Singapore Office",
                    lines: ["No. 10,", "Penjuru Road,", "Singapore - 609124."],
                },
                phone: [
                    <p key={1}>+65 62808404</p>,
                    <p key={2}>
                        <b>24/7:</b> +65 82986792
                    </p>,
                ],
                fax: ["+65 62808834"],
                mails: [

                    <a
                        onMouseEnter={() => setDisplayText('Copy to click')}
                        onMouseLeave={() => setDisplayText("sales@smesgroup.com.sg")}
                        style={{ cursor: 'pointer' }}
                        key={1}
                        onClick={() => {
                            navigator.clipboard.writeText("sales@smesgroup.com.sg").then(() => {
                                setTimeout(() => {
                                    console.log("done", displayText)
                                }, 2000);
                                console.log("Success", displayText)
                                toast("Email copied!", {
                                    position: "bottom-left",
                                    autoClose: 3000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: false,
                                    progress: undefined,
                                    className: 'custom-toast-class' // for custom styling with Tailwind
                                });

                            }, () => {
                                console.log("Failed")
                            })
                        }

                        } src='mailto:sales@smesgroup.com.sg'>
                        {displayText}
                    </a>,
                    <p key={2}> singaporemarine@gmail.com </p>
                ],
                gmap: "http://www.google.com/maps/dir//1.316, 103.698",
                icon: "/singapore.svg",
            },
        },
        {
            lat: 6.872,
            lon: 80.0003,
            name: "Sri Lanka",
            address: {
                address: {
                    office_name: "Srilanka Office",
                    lines: ["No.17,", "Annasi Wattha Road,", "Athurugiriya,", "Srilanka"],
                },
                phone: ["0094 115299588"],
                fax: ["-"],
                mails: ["srilanka@smesworldwide.com"],
                gmap: "http://www.google.com/maps/dir//6.872,80.0003",
                icon: "/sri.svg",
            },
        },
        {
            lat: 13.0131785,
            lon: 77.6188653,
            name: "India",
            address: {
                address: {
                    office_name: "Indian Office",
                    lines: [
                        "No.24,",
                        "8th Main Street,",
                        "Pilana Garden 3rd Street,",
                        "Bengalore - 560045",
                    ],
                },
                phone: ["+91 8197842585"],
                fax: ["-"],
                mails: ["india@smesworldwide.com"],
                gmap: "http://www.google.com/maps/dir//13.0131785,77.6188653",
                icon: "/india.svg",
            },
        },
        {
            lat: 25.2048493,
            lon: 55.2707828,
            name: "United Arab Emirates",
            address: {
                address: {
                    office_name: "United Arab Emirates Office",
                    lines: [
                        "New Arbash Building,",
                        "Al Qasmiya Sharjah,",
                        "Uniten Arab Emirates",
                    ],
                },
                phone: ["+971 56 604 8287"],
                fax: ["-"],
                mails: ["uae@smesworldwide.com"],
                gmap: "http://www.google.com/maps/dir//25.2048493,55.2707828",
                icon: "/uae.svg",
            },
        },
        {
            lat: 35.8557741,
            lon: 140.4071997,
            name: "Japan",
            address: {
                address: {
                    office_name: "Japan Office",
                    lines: [
                        "Tokayama 391-213,",
                        "Chiba Ken,",
                        "Narita shi,",
                        "Japan 2870233",
                    ],
                },
                phone: ["+81 476 857 483"],
                fax: ["-"],
                mails: ["japan@smesworldwide.com"],
                gmap: "http://www.google.com/maps/dir//35.8557741,140.4071997",
                icon: "/japan2.svg",
            },
        },
        {
            lat: 30.308554599999997,
            lon: -81.5274832,
            name: "USA",
            address: {
                address: {
                    office_name: "USA Office",
                    lines: [
                        "2304,",
                        "St John Bluff Road South,",
                        "#4206 Jacksonville,",
                        "Florida 32246, USA",
                    ],
                },
                phone: ["+1 904 304 9194"],
                fax: ["-"],
                mails: ["usa@smesworldwide.com"],
                gmap: "http://www.google.com/maps/dir//30.308554599999997,-81.5274832",
                icon: "/usa.svg",
            },
        },
    ];
    const zoomLevel = 2;

    const [SidebarContent, SetSidebarContent] = useState(locations[0]);
    const updateSidebarContent = (index) => {
        SetSidebarContent(locations[index]);
    };

    return (
        <div>
            <ToastContainer />

            <div className="h-20">
                <Navbar activePage={"Contact Us"} />
            </div>
            <div className="p-2 m-4">
                <div className="text-3xl text-center font-bold">
                    <h1>Contact Us</h1>
                </div>
            </div>

            <div id="map" className="mx-10 flex flex-col md:flex-row">
                <div
                    className="w-full md:w-4/6"
                    style={{ maxWidth: "100%", maxHeight: "575px" }}
                >
                    <MapContainer
                        zoom={zoomLevel}
                        center={CENTRAL_LOCATION}
                        className="grayscale-map"
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {locations.map((location, index) => (
                            <Marker
                                key={index}
                                position={[location?.lat, location?.lon]}
                                // icon={location?.icon}
                                eventHandlers={{
                                    click: () => updateSidebarContent(index),
                                }}
                            >
                                <Tooltip permanent={false}>{location?.name}</Tooltip>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
                <div
                    className="w-full md:w-2/6 text-black "
                    style={{ backgroundColor: "#DEE6FB", maxHeight: "575px" }}
                >
                    {/* Office Name with google map link */}

                    <div
                        className="m-4 grid grid-cols-4 gap-4"
                        style={{ backgroundColor: "#DEE6FB" }}
                    >
                        <div className="col-span-3">
                            <p className="text-center text-3xl font-bold">
                                {" "}
                                {SidebarContent?.address?.address?.office_name}
                            </p>
                        </div>
                        <div>
                            <a target="_blank" href={SidebarContent?.address?.gmap}>
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.9983 16.6667C14.5563 16.6667 14.1324 16.8423 13.8198 17.1549C13.5073 17.4674 13.3317 17.8914 13.3317 18.3334V25.0001H16.665V20.0001H21.665V24.1667L27.4983 18.3334L21.665 12.5001V16.6667H14.9983ZM21.1767 2.32172L37.6767 18.8217C37.9891 19.1343 38.1647 19.5581 38.1647 20.0001C38.1647 20.442 37.9891 20.8658 37.6767 21.1784L21.1767 37.6784C20.8641 37.9908 20.4403 38.1664 19.9983 38.1664C19.5564 38.1664 19.1326 37.9908 18.82 37.6784L2.32001 21.1784C2.00756 20.8658 1.83203 20.442 1.83203 20.0001C1.83203 19.5581 2.00756 19.1343 2.32001 18.8217L18.82 2.32172C19.1326 2.00927 19.5564 1.83374 19.9983 1.83374C20.4403 1.83374 20.8641 2.00927 21.1767 2.32172Z"
                                        fill="#1C204F"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Office Address */}
                    <div
                        className="my-8 mx-4 px-4 grid grid-cols-2"
                        style={{ backgroundColor: "#DEE6FB" }}
                    >
                        {/* Address Column */}
                        <div>
                            <p className="text-xl font-semibold">Address:</p>
                            {SidebarContent?.address?.address?.lines.map((item, index) => (
                                <p className="text-mx" key={index}>
                                    {item}
                                </p>
                            ))}
                        </div>

                        {/* Flag Image Column */}
                        <div className="flex justify-end items-center">
                            <Image
                                src={SidebarContent?.address?.icon}
                                width={175}
                                height={175}
                            />
                        </div>
                    </div>

                    {/* Office Phone */}
                    <div className="my-8 mx-4 px-4 grid grid-row-4 ">
                        <div>
                            <p className="text-xl font-semibold"> Phone: </p>
                        </div>
                        {SidebarContent?.address?.phone.map((phone_number, index) => (
                            <div key={index}>
                                <p className="text-md">{phone_number}</p>
                            </div>
                        ))}
                    </div>

                    {/* <div className="my-8 mx-4 px-4 grid grid-row-4 " >
                        <div >
                            <p className="text-xl font-semibold"> Fax: </p>
                        </div>
                        {SidebarContent?.address?.fax.map((fax, index) =>
                            <div key={index}>
                                <p className="text-md">{fax}</p>
                            </div>
                        )}
                    </div> */}

                    {/* Office Mail */}
                    <div className="my-8 mx-4 px-4  grid grid-row-4 ">
                        <div>
                            <p className="text-xl font-semibold"> Mail: </p>
                        </div>
                        {SidebarContent?.address?.mails.map((mail_id, index) => (
                            <div key={index}>
                                <span className="text-md">{mail_id}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-8"></div>
            <Footer />
        </div>
    );
};

export default Contact;
