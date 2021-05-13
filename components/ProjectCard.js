import { StarIcon } from "../public/images/icons/icons.js";

export default function ProjectCard({
  name,
  desc,
  star_count,
  href,
  language,
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <div
        className="border-2 border-lilac dark:border-stormcloud p-4 mb-4 
      rounded-lg hover-hover:hover:shadow-lg hover-hover:hover:border-gray-300 
      transition duration-200 ease-in-out"
      >
        <div className="flex justify-between">
          <h1 className="font-medium group-hover:underline">{name}</h1>
          <span className="flex items-center">
            {star_count}
            <span className="sr-only">Icon</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 ml-1"
            >
              <StarIcon />
            </svg>
          </span>
        </div>
        <p>{desc}</p>
        <p className="font-medium">{language}</p>
      </div>
    </a>
  );
}
