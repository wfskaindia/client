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
            address="Dojo location -Curca and Santacruz"
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
        </div>
      </section>
    </>
  );
}

const InstructorCard = ({ src, name, address, designation }) => {
  return (
    <>
      <div className="space-y-1 text-center">
        <div className="w-[300px]">
          <Image
            src={`/images/instructors${src}`}
            width={300}
            height={300}
            alt="Ashraf"
            className="rounded-md w-full h-full"
          />
        </div>
        <h2 className="text-lg font-extrabold">{name}</h2>
        <p>{designation}</p>
        <p>{address}</p>
      </div>
    </>
  );
};
