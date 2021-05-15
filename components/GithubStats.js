import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Loader from './GithubLoader'
import react, { useState } from 'react'

const Stat = ({ title, data, caption }) => {
  return (
    <a
      href="https://github.com/r-jo"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="rounded-lg p-6 bg-lilac dark:bg-stormcloud mb-4">
        <h4 className="group-hover:underline font-medium">{title}</h4>
        <p className="font-medium">
          {data} <span className="font-normal">{caption}</span>
        </p>
      </div>
    </a>
  )
}

export default function GithubStats() {
  const [loading, setLoading] = useState(false)
  const { data } = useSWR('/api/github', fetcher)
  if (!data) {
    return <Loader show />
  } else
    return (
      <div className="md:flex w-full space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 space-y-4">
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
        </div>
        <div className="flex-1 space-y-4">
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
      </div>
    )
}
