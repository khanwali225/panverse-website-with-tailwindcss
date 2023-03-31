'use client'

import Wrapper from "@/components/shared/Wrapper"
import QuarterBox from "../shared/QuarterBox"
import Image from "next/image"
import { useState } from "react"

//Images
import Web3Img from "/public/metaverse.webp"
import AI from "/public/ai.webp"
import CNC from "/public/cloud.webp"
import Ambient from "/public/ambient.webp"
import Genomics from "/public/genomics.webp"
import Network from "/public/network.webp"




export const programsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: Web3Img,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtualand AugmentedMetaverse Experience",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: AI,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image: CNC,
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5
            }
        ]
    },
    {
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: Ambient,
        quarters: [
            {
                header: "Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number: 5
            }
        ]
    },
    {
        header: "Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: Genomics,
        quarters: [
            {
                header: "Quarter IV",
                description: "Bio-351: Python for Biologists",
                number: 4
            },
            {
                header: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number: 5
            }
        ]
    },
    {
        header: "Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image: Network,
        quarters: [
            {
                header: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number: 4
            },
            {
                header: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number: 5
            }
        ]
    }
]

const SpecializedTracks = () => {

    const [selectedItem, setSelectedItem] = useState("wmd")
    const selectedItemData = programsData.find((item) => item.slug === selectedItem)

    console.log(selectedItem)



    return (
        <section>
            <Wrapper>
                {/* Header */}
                <div>
                    <h2 className="text-5xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
                    <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
                        After completing the first three quarters the participants will select
                        one or more specilization consisting of two courses each:</p>
                </div>
                <div className="mt-6 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-6">
                    {/* Content left */}
                    <div className="shadow-xl sticky top-36 self-start basis-8/12 rounded-xl border border-slate-200 py-8 px-8">
                        <h4 className="text-primary text-xl font-medium">Specialized Tracks</h4>
                        <h3 className="text-2xl font-bold">{selectedItemData?.header}</h3>
                        <p className="text-lg text-slate-600 mt-2">{selectedItemData?.description}</p>
                        <button className="text-primary text-xl mt-4 underline flex gap-x-2 items-center">Learn More
                            <svg width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" stroke-width="2" />
                            </svg>
                        </button>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            {
                                selectedItemData?.quarters.map((item) => (
                                    <QuarterBox
                                        key={item.number}
                                        description={item.description}
                                        header={item.header}
                                        number={item.number}
                                        haveBorder={false}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    {/* Content right */}
                    <div className="px-4 space-y-4 py-6 bg-slate-100 basis-4/12 flex-1">
                        {
                            programsData.map((item, i) => (

                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-4 items-center cursor-pointer">
                                    <div className="flex-shrink-0 h-24 w-36">
                                        {/* <div className="w-20 h-16 rounded bg-red-300"></div> */}
                                        <Image src={item.image} alt={item.header} className={"h-24 object-cover rounded-md"} />
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-medium">Specialized Program</h4>
                                        <h3 className="text-xl font-semibold">{item.header}</h3>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </section >
    )

}

export default SpecializedTracks