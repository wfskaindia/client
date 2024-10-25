import Image from "next/image";

export const metadata = {
  title: "Download Forms - WfskaIndia",
};

export default function Page() {
  return (
    <>
      {" "}
      <section className="bg-white px-40 py-10 space-y-5">
        <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
          Download Forms
        </h2>
        <div className="flex flex-wrap gap-4 justify-between">
          <Image
            src="/images/forms/student-membership.jpeg"
            alt="gallery"
            width={350}
            height={220}
          />
          <Image
            src="/images/forms/examination.jpeg"
            alt="gallery"
            width={350}
            height={220}
          />
          <Image
            src="/images/forms/examiner-authorization.jpeg"
            alt="gallery"
            width={350}
            height={220}
          />
          <Image
            src="/images/forms/associate-membership.jpeg"
            alt="gallery"
            width={350}
            height={220}
          />
        </div>
      </section>
    </>
  );
}
