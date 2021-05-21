import Head from 'next/head'
import Layout from '@/components/Layout'
import ProjectList from '@/components/ProjectList'
import Dashboard from '@/components/Dashboard'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Projects</title>
      </Head>
      <section>
        <h1>Projects</h1>
        <p>
          Here is a collection of my best work where I demonstrate my skills as
          a <span>developer and a creator.</span> You can also see a more
          detailed view on my{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/r-jo"
          >
            Github
          </a>
          .
        </p>
        <h2>Dashboard</h2>
        <p>
          My github dashboard containing live statistics on my github profile.
          This uses Github's official REST API to access the data you see.
          Follow me and watch the numbers update.
        </p>
        <Dashboard />
        <h2>Contributed Projects</h2>
        <p>
          These projects are also pulled from my Github profile as a list of all
          the repos I created or forked.
        </p>
        <ProjectList />
        <h2>Try Yourself</h2>
        <h3>Environment Variables</h3>
        <p>
          <i>
            Try cloning/forking is repo on your own machine. Then head to Github
            account settings &gt; Developer Settings &gt; Personal Tokens &gt;
            Generate New Token. Then check the <span>user box.</span>
          </i>
        </p>
        <p>
          <i>
            Then within the root of the project, type{' '}
            <code>touch .env.local</code> to create a new{' '}
            <code>.env.local</code> file. Open up the file and paste in your new
            secret key like shown below without <code>&lt;&gt;</code>.
          </i>
        </p>
        <p>
          <i>
            <span>Warning!</span> If you decide to deploy, it is good practice
            not to commit any secret keys from your <code>.env</code> files.
          </i>
        </p>
        <pre>GITHUB_AUTH_TOKEN=&lt;SECRET-GH-TOKEN&gt;</pre>
        <p>
          <i>
            Once you've completed the above steps, your copy of this website
            should generate statistics and projects from your own Github
            profile.
          </i>
        </p>
        <p>
          <i>Need a correction? Feel free to make a</i>{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/r-jo/Portfolio"
          >
            pull request
          </a>
          .
        </p>
      </section>
    </Layout>
  )
}
