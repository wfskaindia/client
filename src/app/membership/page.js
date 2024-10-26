import Image from "next/image";

export const metadata = {
  title: "Membership - WfskaIndia",
};

export default function Page() {
  return (
    <>
      {" "}
      <section className="bg-white px-40 py-10 space-y-5">
        <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
          Instructors
        </h2>
        <div className="flex flex-wrap gap-4 justify-between">
          <InstructorCard
            src="/gopal.jpeg"
            name="Shihan Devidas Gopal Naik"
            designation="President WFSKA-INDIA/FOUNDER"
          />

          <InstructorCard
            src="/monushka.jpeg"
            name="Sensei Monushka Agima Pereira"
            address="Casa Do povo hall, Goa velha Market"
            designation="Chief Instructor"
          />
          <InstructorCard
            src="/anthony.jpeg"
            name="Sensei Anthony Pereira"
            address="Dojo- Casa -do-povo hall, Goa Velha"
            designation="Instructor"
          />
          <InstructorCard
            src="/ashraf.jpeg"
            name="Sensei Mohammed Ashraf Minshinkai"
            address="Dojo location -Curca  and Santacruz"
            designation="Instructor "
          />
          <InstructorCard
            src="/ravi.jpeg"
            name="Ravi . M. GOULI"
            address="Dojo- Casa -do-povo hall, Goa Velha"
            designation="Instructor"
          />
          <InstructorCard
            src="/vignesh.jpg"
            name="Vignesh Mukund Haldankar"
            address="Bldg. No. 244,Room No. 1/3,MPT COLONY, Headland Sada, Vasco, Goa"
            designation="2nd DAN WFSKA JAPAN"
          />
        </div>
      </section>
    </>
  );
}

const InstructorCard = ({ src, name, address, designation }) => {
  return (
    <>
      <div className="w-[300px] space-y-1 text-center">
        <div className="w-[300px]">
          <Image
            src={`/images/instructors${src}`}
            width={300}
            height={300}
            alt="Ashraf"
            className="rounded-md w-full h-full"
          />
        </div>
        <h2 className="text-lg font-black">{name}</h2>
        <p className="font-semibold">{designation}</p>
        <p className="break-words">{address}</p>
      </div>
    </>
  );
};
