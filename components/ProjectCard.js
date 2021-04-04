import Image from "next/image";

export default function ProjectCard({
  title,
  category,
  children,
  image,
  href,
}) {
  return (
    <figure
      className="flex hover-hover:hover:bg-gray-200 bg-gray-100 
      dark:bg-gray-700 hover-hover:dark:hover:bg-gray-600 p-6 rounded-lg mb-4 transition duration-300 ease-in-out"
    >
      <div className="space-y-4">
        <figcaption className="font-medium flex items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 relative flex md:items-start">
            <Image
              src={image}
              alt="Product Logo"
              layout="fill"
            />
          </div>
          <div className="pl-4">
            <div className="text-sm uppercase dark:text-green-300">
              {category}
            </div>
            <a href={href} rel="noreferrer" rel="noopener" target="_blank">
              <div className="flex items-center text-lg underline">
                {title}
              </div>
            </a>
          </div>
        </figcaption>
        <blockquote>
          <p className="md:text-lg text-md text-gray-500 dark:text-gray-300">
            {children}
          </p>
        </blockquote>
      </div>
    </figure>
  );
}
