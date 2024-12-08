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
            designation="President / FOUNDER"
          />
          <InstructorCard
            src="/manjunath.jpeg"
            name="Shihan Manjunath Tangadagi"
            designation="Gen. Sect/Tech. Director"
            address="WFSKA India"
          />
          <InstructorCard
            src="/anthony.jpeg"
            name="Sensei Anthony Pereira"
            address="Dojo- Casa -do-povo hall, Goa Velha"
            designation="Instructor"
          />

          <InstructorCard
            src="/suraj.jpeg"
            name="Sensei Suraj Mali"
            address="Rose Garden School Chogam Porvorim"
            designation="Instructor"
          />
          <InstructorCard
            src="/vignesh.jpg"
            name="Vignesh Mukund Haldankar"
            address="Rose Circle Ground, Headland Sada, Vasco, Goa"
            designation="Instructor"
          />
          <InstructorCard
            src="/monushka.jpeg"
            name="Sensei Monushka Agima Pereira"
            address="Casa Do povo hall, Goa velha Market"
            designation="Instructor"
          />
          <InstructorCard
            src="/ashraf.jpeg"
            name="Sensei Ashraf Minshinkai"
            address="Dojo Curca  and Santacruz"
            designation="Instructor "
          />
          <InstructorCard
            src="/siya.jpeg"
            name="Sensei Siya Pradeep Bhosle"
            address="Dojo Mahalaximi Residency Upasnagar Sancoale"
            designation="Instructor"
          />
          {/* <InstructorCard
            src="/ravi.jpeg"
            name="Ravi . M. GOULI"
            address="Dojo Casa -do-povo hall, Goa Velha"
            designation="Instructor"
          /> */}
          <div className="w-[300px] space-y-1 text-center">
            <div className="w-[300px]">
              <Image
                src="/images/file.jpg"
                width={400}
                height={600}
                alt="Ashraf"
                className="rounded-md w-full h-full"
              />
            </div>
            <h2 className="text-lg font-black">Ravi . M. GOULI</h2>
            <p className="font-semibold">Instructor</p>
            <p className="break-words">Dojo Casa -do-povo hall, Goa Velha</p>
          </div>
          <InstructorCard
            src="/nidhi.jpeg"
            name="Sensei Nidhi Abhijit Mesta"
            designation="Instructor"
          />
          <InstructorCard
            src="/tanushka.jpeg"
            name="Sensei Tanishka Palyekar"
            designation="Instructor"
          />
          <InstructorCard
            src="/palak.jpeg"
            name="Sensei Palak Chodankar"
            designation="Instructor"
          />
          <InstructorCard
            src="/vandana.jpeg"
            name="Sensei Vandana Das"
            designation="Instructor"
          />
          <InstructorCard
            src="/vinit.jpeg"
            name="Sensei Vinit Ghaware"
            designation="Instructor"
          />
        </div>
      </section>
    </>
  );
}

const InstructorCard = ({ src, name, address, designation, additional }) => {
  return (
    <>
      <div className="w-[300px] space-y-1 text-center">
        <div className="w-[300px]">
          <Image
            src={`/images/instructors${src}`}
            width={300}
            height={350}
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
