import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-300 shadow-md pb-4 bg-white px-4 sm:px-6 md:px-12 ">
    
      {/* Left side */}
      <Link href='/' className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={36} // w-9 = 36px
          height={36} // h-9 = 36px
          className="w-16 h-8 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-32 lg:h-12"
        />
        {/* <p className="text-md font-medium">Shop</p> */}
      </Link>

      {/* Right side */}
       <div className="flex items-center gap-6">
          <SearchBar/>
          <Link href="/">
            <Home className="w-4 h-4 text-gray-600"/>
          </Link>
          <Bell className="w-4 h-4 text-gray-600"/>
          <ShoppingCart className="w-4 h-4 text-gray-600"/>
          <Link href='/login'>Sign in</Link>
       </div>
    </nav>
  );
};

export default Navbar;
