import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ title, children, image, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group ">
      <figure
        className=" p-6 rounded-lg mb-4 flex bg-lilac dark:bg-stormcloud"
      >
        <div className="space-y-4">
          <figcaption className="flex items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 relative flex md:items-start">
              <Image src={image} alt="Product Logo" layout="fill" />
            </div>
            <div className="flex-1 pl-4">
              <h4 className="font-medium hover-hover:group-hover:underline">{title}</h4>
              <p>{children}</p>
            </div>
          </figcaption>
        </div>
      </figure>
    </a>
  );
}
