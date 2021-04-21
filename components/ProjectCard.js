import Image from "next/image";
import { RightArrow } from "../public/images/icons/icons.js";

export default function ProjectCard({
  title,
  children,
  image,
  demo,
  repo,
  demotitle,
  repotitle,
}) {
  return (
    <figure
      className="flex bg-shadow-800 md:p-6 p-4 rounded-lg
       mb-4 transition duration-300 ease-in-out hover:bg-shadow-700"
    >
      <div className="space-y-4">
        <figcaption className="flex items-center">
          <div className="w-16 h-16 md:w-28 md:h-28 relative flex md:items-start">
            <Image src={image} alt="Product Logo" layout="fill" />
          </div>
          <div className="flex-1 pl-4">
            <h1 className="font-medium text-lg text-shadow-100">
              {title}
            </h1>
            <p className="text-shadow-200">{children}</p>
            <div className="flex font-medium space-x-6">
              <a
                href={demo}
                rel="noreferrer"
                rel="noopener"
                target="_blank"
                className="text-red-400 hover:text-red-300"
              >
                <span className="flex items-center">
                  Demo
                  <RightArrow />
                </span>
              </a>
              <a
                href={repo}
                rel="noreferrer"
                rel="noopener"
                target="_blank"
                className="flex items-center text-gray-300 hover:text-gray-100"
              >
                <span className="flex items-center">
                  Repo
                  <RightArrow />
                </span>
              </a>
            </div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
