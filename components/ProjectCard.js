import Image from "next/image";
import { RightArrow } from "../public/images/icons/icons.js";

export default function ProjectCard({
  title,
  category,
  children,
  image,
  href,
  demo,
}) {
  return (
    <figure
      className="flex ring-1 ring-gray-200 dark:ring-border-dark md:p-6 p-4 rounded-lg
       mb-4 transition duration-300 ease-in-out"
    >
      <div className="space-y-4">
        <figcaption className="flex items-center">
          <div className="w-16 h-16 md:w-28 md:h-28 relative flex md:items-start">
            <Image src={image} alt="Product Logo" layout="fill" />
          </div>
          <div className="flex-1 pl-4">
            <h1 className="font-medium text-lg text-gray-900 dark:text-gray-50">{title}</h1>
            <p>{children}</p>
            <div className="flex space-x-6 font-medium">
              <a
                href={href}
                rel="noreferrer"
                rel="noopener"
                target="_blank"
                className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
              >
                <span>Demo</span> <RightArrow />
              </a>
              <a
                href={href}
                rel="noreferrer"
                rel="noopener"
                target="_blank"
                className="flex items-center space-x-1 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 leading-relaxed"
              >
                <span>Repo</span> <RightArrow />
              </a>
            </div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
