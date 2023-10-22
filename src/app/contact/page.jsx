"use client"

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import "./contact.css"
import Navbar from "@/components/ui/navbar/navbar1";
import L from 'leaflet';


const Contact = () => {

    const markerIcon = (color) => {
        return L.divIcon({
            html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill=${color} height="24" width="24" version="1.1" id="Capa_1" viewBox="0 0 48.127 48.127" xml:space="preserve">
            <g>
                <g>
                    <path style="fill:#010002;" d="M24.063,0C13.854,0,5.547,8.306,5.547,18.516c0,9.649,15.368,26.264,17.12,28.127l1.396,1.484    l1.395-1.484C27.21,44.78,42.58,28.164,42.58,18.516C42.578,8.306,34.272,0,24.063,0z M24.063,42.494    C18.955,36.783,9.378,24.782,9.378,18.515c0-8.097,6.587-14.685,14.685-14.685c8.097,0,14.685,6.588,14.685,14.685    C38.747,24.776,29.17,36.78,24.063,42.494z"/>
                    <path style="fill:#010002;" d="M24.063,10.854c-4.225,0-7.662,3.437-7.662,7.662s3.437,7.662,7.662,7.662s7.662-3.437,7.662-7.662    C31.724,14.291,28.287,10.854,24.063,10.854z"/>
                </g>
            </g>
            </svg>`,
        });
    };

    let CENTRAL_LOCATION = [32.4652518,28.8260857];
    const locations = [
        {
            lat: 1.316,
            lon: 103.698,
            icon: markerIcon("#ff0000"),
            name: "Singapore",
            address: {
                address: {
                    "office_name": "Singapore Office",
                    "line1": "Unit no.#07-05,",
                    "line2": "Eco-tech@SunviewNo.1,Sunview Road,",
                    "line3": "Singapore - 627615",
                },
                phone: [
                    "+65 62808404",
                ],
                fax: [
                    "+65 62808834"
                ],
                mails: [
                    "sales@smesgroup.com.sg",
                    "singaporemarine@gmail.com"
                ],
                gmap:"http://www.google.com/maps/dir//1.316, 103.698"
            }
        },
        {
            lat: 6.872,
            lon: 80.0003,
            icon: markerIcon("#00ff00"),
            name: "Sri Lanka",
            address: {
                address: {
                    "office_name": "Srilanka Office",
                    "line1": "No.17 Annasi Wattha Road,",
                    "line2": "Athurugiriya,",
                    "line3": "Srilanka",
                },
                phone: [
                    "0094 115299588",
                ],
                fax: [
                    "-"
                ],
                mails: [
                    "srilanka@smesworldwide.com",
                ],
                gmap:"http://www.google.com/maps/dir//6.872,80.0003"
            }
        },
        {
            lat: 13.0131785,
            lon: 77.6188653,
            icon: markerIcon("#0000ff"),
            name: "India",
            address: {
                address: {
                    "office_name": "Indian Office",
                    "line1": "No.24 8th Main Street,",
                    "line2": "Pilana Garden 3rd Street,",
                    "line3": "Bengalore - 560045",
                },
                phone: [
                    "+91 8197842585",
                ],
                fax: [
                    "-"
                ],
                mails: [
                    "india@smesworldwide.com",
                ],
                gmap:"http://www.google.com/maps/dir//13.0131785,77.6188653"

            }
        },
        {
            lat: 25.2048493,
            lon: 55.2707828,
            icon: markerIcon("#0000ff"),
            name: "Uniten Arab Emirates",
            address: {
                address: {
                    "office_name": "Uniten Arab Emirates Office",
                    "line1": "New Arbash Building,",
                    "line2": "Al Qasmiya Sharjah,",
                    "line3": "Uniten Arab Emirates",
                },
                phone: [
                    "+971 56 604 8287",
                ],
                fax: [
                    "-"
                ],
                mails: [
                    "uae@smesworldwide.com",
                ],
                gmap:"http://www.google.com/maps/dir//25.2048493,55.2707828"

            }
        },
        {
            lat: 35.8557741,
            lon: 140.4071997,
            icon: markerIcon("#00ff00"),
            name: "Japan",
            address: {
                address: {
                    "office_name": "Japan Office",
                    "line1": "Tokayama 391-213,",
                    "line2": "Chiba Ken, Narita shi,",
                    "line3": "Japan 2870233",
                },
                phone: [
                    "+81 476 857 483",
                ],
                fax: [
                    "-"
                ],
                mails: [
                    "uae@smesworldwide.com",
                ],
                gmap:"http://www.google.com/maps/dir//35.8557741,140.4071997"
            }
        },
        {
            lat: 30.308554599999997,
            lon: -81.5274832,
            icon: markerIcon("#ff0000"),
            name: "USA",
            address: {
                address: {
                    "office_name": "USA Office",
                    "line1": "2304 St John Bluff Road South,",
                    "line2": "#4206 Jacksonville,",
                    "line3": "Florida 32246, USA",
                },
                phone: [
                    "+1 904 304 9194",
                ],
                fax: [
                    "-"
                ],
                mails: [
                    "usa@smesworldwide.com",
                ],
                gmap:"http://www.google.com/maps/dir//30.308554599999997,-81.5274832"
            }
        },
    ];
    const zoomLevel = 2;

    const [SidebarContent, SetSidebarContent] = useState(locations[0]);
    const updateSidebarContent = index => {
        SetSidebarContent(locations[index]);
    }

    return (
        <>
            <Navbar />

            <div className="p-2 m-4">
                <div className="text-3xl text-center font-bold"><h1>Contact Us</h1></div>
            </div>

            <div id="map" className="mx-10 flex flex-col md:flex-row">
            <div className="w-full md:w-4/6" style={{ maxWidth: "100%", maxHeight: "675px" }}>
                    <MapContainer zoom={zoomLevel} center={CENTRAL_LOCATION}  className="grayscale-map">
                        <TileLayer
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        {
                            locations.map((location, index) => (
                                <Marker key={index} position={[location?.lat, location?.lon]}
                                    // icon={location?.icon}
                                    eventHandlers={{
                                        click: () => updateSidebarContent(index)
                                    }}>
                                    <Tooltip permanent={false}>
                                        {location?.name}
                                    </Tooltip>
                                </Marker>
                            ))}
                    </MapContainer>
                </div>
                <div className="w-full md:w-2/6 text-black" style={{ backgroundColor: "#DEE6FB", minHeight:"675px" }}>
                    {/* Office Name with google map link */}

                    <div className="m-4 grid grid-cols-4 gap-4" style={{ backgroundColor: "#DEE6FB" }}>
                        <div className="col-span-3">
                            <p className="text-center text-xl font-bold"> {SidebarContent?.address?.address?.office_name}</p>
                        </div>
                        <div>
                            <a target="_blank" href={SidebarContent?.address?.gmap}>
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9983 16.6667C14.5563 16.6667 14.1324 16.8423 13.8198 17.1549C13.5073 17.4674 13.3317 17.8914 13.3317 18.3334V25.0001H16.665V20.0001H21.665V24.1667L27.4983 18.3334L21.665 12.5001V16.6667H14.9983ZM21.1767 2.32172L37.6767 18.8217C37.9891 19.1343 38.1647 19.5581 38.1647 20.0001C38.1647 20.442 37.9891 20.8658 37.6767 21.1784L21.1767 37.6784C20.8641 37.9908 20.4403 38.1664 19.9983 38.1664C19.5564 38.1664 19.1326 37.9908 18.82 37.6784L2.32001 21.1784C2.00756 20.8658 1.83203 20.442 1.83203 20.0001C1.83203 19.5581 2.00756 19.1343 2.32001 18.8217L18.82 2.32172C19.1326 2.00927 19.5564 1.83374 19.9983 1.83374C20.4403 1.83374 20.8641 2.00927 21.1767 2.32172Z" fill="#1C204F" />
                            </svg>
                            </a>
                        </div>
                    </div>

                    {/* Office Address */}
                    <div className="m-8 px-8 grid grid-row-4 " >
                        <div >
                            <p className="text-lg font-semibold"> Address: </p>
                        </div>
                        <div>
                            <p> {SidebarContent?.address?.address?.line1} </p>
                        </div>
                        <div>
                            <p> {SidebarContent?.address?.address?.line2} </p>
                        </div>
                        <div>
                            <p> {SidebarContent?.address?.address?.line3} </p>
                        </div>
                    </div>

                    {/* Office Phone */}
                    <div className="m-8 px-8 grid grid-row-4 " >
                        <div >
                            <p className="text-lg font-semibold"> Phone: </p>
                        </div>
                        {SidebarContent?.address?.phone.map((phone_number, index) =>
                            <div key={index}>
                                <p>{phone_number}</p>
                            </div>
                        )}
                    </div>

                    {/* Office Fax */}
                    <div className="m-8 px-8 grid grid-row-4 " >
                        <div >
                            <p className="text-lg font-semibold"> Fax: </p>
                        </div>
                        {SidebarContent?.address?.fax.map((fax_number, index) =>
                            <div key={index}>
                                <p>{fax_number}</p>
                            </div>
                        )}
                    </div>


                    {/* Office Mail */}
                    <div className="m-8 px-8 grid grid-row-4 " >
                        <div >
                            <p className="text-lg font-semibold"> Mail: </p>
                        </div>
                        {SidebarContent?.address?.mails.map((mail_id, index) =>
                            <div key={index}>
                                <p>{mail_id}</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <footer>Add footer here.......</footer>
        </>


    );
}

export default Contact;
