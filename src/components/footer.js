import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {" "}
      <footer className="flex flex-col gap-10 bg-[#0a2540]">
        <div className="flex justify-between px-40 py-12">
          <div className="text-white space-y-4">
            <h2 className="text-2xl font-extrabold">Important Links</h2>
            <ul className="space-y-3 font-medium px-6 underline list-disc">
              <li>
                <Link href="https://www.karateindia.org/">
                  Karate India Organisation (KIO)
                </Link>
              </li>
              <li>
                <Link href="https://olympic.ind.in/">
                  Indian Olympic Association
                </Link>
              </li>
              <li>
                <Link href="https://asiankaratefederation.net/">
                  Asian Karate Federation
                </Link>
              </li>
              <li>
                <Link href="https://www.wkf.net/">
                  World Karate Federation
                </Link>
              </li>
              <li>
                <Link href="https://oca.asia/">
                  Olympic Council of Asia
                </Link>
              </li>
              <li>
                <Link href="https://olympics.com/ioc/overview">
                  International Olympic Committee
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white space-y-4">
            <h2 className="text-2xl font-extrabold">Sitemap</h2>
            <ul className="space-y-3 font-medium px-6 underline list-disc">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#">
                  Administration
                </Link>
              </li>
              <li>
                <Link href="/membership">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/download-forms">
                  Download Forms
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
 
          <div className="text-white space-y-4">
            <h2 className="text-2xl font-extrabold">Download Forms</h2>
            <ul className="space-y-3 font-medium px-6 underline list-disc">
              <li>
                <Link href="/download-forms">
                  Application Form for Membership
                </Link>
              </li>
              <li>
                <Link href="/download-forms">
                  Application for Affiliation
                </Link>
              </li>
              <li>
                <Link href="/download-forms">
                  Kyu Examination form
                </Link>
              </li>
              <li>
                <Link href="/download-forms">
                  Dan Examination form
                </Link>
              </li>
              <li>
                <Link href="/download-forms">
                  GRADING EXAMINATION REPORT
                </Link>
              </li>
              <li>
                <Link href="/download-forms">
                  Renewal Application Form
                </Link>
              </li>
              <li>
                <Link href="/download-forms">
                  Belt Grading Registration Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-800 p-4 px-40 ">
          <div className="flex justify-center items-center gap-3">
            <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
            <p className="text-white font-thin">
              Wfskaindia.com Copyright 2024 | All Rights Reserved
            </p>
          </div>
          <div className="flex gap-4">
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
      </footer>
    </>
  );
}
