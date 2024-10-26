import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex flex-col justify-center items-center text-center py-4 bg-[#295a8a] space-y-2">
          <div className="flex items-center w-full justify-between px-40">
            <div className="space-x-1">
              <span className="bg-white px-1 h-10 border">0</span>
              <span className="bg-white px-1 h-10 border">0</span>
              <span className="bg-white px-1 h-10 border">0</span>
              <span className="bg-white px-1 h-10 border">0</span>
            </div>
            <div className="w-[15%] flex items-center justify-start gap-4">
              <Link
                className="text-white hover:scale-110"
                href="https://www.instagram.com/wfskaindia"
              >
                <FaInstagram size={25} />
              </Link>
              <Link
                className="text-white hover:scale-110"
                href="https://x.com/wfskaindia"
              >
                <FaWhatsapp size={25} />
              </Link>
              <Link
                className="text-white hover:scale-110"
                href="https://www.facebook.com/devidas.naik.9210"
              >
                <FaFacebook size={25} />
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <Image
              src="/images/fskaw.png"
              className="rounded-md"
              width={90}
              height={90}
              alt="Logo"
            />
            <Image
              src="/images/kio.jpg"
              className="rounded-full"
              width={70}
              height={70}
              alt="Logo"
            />
            <Image
              src="/images/wkf.jpg"
              className="rounded-full"
              width={70}
              height={70}
              alt="Logo"
            />
            <Image src="/images/logo.png" width={150} height={150} alt="Logo" />

            <Image
              src="/images/wkf2.png"
              className="rounded-full"
              width={70}
              height={70}
              alt="Logo"
            />
            <Image
              src="/images/ckf.png"
              className="rounded-full"
              width={70}
              height={70}
              alt="Logo"
            />
            <Image
              src="/images/sakf.jpeg"
              className="rounded-full"
              width={70}
              height={70}
              alt="Logo"
            />
          </div>
          <div className="space-y-2 px-40">
            <h1 className="text-4xl text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-black capitalize">
              World Funakoshi Shotokan Karate Association India
            </h1>
            <p className="text-white text-lg px-14 capitalize">
              WFSKA-INDIA. Affiliated to Funakoshi Shotokan Karate Association
              World (Japan) and Approved by Karate India Organisation (KIO).
            </p>
          </div>
        </div>
        <div className="bg-[#0473b2] p-4">
          <nav>
            <ul className="flex gap-4 justify-center font-bold items-center text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/adminstration">Adminstration</Link>
              </li>
              <li>
                <Link href="/grading-syllabus.pdf">Grading Syllabus</Link>
              </li>
              <li>
                <Link href="/membership">Membership</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/download-forms">Download Forms</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
