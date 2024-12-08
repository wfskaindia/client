import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex flex-col justify-center items-center text-center py-4 bg-white space-y-2 text-black">
          <div className="flex items-center w-full justify-between px-40">
            <div className="space-x-1">
              <span className="bg-white px-1 h-10 border">0</span>
              <span className="bg-white px-1 h-10 border">0</span>
              <span className="bg-white px-1 h-10 border">0</span>
              <span className="bg-white px-1 h-10 border">0</span>
            </div>
            <div className="w-[15%] flex items-center justify-start gap-4">
              <Link
                className="text-black hover:scale-110"
                href="https://www.instagram.com/wfskaindia"
              >
                <FaInstagram size={25} />
              </Link>
              <Link
                className="text-black hover:scale-110"
                href="https://api.whatsapp.com/send?phone=919822014982"
              >
                <FaWhatsapp size={25} />
              </Link>
              <Link
                className="text-black hover:scale-110"
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
              width={91}
              height={90}
              alt="Logo"
            />
            <Image
              src="/images/kio-t.png"
              className="rounded-full"
              width={95}
              height={95}
              alt="Logo"
            />
            <Image
              src="/images/wkf-t.png"
              className="rounded-full"
              width={90}
              height={90}
              alt="Logo"
            />
            <Image src="/images/logo.png" width={150} height={150} alt="Logo" />

            <Image
              src="/images/wkf2-t.png"
              className="rounded-full"
              width={90}
              height={90}
              alt="Logo"
            />
            <Image
              src="/images/ckf-t.png"
              className="rounded-full"
              width={90}
              height={90}
              alt="Logo"
            />
            <Image
              src="/images/sakf-t.png"
              className="rounded-full"
              width={90}
              height={90}
              alt="Logo"
            />
          </div>
          <div className="space-y-2 px-40">
            <h1 className="text-3xl text-[#9b5251] font-black uppercase">
              World Funakoshi Shotokan Karate Association India
            </h1>
            <p className="text-black text-lg px-14 capitalize">
              WFSKA-INDIA is Affiliated to Funakoshi Shotokan Karate Association
              World (FSKA-World) WFSKA-INDIA Approved by Karate India
              Organization (KIO), KIO Member of World Karate Federation (WKF),
              Asia Karate Federation (AKF), Commonwealth Karate Federation
              (CKF), South Asian Karate Federation (SAKF) WKF Recognized by:
              International Olympic Committee (IOC),
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
