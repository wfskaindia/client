import Image from "next/image";

export const metadata = {
  title: "Adminstration - WfskaIndia",
};

export default function Page() {
  return (
    <>
      {" "}
      <section className="bg-white px-40 py-10 space-y-5">
        <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
          Adminstration
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col gap-1 justify-center items-center">
            {/* <Image
              src="/images/adminstration/photo.jpeg"
              width={200}
              height={300}
              alt="Ex"
              className="rounded-md"
            /> */}
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <div>
              <Image
                src="/images/adminstration/photo.jpeg"
                width={200}
                height={300}
                alt="Ex"
                className="rounded-md"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl uppercase text-blue-700">
                Shihan Devidas Gopal Naik
              </h2>
              <p className="uppercase">Founder / President</p>
              <p className="uppercase">WFSKA-India</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl uppercase text-blue-700">
                Funakoshi Shotokan Karate Association World
              </h2>
              <p className="uppercase">Roku Dan 6th Dan</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl uppercase text-blue-700">
                World Karate Federation (WKF)
              </h2>
              <p className="uppercase">Roku Dan 6th Dan</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl uppercase text-blue-700">
                International Affiliation
              </h2>
              <p className="uppercase">
                Funakoshi Shotokan Karate Association World (FSKA World)
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-xl uppercase text-blue-700">Approved By</h2>
              <p className="uppercase">Karate India Organization (KIO)</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl uppercase text-blue-700">Member Of</h2>
              <p className="uppercase">
                Traditional Karate Association Of Goa (TKAG)
              </p>
            </div>
            <div>
              <Image
                src="/images/adminstration/cert1.png"
                width={500}
                height={300}
                alt="Ex"
                className=" border rounded-md"
              />
            </div>
            <div>
              <Image
                src="/images/adminstration/cert2.png"
                width={400}
                height={300}
                alt="Ex"
                className=" border rounded-md"
              />
            </div>{" "}
            <div>
              <Image
                src="/images/adminstration/cert3.png"
                width={400}
                height={300}
                alt="Ex"
                className=" border rounded-md"
              />
            </div>{" "}
            <div>
              <Image
                src="/images/adminstration/cert4.png"
                width={400}
                height={300}
                alt="Ex"
                className=" border rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
