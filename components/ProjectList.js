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
        <div className="py-4">
          <input
            className="border-2 border-fog dark:border-boulder w-full
            bg-lilac dark:bg-stormcloud py-2 px-4 rounded-md text-md  
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
        {/* <ProjectCard
          key="loading-1"
          name="Loading..."
          star_count="Still loading..."
          desc="Hold on..."
          language="Nearly there..."
        />
        <ProjectCard
          key="loading-2"
          name="Loading..."
          star_count="Still loading..."
          desc="Hold on..."
          language="Nearly there..."
        />
        <ProjectCard
          key="loading-3"
          name="Loading..."
          star_count="Still loading..."
          desc="Hold on..."
          language="Nearly there..."
        /> */}
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
      <div className="my-4">
        <input
          className="form-input border-2 border-fog dark:border-boulder w-full
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
