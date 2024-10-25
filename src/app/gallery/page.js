import Image from "next/image";

export const metadata = {
  title: "Gallery - WfskaIndia",
};

export default function Page() {
  return (
    <>
      {" "}
      <section className="bg-white px-40 py-10 space-y-5">
        <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
          Gallery
        </h2>
        <div className="flex flex-wrap gap-4 justify-between">
           <Image src="/images/gallery/1.jpg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/2.jpg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/3.jpg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/4.jpg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/5.jpg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/6.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/7.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/8.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/9.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/10.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/11.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/12.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/13.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/14.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/15.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/16.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/17.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/18.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/19.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/20.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/21.jpeg" alt="gallery"width={300} height={200} />
           <Image src="/images/gallery/22.jpeg" alt="gallery"width={300} height={200} />

        </div>
      </section>
    </>
  );
}