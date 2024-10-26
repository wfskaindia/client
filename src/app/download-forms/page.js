import Link from "next/link";

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
          <Link
            className="bg-blue-500 rounded-md p-4 text-white font-bold hover:bg-blue-400"
            href="/forms/student-membership"
          >
            Student Membership Form
          </Link>
          <Link
            className="bg-blue-500 rounded-md p-4 text-white font-bold hover:bg-blue-400"
            href="/forms/examination"
          >
            Examination Form
          </Link>
          <Link
            className="bg-blue-500 rounded-md p-4 text-white font-bold hover:bg-blue-400"
            href="/forms/examiner-authorization"
          >
            Examiner Authorization Form
          </Link>
          <Link
            className="bg-blue-500 rounded-md p-4 text-white font-bold hover:bg-blue-400"
            href="/forms/associate-membership"
          >
            Associate Membership Form
          </Link>
        </div>
      </section>
    </>
  );
}
