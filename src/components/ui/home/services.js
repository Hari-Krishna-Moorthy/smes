"use client"

const Services = () => {

    const services = [
        {
            name: "Ships Repair and Services",
            link: "",
            icon: <svg width="95" height="95" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="59" cy="58.5" r="58.5" fill="#F1F5FF" />
                <path d="M32.833 82C34.433 83.3333 36.033 84.6666 39.4997 84.6666C46.1663 84.6666 46.1663 79.3333 52.833 79.3333C56.2997 79.3333 57.8997 80.6666 59.4997 82C61.0997 83.3333 62.6997 84.6666 66.1663 84.6666C72.833 84.6666 72.833 79.3333 79.4997 79.3333C82.9663 79.3333 84.5663 80.6666 86.1663 82" stroke="#4971E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M79.18 79.3334C82.0485 74.4922 83.5421 68.9603 83.5 63.3334L59.5 52.6667L35.5 63.3334C35.5 71.0667 38.0067 77.5734 42.9933 84.0267" stroke="#4971E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M78.1663 60.6666V44.6666C78.1663 43.2522 77.6044 41.8956 76.6042 40.8954C75.604 39.8952 74.2475 39.3333 72.833 39.3333H46.1663C44.7519 39.3333 43.3953 39.8952 42.3951 40.8954C41.3949 41.8956 40.833 43.2522 40.833 44.6666V60.6666" stroke="#4971E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M59.5 52.6667V63.3334" stroke="#4971E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M59.5 31.3333V39.3333" stroke="#4971E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },

        {
            name: "Refrigeration and Heating",
            link: "",
            icon: <svg width="95" height="95" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="59" cy="58.5" r="58.5" fill="#F1F5FF" />
                <path d="M83 36.6V81.4C83 81.8243 82.8314 82.2313 82.5314 82.5314C82.2313 82.8314 81.8243 83 81.4 83H36.6C36.1757 83 35.7687 82.8314 35.4686 82.5314C35.1686 82.2313 35 81.8243 35 81.4V36.6C35 36.1757 35.1686 35.7687 35.4686 35.4686C35.7687 35.1686 36.1757 35 36.6 35H81.4C81.8243 35 82.2313 35.1686 82.5314 35.4686C82.8314 35.7687 83 36.1757 83 36.6Z" stroke="#6082EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M48.3331 43C48.3331 43 41.6664 51 48.3331 59C54.9997 67 48.3331 75 48.3331 75M58.9997 43C58.9997 43 52.3331 51 58.9997 59C65.6664 67 58.9997 75 58.9997 75M69.6664 43C69.6664 43 62.9997 51 69.6664 59C76.3331 67 69.6664 75 69.6664 75" stroke="#6082EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        },
        {
            name: "Ship Store and Equipment",
            link: "",
            icon: <svg width="95" height="95" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="59" cy="58.5" r="58.5" fill="#F1F5FF" />
                <path d="M59 85.6666C56.2889 85.6666 53.5111 85.1778 50.6667 84.2C47.8222 83.2222 45.2444 81.8889 42.9333 80.2C40.6222 78.5111 38.7218 76.5333 37.232 74.2666C35.7422 72 34.9982 69.5778 35 67V59L45.6667 67L41.5333 71.1333C42.8222 73.4 44.8667 75.3555 47.6667 77C50.4667 78.6444 53.3556 79.6889 56.3333 80.1333V56.3333H48.3333V51H56.3333V47.8666C54.7778 47.2889 53.4996 46.3218 52.4987 44.9653C51.4978 43.6089 50.9982 42.0649 51 40.3333C51 38.1111 51.7778 36.2222 53.3333 34.6666C54.8889 33.1111 56.7778 32.3333 59 32.3333C61.2222 32.3333 63.1111 33.1111 64.6667 34.6666C66.2222 36.2222 67 38.1111 67 40.3333C67 42.0666 66.4996 43.6115 65.4987 44.968C64.4978 46.3244 63.2204 47.2898 61.6667 47.864V51H69.6667V56.3333H61.6667V80.1333C64.6444 79.6889 67.5333 78.6444 70.3333 77C73.1333 75.3555 75.1778 73.4 76.4667 71.1333L72.3333 67L83 59V67C83 69.5778 82.2551 72 80.7653 74.2666C79.2756 76.5333 77.376 78.5111 75.0667 80.2C72.7556 81.8889 70.1778 83.2222 67.3333 84.2C64.4889 85.1778 61.7111 85.6666 59 85.6666ZM59 43C59.7556 43 60.3893 42.744 60.9013 42.232C61.4133 41.72 61.6684 41.0871 61.6667 40.3333C61.6667 39.5778 61.4107 38.944 60.8987 38.432C60.3867 37.92 59.7538 37.6649 59 37.6666C58.2444 37.6666 57.6107 37.9226 57.0987 38.4346C56.5867 38.9466 56.3316 39.5795 56.3333 40.3333C56.3333 41.0889 56.5893 41.7226 57.1013 42.2346C57.6133 42.7466 58.2462 43.0018 59 43Z" fill="#4971E8" />
            </svg>
        },
        {
            name: "Crew Supply",
            link: "",
            icon: <svg width="95" height="95" className="mx-12" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="58.5" r="58.5" fill="#F1F5FF"/>
            <path d="M42.4375 45.25C42.4375 43.2443 43.2343 41.3207 44.6525 39.9025C46.0707 38.4843 47.9943 37.6875 50 37.6875C52.0057 37.6875 53.9293 38.4843 55.3475 39.9025C56.7657 41.3207 57.5625 43.2443 57.5625 45.25C57.5625 47.2557 56.7657 49.1793 55.3475 50.5975C53.9293 52.0157 52.0057 52.8125 50 52.8125C47.9943 52.8125 46.0707 52.0157 44.6525 50.5975C43.2343 49.1793 42.4375 47.2557 42.4375 45.25ZM50 34.25C47.0826 34.25 44.2847 35.4089 42.2218 37.4718C40.1589 39.5347 39 42.3326 39 45.25C39 48.1674 40.1589 50.9653 42.2218 53.0282C44.2847 55.0911 47.0826 56.25 50 56.25C52.9174 56.25 55.7153 55.0911 57.7782 53.0282C59.8411 50.9653 61 48.1674 61 45.25C61 42.3326 59.8411 39.5347 57.7782 37.4718C55.7153 35.4089 52.9174 34.25 50 34.25ZM69.9375 48C69.9375 46.7236 70.4445 45.4996 71.347 44.597C72.2496 43.6945 73.4736 43.1875 74.75 43.1875C76.0264 43.1875 77.2504 43.6945 78.1529 44.597C79.0555 45.4996 79.5625 46.7236 79.5625 48C79.5625 49.2764 79.0555 50.5004 78.1529 51.403C77.2504 52.3055 76.0264 52.8125 74.75 52.8125C73.4736 52.8125 72.2496 52.3055 71.347 51.403C70.4445 50.5004 69.9375 49.2764 69.9375 48ZM74.75 39.75C72.562 39.75 70.4635 40.6192 68.9164 42.1664C67.3692 43.7135 66.5 45.812 66.5 48C66.5 50.188 67.3692 52.2865 68.9164 53.8336C70.4635 55.3808 72.562 56.25 74.75 56.25C76.938 56.25 79.0365 55.3808 80.5836 53.8336C82.1308 52.2865 83 50.188 83 48C83 45.812 82.1308 43.7135 80.5836 42.1664C79.0365 40.6192 76.938 39.75 74.75 39.75ZM37.2812 60.375C35.9137 60.375 34.6022 60.9182 33.6352 61.8852C32.6682 62.8522 32.125 64.1637 32.125 65.5312V67.3229L32.1305 67.4562C32.136 67.5662 32.147 67.712 32.1662 67.8935C32.2061 68.2538 32.2817 68.7487 32.4302 69.3372C32.8243 70.8873 33.5257 72.3424 34.4928 73.6163C36.9086 76.8008 41.5108 79.625 50 79.625C53.5544 79.625 56.4281 79.13 58.745 78.3201C58.4702 77.1755 58.309 76.0066 58.2638 74.8304C56.27 75.6361 53.5956 76.1875 50 76.1875C42.3344 76.1875 38.8584 73.685 37.2331 71.54C36.5438 70.6335 36.0435 69.5978 35.7619 68.4944C35.6613 68.097 35.595 67.6917 35.5639 67.283L35.5625 67.239V65.5312C35.5625 64.5825 36.3325 63.8125 37.2812 63.8125H61.5225C62.3475 62.6465 63.3072 61.585 64.3811 60.65C63.8586 60.4713 63.3004 60.375 62.7188 60.375H37.2812ZM91.25 74.125C91.25 82.4781 84.4781 89.25 76.125 89.25C67.7719 89.25 61 82.4781 61 74.125C61 65.7719 67.7719 59 76.125 59C84.4781 59 91.25 65.7719 91.25 74.125ZM77.7612 65.0514C77.6611 64.6945 77.447 64.3802 77.1516 64.1563C76.8562 63.9324 76.4957 63.8112 76.125 63.8112C75.7543 63.8112 75.3938 63.9324 75.0984 64.1563C74.803 64.3802 74.5889 64.6945 74.4888 65.0514L72.847 70.3176H67.5367C65.8689 70.3176 65.1772 72.541 66.5247 73.5626L70.8216 76.8159L69.1799 82.0821C68.6656 83.7335 70.4792 85.1071 71.8281 84.0869L76.125 80.8322L80.4219 84.0869C81.7694 85.1085 83.5844 83.7335 83.0687 82.0821L81.4284 76.8159L85.7252 73.5613C87.0727 72.541 86.3811 70.3162 84.7132 70.3162H79.403L77.7612 65.0514Z" fill="#4971E8"/>
            </svg>
            

        },
        {
            name: "IT Support",
            link: "",
            icon: <svg width="95" height="95" className="mx-12" viewBox="0 0 118 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="59" cy="58.5" r="58.5" fill="#F1F5FF" />
                <g clip-path="url(#clip0_901_344)">
                    <path d="M84.6875 41.375C85.2345 41.375 85.7591 41.5923 86.1459 41.9791C86.5327 42.3659 86.75 42.8905 86.75 43.4375V74.375H37.25V43.4375C37.25 42.8905 37.4673 42.3659 37.8541 41.9791C38.2409 41.5923 38.7655 41.375 39.3125 41.375H84.6875ZM39.3125 37.25C37.6715 37.25 36.0977 37.9019 34.9373 39.0623C33.7769 40.2227 33.125 41.7965 33.125 43.4375V78.5H90.875V43.4375C90.875 41.7965 90.2231 40.2227 89.0627 39.0623C87.9023 37.9019 86.3285 37.25 84.6875 37.25H39.3125ZM29 80.5625H95C95 82.2035 94.3481 83.7773 93.1877 84.9377C92.0273 86.0981 90.4535 86.75 88.8125 86.75H35.1875C33.5465 86.75 31.9727 86.0981 30.8123 84.9377C29.6519 83.7773 29 82.2035 29 80.5625Z" fill="#4971E8" />
                </g>
                <defs>
                    <clipPath id="clip0_901_344">
                        <rect width="66" height="66" fill="white" transform="translate(28 26)" />
                    </clipPath>
                </defs>
            </svg>

        },
    ]

    return (
        <div  className="mx-10 mb-10" style={{ background: "#F2F5FD99`" }}>
            <div className="lg:px-10 py-10">
                <p className="text-3xl text-bold" style={{ color: "#1C204F" }}>
                    Our Services
                </p>
            </div>
            <div class="lg:pl-10">
                <div class="lg:w-3/5 md:w-full w-full text-left ">
                    <p class="lg:text-lg text-xl">SMES serves the Marine Industry efficiently with a skilled team and advanced technology for overhauls, repairs, and maintenance of various marine equipment. They also offer compressor re-manufacturing, ship supply, and cost-effective IT support with customized software solutions.</p>
                </div>
            </div>

            <div className="w-full">
                <div class="relative rounded-xl overflow-auto">
                    <div class="max-w mx-auto bg-white shadow-xl min-w-0 dark:bg-slate-800 dark:highlight-white/5">
                        <div class="overflow-x-auto flex">
                            {
                                services.map((service, index) => (
                                    <div key={index} class="flex-none py-6 px-3 first:pl-6 last:pr-6">
                                        <div class="flex flex-col items-center justify-center gap-3 bg-white rounded-3xl shadow-xl  px-8 py-10">
                                            <span class="bg-light-blue-200 p-2 rounded-full">
                                                {service?.icon}
                                            </span>
                                            <a class="text-lg font-bold" href={service?.link}>{service?.name}</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
