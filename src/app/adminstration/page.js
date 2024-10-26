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
        <div>
          <div>
            <Image
              src="/images/adminstration/photo.jpeg"
              width={200}
              height={300}
              alt="Ex"
            />
          </div>
        </div>
      </section>
    </>
  );
}
