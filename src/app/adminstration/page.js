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
        <div className="space-y-4">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src="/images/adminstration/photo.jpeg"
              width={200}
              height={300}
              alt="Ex"
              className="rounded-md"
            />
            <h2 className="text-xl">Shihan Devidas Gopal Naik</h2>
            <p>President WFSKA-INDIA/FOUNDER</p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <div>
              <Image
                src="/images/adminstration/cert1.jpeg"
                width={200}
                height={300}
                alt="Ex"
                className=" border rounded-md"
              />
            </div>
            <div>
              <Image
                src="/images/adminstration/cert2.jpeg"
                width={400}
                height={300}
                alt="Ex"
                className=" border rounded-md"
              />
            </div>{" "}
            <div>
              <Image
                src="/images/adminstration/cert3.jpeg"
                width={400}
                height={300}
                alt="Ex"
                className=" border rounded-md"
              />
            </div>{" "}
            <div>
              <Image
                src="/images/adminstration/cert4.jpeg"
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
