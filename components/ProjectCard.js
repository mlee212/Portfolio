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
      className="flex-1 bg-shade-light border-accent-light border-opacity-10
       dark:border-card-dark p-6 rounded-lg shadow-2xl"
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
              <div className="flex items-center text-lg text-shade-dark underline">
                {title}
              </div>
            </a>
          </div>
        </figcaption>
        <blockquote>
          <p className="md:text-lg text-md text-shade-dark">
            {children}
          </p>
        </blockquote>
      </div>
    </figure>
  );
}
