import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex flex-col justify-center items-center text-center py-4 bg-white space-y-2 text-black">
          <div className="flex items-center w-full justify-between px-40">
            <div className="flex space-x-1">
              <span className="bg-white flex justify-center items-center px-2 pt-1 rounded-md border border-gray-400">
                0
              </span>
              <span className="bg-white flex justify-center items-center px-2 pt-1 rounded-md border border-gray-400">
                0
              </span>
              <span className="bg-white flex justify-center items-center px-2 pt-1 rounded-md border border-gray-400">
                0
              </span>
              <span className="bg-white flex justify-center items-center px-2 pt-1 rounded-md border border-gray-400">
                0
              </span>
            </div>
            <div className="w-[15%] flex items-center justify-end gap-4">
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
          {/* <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex gap-4 justify-center items-center">
              <Image
                src="/images/fskaw.png"
                className="rounded-md"
                width={120}
                height={120}
                alt="Logo"
              />
              <Image
                src="/images/kio-t.png"
                className="rounded-full"
                width={140}
                height={140}
                alt="Logo"
              />
              <Image
                src="/images/wkf-t.png"
                className="rounded-full mr-2"
                width={120}
                height={120}
                alt="Logo"
              />
            </div>

            <div className="mr-4">
              <Image
                src="/images/logo.png"
                width={170}
                height={170}
                alt="Logo"
              />
            </div>
            <div className="flex gap-8 justify-center items-center">
              <Image
                src="/images/wkf2-t.png"
                className="rounded-full"
                width={105}
                height={105}
                alt="Logo"
              />
              <Image
                src="/images/ckf-t.png"
                className="rounded-full"
                width={105}
                height={105}
                alt="Logo"
              />

              <Image
                src="/images/sakf-t.png"
                className="rounded-full"
                width={105}
                height={105}
                alt="Logo"
              />
            </div>
          </div> */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex gap-4 justify-center items-center">
              <Image
                src="/images/fskaw.png"
                className="rounded-md"
                width={105}
                height={90}
                alt="Logo"
              />
              <Image
                src="/images/kio-t.png"
                className="rounded-full"
                width={125}
                height={95}
                alt="Logo"
              />
              <Image
                src="/images/wkf-t.png"
                className="rounded-full"
                width={100}
                height={100}
                alt="Logo"
              />
            </div>
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
              width={95}
              height={95}
              alt="Logo"
            />
          </div>
          <div className="space-y-2 px-40">
            <h1 className="text-3xl text-[#9b5251] font-black uppercase">
              World Funakoshi Shotokan Karate Association India
            </h1>
            <p className="text-black text-lg px-14 capitalize">
              WFSKA-INDIA is Affiliated to{" "}
              <span className="text-blue-500">
                Funakoshi Shotokan Karate Association World
              </span>{" "}
              (FSKA-World) WFSKA-INDIA Approved by{" "}
              <span className="text-red-500">Karate India Organization</span>{" "}
              (KIO),{" "}
              <span className="text-red-500">
                KIO Member of World Karate Federation
              </span>{" "}
              (WKF),{" "}
              <span className="text-red-500">Asia Karate Federation</span>{" "}
              (AKF),{" "}
              <span className="text-red-500">
                Commonwealth Karate Federation
              </span>
              (CKF),{" "}
              <span className="text-red-500">
                South Asian Karate Federation
              </span>
              (SAKF) WKF Recognized by:{" "}
              <span className="text-blue-500">
                International Olympic Committee
              </span>{" "}
              (IOC),
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
