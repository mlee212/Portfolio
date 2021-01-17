import Image from "next/image";

export default function ProjectCard({ date, category, children, image, href }) {
  return (
    <a href={href} target="_blank">
      <figure className="flex bg-white dark:bg-cardbgdark rounded-lg py-4 md:py-0 pr-4 md:px-0 shadow-xl mb-4 transition duration-400 ease-in-out transform hover:-translate-y-1">
        <div className="w-32 h-32 md:w-48 md:h-48 p-4 m-auto relative">
          <Image
            src={image}
            alt="Product Logo"
            layout="fill"
            width={150}
            height={150}
          />
        </div>
        <div className="md:py-6 md:pr-8 space-y-4">
          <figcaption className="font-medium">
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase">
              {date}
            </div>
            <div className="text-lg text-black dark:text-white">{category}</div>
          </figcaption>
          <blockquote>
            <p className="md:text-lg text-md dark:text-white">{children}</p>
          </blockquote>
        </div>
      </figure>
    </a>
  );
}
