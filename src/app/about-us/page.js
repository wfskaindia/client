import Image from "next/image";

export const metadata = {
  title: "About Us - WfskaIndia",
};

export default function Page() {
  return (
    <>
      <section className="bg-white px-40 py-10 space-y-5">
        <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
          About Us
        </h2>
        <div className="flex justify-center items-center">
          <Image
            alt="Founder"
            className="rounded-md"
            src="/images/founder.jpeg"
            width={300}
            height={200}
          />
        </div>
        <p>
          WFSKA-INDIA is a Shotokan style founded by Master Gichin Funakoshi,
          the most widely known style of Karate all over the world and he is
          known as a father of modern karate. Present Grandmaster Kevin
          Funakoshi is the eldest son of Kenneth Funakoshi and founder of
          Funakoshi Shotokan Karate Association (FSKA).
        </p>
        <p>
          It is affiliated to Funakoshi Shotokan Karate Association World
          (Japan) and approved by Karate India Organisation (KIO).
        </p>
        <p>
          The association has great experience of participating in different
          Nation and International Championships, Seminars and Grandmaster
          training camps. He has made significant contributions in the field of
          karate at National and International level.
        </p>
        <p>
          WFSKA-INDIA is formed under the guidance of Sensei Devidas Gopal Naik
          He started his karate training in Budokan Marshal Art and Fitness
          Institution (BMAFI) on 03 June 1992 under Shihan Mahesh Kamat he the
          disciple (Grand Master Chew Choo Soot) and has been practicing karate
          for more than 33 years. At present WFSKA-INDIA is the fastest growing
          karate organisation in india.
        </p>
      </section>
    </>
  );
}
