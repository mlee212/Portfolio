import React, { useState } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import ProjectCard from './ProjectCard'
import styles from '@/styles/projects.module.css'

export default function ProjectList() {
  const [searchValue, setSearchValue] = useState('')
  const { data, error } = useSWR('/api/github', fetcher)
  if (error)
    return (
      <div>
        <h1>Error loading projects.</h1>
      </div>
    )
  if (!data)
    return (
      <div>
        <input
          aria-label="Not yet..."
          type="text"
          placeholder="Not yet..."
          className={styles.search}
        />
      </div>
    )

  const filteredProjects = Object(data.repos)
    .filter(
      (project) =>
        project.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.description
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        project.language?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => Number(b.stars) - Number(a.stars))

  return (
    <div>
      <input
        aria-label="Search my projects"
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search my projects"
        className={styles.search}
      />

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
  )
}
