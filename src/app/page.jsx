import Image from "next/image";

function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:48">
      {/* image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 m-2 relative ">
        <Image alt="Foto" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority src="/fotonga.heic" fill className="object-contain p-2" />
      </div>
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
        <h1 className="text-4xl font-bold">
          Holas ipsum, dolor sit amet consectetur
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa, id, nemo necessitatibus velit ipsum ratione, quasi praesentium esse a quos quas debitis aspernatur totam facilis eveniet! Modi explicabo id officiis necessitatibus autem animi praesentium, optio molestias repellat vero dolore.</p>
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
