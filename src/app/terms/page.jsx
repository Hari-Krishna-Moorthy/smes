"use client"
import Navbar from "src/components/ui/navbar/navbar1";
import Footer from '../../components/ui/footer/footer';
import termsContent from './content'

const Page = () => {
    return (
        <div>
            <div className="h-20">
                <Navbar />
            </div>
            <div className="p-2 m-4">
                <div className="text-3xl text-center font-bold"><h1>GENERAL TERMS AND CONDITIONS OF SALE & SERVICE</h1></div>
            </div>
            <div className="text-black dark:text-white  sm:ml-4 md:ml-2 lg:ml-8 pb-16">
                <ol type="1" class="mx-8">
                    {termsContent.map((content, index) => (
                        <li key={index} className="container text-[12px] mx-auto py-2">
                            <span >{`${index + 1}`}</span>
                            <span className="pl-2">{content.content}</span>
                            {
                                content.sublist ? <ol className="pl-2" >
                                    {content.sublist.map((subContent, subIndex) => (
                                        <li key={subIndex} className=" pt-2">
                                            <span >{`${index + 1}. ${String.fromCharCode(subIndex + 97)} `}</span>
                                            <span className="pl-2">{subContent}</span>
                                        </li>
                                    ))}
                                </ol > : <></>
                            }
                        </li>
                    ))}
                </ol>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
