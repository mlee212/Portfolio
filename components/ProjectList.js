import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import ProjectCard from "./ProjectCard";
import Loader from "./ProjectLoader";
import { SearchIcon } from "../public/images/icons/icons";

export default function ProjectList() {
  const [searchValue, setSearchValue] = useState("");
  const { data, error } = useSWR("/api/github", fetcher);
  if (error)
    return (
      <div>
        <h1>Error loading projects.</h1>
      </div>
    );
  if (!data)
    return (
      <div>
        <div className="my-4">
          <input
            className="input-form border-2 border-fog dark:border-boulder w-full
            bg-lilac dark:bg-stormcloud py-2 rounded-md text-md  
            focus:outline-none placeholder-stormcloud dark:placeholder-fog"
            type="search"
            name="search"
            placeholder="Not yet..."
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-5 mr-4"
          ></button>
        </div>
        <Loader show />
      </div>
    );

  const filteredProjects = Object(data.repos)
    .filter(
      (project) =>
        project.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.description
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        project.language?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => Number(b.stars) - Number(a.stars));

  return (
    <div>
      {/* <div className="my-4">
        <input
          className="input-form border-2 border-fog dark:border-boulder w-full
           bg-lilac dark:bg-stormcloud py-2 rounded-md text-md 
           focus:outline-none placeholder-stormcloud dark:placeholder-fog"
          type="search"
          name="search"
          placeholder="Search my projects."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="absolute top-10 right-10 mt-5 mr-4"
        ></button>
      </div> */}
      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="px-4 py-2 border-2 border-fog dark:border-boulder
           focus:ring-blue-400 focus:border-blue-400 block w-full 
           rounded-md bg-lilac dark:bg-stormcloud text-stormcloud dark:text-fog"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-stormcloud dark:text-fog"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {!filteredProjects.length &&
        "What!? It seems like you tried to find something I haven't created yet."}
      {filteredProjects.map((p) => (
        <ProjectCard
          key={p.name}
          name={p.name}
          star_count={p.stars}
          href={p.url}
          desc={p.description}
          language={p.language}
        />
      ))}
    </div>
  );
}
