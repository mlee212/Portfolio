import Image from "next/image";

export default function ProjectCard({ date, category, children, image, href }) {
  return (
    <a href={href} rel="noreferrer" rel="noopener" target="_blank">
      <figure className="flex bg-cardbg dark:bg-cardbgdark rounded-lg p-6 shadow-xl mb-4 transition duration-400 ease-in-out transform hover:-translate-y-1">
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
