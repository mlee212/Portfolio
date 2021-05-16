import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import { useState } from 'react'
import styles from '@/styles/dashboard.module.css'

const Stat = ({ title, data, caption }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>
        <a
          href="https://github.com/r-jo"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          {title}
        </a>
      </p>
      <p>
        <span>{data}</span> {caption}
      </p>
    </div>
  )
}

export default function GithubStats() {
  const [loading, setLoading] = useState(false)
  const { data } = useSWR('/api/github', fetcher)
  if (!data) {
    return null
  } else
    return (
      <>
        <div className={styles.dashboard}>
          <Stat
            title="Github Stars"
            data={[data ? data.stars : 'Loading']}
            caption="stars collected."
          />
          <Stat
            title="Github Followers"
            data={[data ? data.followers : 'Loading']}
            caption="followers acquired."
          />
          <Stat
            title="Repos Starred"
            data={[data ? data.starred : 'Loading']}
            caption="repos saved."
          />
          <Stat
            title="Organizations"
            data={[data ? data.orgsCont : 'Loading']}
            caption="orgs contributed to."
          />
        </div>
      </>
    )
}
