import { StarIcon } from "../public/images/icons/icons.js";

export default function ProjectCard({
  name,
  desc,
  star_count,
  href,
  language,
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        className="border-2 border-lilac dark:border-stormcloud p-4 mb-4 
      rounded-lg hover:shadow-lg hover:border-gray-300 dark:hover:border-boulder
      transition duration-200 ease-in-out group"
      >
        <div className="flex justify-between">
          <h1 className="font-medium group-hover:underline">{name}</h1>
          <span className="flex items-center font-medium">
            {star_count}
            <span className="sr-only">Icon</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 ml-1"
            >
              <StarIcon />
            </svg>
          </span>
        </div>
        <div className="pr-0 md:pr-24">
          <p>{desc}</p>
        </div>
        <p className="font-medium text-mist">{language}</p>
      </div>
    </a>
  );
}
