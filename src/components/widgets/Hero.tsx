import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import HeroPoster from "/public/hero-poster.jpg"
// Components
import Button from "@/components/shared/Button"


const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center">
                    {/* left side */}
                    <div className="flex-1">
                        <h4 className="text-teal-700 font-semibold text-xl">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className="text-5xl sm:text-6xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-6 text-xl text-slate-600 ">
                            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                        </p>
                        {/* <Button /> */}
                        <div className="mt-7">
                            <Button text={"Enroll Now"} />
                        </div>

                    </div>
                    {/* Right side */}
                    <div className="flex-1 mt-10">
                        <Image src={HeroPoster} alt="Hero Poster" />
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default Hero