import Image from "next/image";

export default function ProjectCard({ date, category, children, image, href }) {
  return (
    <a href={href} rel="noreferrer" rel="noopener" target="_blank">
      <figure className="flex bg-grey6-light dark:bg-grey6-dark p-6 rounded-lg mb-4 transition duration-300 ease-in-out hover-hover:hover:shadow-2xl">
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
              <div className="text-sm text-text-light dark:text-text-dark uppercase">
                {date}
              </div>
              <div className="text-lg text-blue-light dark:text-blue-dark hover:underline">
                {category}
              </div>
            </div>
          </figcaption>
          <blockquote>
            <p className="md:text-lg text-md text-grey2-dark dark:text-grey2-light">
              {children}
            </p>
          </blockquote>
        </div>
      </figure>
    </a>
  );
}
