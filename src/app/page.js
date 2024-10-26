import Header from "components/header";
import Footer from "components/footer";
import Slider from "components/slider";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-sky-400 to-cyan-600 px-40 py-10 space-y-5 text-center">
        <h1 className="text-white font- font-black text-3xl capitalize">
          Objective to promote and develop Shotokan karate in india
        </h1>
        <p className="text-white font-thin">
          The Association currently consists of 10 Karate Branch Dojo with a
          main dojo
        </p>
        <Slider />
      </section>
      <section className="bg-white px-40 py-10 space-y-5">
        <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
          Welcome to WFSKA India Official Website!
        </h2>
        <div className="flex">
          <div className="space-y-5">
            <p>
              WFSKA-INDIA is a Shotokan style founded by Master Gichin
              Funakoshi, the most widely known style of Karate all over the
              world and he is known as a father of modern karate. Present
              Grandmaster Kevin Funakoshi is the eldest son of Kenneth Funakoshi
              and founder of Funakoshi Shotokan Karate Association (FSKA).
            </p>
            <p>
              It is affiliated to Funakoshi Shotokan Karate Association World
              (Japan) and approved by Karate India Organisation (KIO).
            </p>
            <p>
              The association has great experience of participating in different
              Nation and International Championships, Seminars and Grandmaster
              training camps. He has made significant contributions in the field
              of karate at National and International level.
            </p>
            <p>
              WFSKA-INDIA is formed under the guidance of Sensei Devidas Gopal
              Naik He started his karate training in Budokan Marshal Art and
              Fitness Institution (BMAFI) on 03 June 1992 under Shihan Mahesh
              Kamat he the disciple (Grand Master Chew Choo Soot) and has been
              practicing karate for more than 33 years. At present WFSKA-INDIA
              is the fastest growing karate organisation in india.
            </p>
          </div>
          <Image
            src="/images/kickman.png"
            alt="Kickman"
            width={200}
            height={100}
          />
        </div>
      </section>
    </>
  );
}
