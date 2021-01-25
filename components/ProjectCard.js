import Image from "next/image";

export default function ProjectCard({ date, category, children, image, href }) {
  return (
    <a href={href} rel="noreferrer" rel="noopener" target="_blank">
      <figure className="flex bg-cardbg dark:bg-cardbgdark border-black p-6 rounded-lg mb-4 border-2 border-solid border-gray-200
       dark:border-gray-600 transition duration-300 ease-in-out transform hover:shadow-2xl dark:hover:border-gray-400">
        <div className="space-y-4">
          <figcaption className="font-medium flex items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 relative flex md:items-start">
              <Image
                src={image}
                alt="Product Logo"
                layout="fill"
                width={150}
                height={150}
              />
            </div>
            <div className="pl-4">
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase">
                {date}
              </div>
              <div className="text-lg text-black dark:text-white">
                {category}
              </div>
            </div>
          </figcaption>
          <blockquote>
            <p className="md:text-lg text-md dark:text-white">{children}</p>
          </blockquote>
        </div>
      </figure>
    </a>
  );
}
