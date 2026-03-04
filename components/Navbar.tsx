import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logo.png";
import NavItems from "@/components/NavItems";
import MobileMenu from "@/components/MobileMenu";

const Navbar = () => {
    return (
        <header className="w-full border-b bg-white">
            <nav className="flex items-center justify-between px-6 py-4 relative">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image src={logoImage} alt="logo" width={48} height={48} />
                    <Link href="/" className="text-2xl font-bold">
                        AgriFarm<span className="text-green-600">Unity</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className=" md:block">
                    <NavItems direction="row" />
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <MobileMenu />
                </div>

            </nav>
        </header>
    );
};

export default Navbar;