import Image from "next/image"
import Logo from "/public/logo.webp"
import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper"

const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-orange-300">
            <Wrapper>
                <div className="flex justify-between py-8 items-center" >
                    <div>
                        <Image src={Logo} alt="Panaverse dao logo" />
                    </div>
                    <ul className="flex space-x-8 font-medium">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/courses"}>Courses</Link>
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header