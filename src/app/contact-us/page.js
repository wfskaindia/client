import Image from "next/image";

export const metadata = {
  title: "Contact Us - WfskaIndia",
};

export default function Page() {
  return (
    <>
      {" "}
      <section className="bg-white px-40 py-10 space-y-5">
        <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
          Contact Us
        </h2>
        <div className="flex flex-col justify-center  items-center gap-4">
          <Image src="/images/logo.png" width={400} height={400} alt="Logo" />

          <p className="text-2xl">
            <strong>Name: </strong>Shihan Devidas Gopal Naik
          </p>
          <p className="text-2xl">
            <strong>Address: </strong>Radha Niwas, H.no 95/4/11. Zina Sancoale,
            Mormugao - South Goa, 403710
          </p>
          <p className="text-2xl">
            <strong>Mobile: </strong> 98220149832 / 9823186331
          </p>
          <p className="text-2xl">
            <strong>Email: </strong> wfskaindia@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}
