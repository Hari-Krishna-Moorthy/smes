"use client"

import Image from 'next/image'
import EquipmentImg from "../../../assets/services/Equipment.jpg";
import repairImg from "../../../assets/services/repair.jpg";
import refrigirationImg from "../../../assets/services/refrigiration.png";
import CrewImg from '../../../assets/services/crew.jpg'
import itSuppotImg from '../../../assets/services/it_support.jpg'
import productImg from '../../../assets/services/products.jpg'

const Services = () => {

    const services = [
        {
            name: "Ship Spares & Products",
            link: "/products",
            image: productImg.src,
        },
        {
            name: "Ships Repair and Services",
            link: "/services/1",
            image: repairImg.src,
        },

        {
            name: "Refrigeration and Heating",
            link: "/services/2",
            image: refrigirationImg.src,
        },
        {
            name: "Ship Store and Equipment",
            link: "/services/3",
            image: EquipmentImg.src,
        },
        {
            name: "Crew Supply",
            link: "/services/4",
            image: CrewImg.src,
        },
        {
            name: "IT Support",
            link: "/services/5",
            image: itSuppotImg.src,
        },

    ]

    return (
        <div className="mx-10 mb-10" style={{ background: "#F2F5FD99`" }}>
            <div className="lg:px-10 py-4">
                <h2 className="text-5xl text-light1  text-left font-bold dark:text-dark1 align-middle">Our Services</h2>
            </div>
            <div className="lg:pl-10 py-4 pb-5">
                <div className="lg:w-3/5 md:w-full w-full text-left mb-4">
                    <p className="lg:text-lg text-xl">SMES serves the Marine Industry efficiently with a skilled team and advanced technology for overhauls, repairs, and maintenance of various marine equipment. They also offer compressor re-manufacturing, ship supply, and cost-effective IT support with customized software solutions.</p>
                </div>
            </div>

            <div className="w-full">
                <div className="relative rounded-xl overflow-auto">
                    <div className="max-w mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
                        <div className="flex flex-wrap justify-center">
                            {services.map((service, index) => (
                                <div key={index} className="flex-none py-6 px-3 first:pl-6 last:pr-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
                                    <a className="text-md font-bold" href={service?.link}>
                                        <div className="flex flex-col items-center justify-center gap-3 p-2 bg-white dark:bg-dark rounded-3xl shadow-xl py-10">
                                            <span className="bg-light-blue-200 rounded-full">
                                                <Image src={service?.image} alt={service?.name}
                                                    height={500}
                                                    width={400}
                                                    className="w-full h-full rounded-xl" >
                                                </Image>
                                            </span>
                                            {service?.name}
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
