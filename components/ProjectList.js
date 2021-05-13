import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import ProjectCard from "./ProjectCard";

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
        <div className="py-4">
          <input
            className="border-2 border-fog dark:border-boulder w-full
            bg-lilac dark:bg-stormcloud h-10 px-5 rounded-md text-md  
            focus:outline-none placeholder-stormcloud dark:placeholder-fog"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-5 mr-4"
          ></button>
        </div>
        <ProjectCard
          key="loading-1"
          name="Loading..."
          star_count="Still loading..."
          desc="Hold on..."
          language="Nearly there..."
        ></ProjectCard>
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
      <div className="py-4">
        <input
          className="form-input border-2 border-fog dark:border-boulder w-full
           bg-lilac dark:bg-stormcloud py-2 px-4 rounded-md text-md 
           focus:outline-none placeholder-stormcloud dark:placeholder-fog"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-5 mr-4"
        ></button>
      </div>
      {!filteredProjects.length &&
        "What!? Look's like you tried to find something I haven't created yet."}
      {filteredProjects.map((p) => (
        <ProjectCard
          key={p.name}
          name={p.name}
          star_count={p.stars}
          href={p.url}
          desc={p.description}
          language={p.language}
        ></ProjectCard>
      ))}
    </div>
  );
}
