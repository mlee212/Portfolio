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
      className="flex hover-hover:hover:bg-card-light hover-hover:dark:hover:bg-card-dark border-2 border-card-light
       dark:border-card-dark p-6 rounded-lg mb-4 transition duration-300 ease-in-out"
    >
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
              {category}
            </div>
            <a href={href} rel="noreferrer" rel="noopener" target="_blank">
              <div className="flex items-center text-lg text-link-light dark:text-link-dark hover:underline">
                {title}
              </div>
            </a>
          </div>
        </figcaption>
        <blockquote>
          <p className="md:text-lg text-md text-text-light dark:text-text-dark">
            {children}
          </p>
        </blockquote>
      </div>
    </figure>
  );
}
