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
      className="flex bg-card-light hover-hover:hover:bg-cardbright-light
      dark:bg-card-dark hover-hover:dark:hover:bg-cardbright-dark p-6 rounded-lg
       mb-4 transition duration-300 ease-in-out"
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
            <div className="text-sm uppercase text-accent-light dark:text-accent-dark">
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
          <p className="md:text-lg text-md text-text-light dark:text-text-dark text-opacity-70">
            {children}
          </p>
        </blockquote>
      </div>
    </figure>
  );
}
