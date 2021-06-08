import Link from 'next/link'
import { getDatabase } from '@/lib/notion'
import Layout from '@/components/Layout'
import { Text } from '@/components/Text'
import { RightArrow } from '@/components/icons/icons'
import styles from '@/styles/readings.module.css'

export const databaseId = process.env.NOTION_DATABASE_ID

export default function Readings({ posts }) {
  return (
    <Layout>
      <div>
        <h1>Readings</h1>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              'en-US',
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              }
            )
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} /> <RightArrow />
                    </a>
                  </Link>
                </h3>
                <p className={styles.postDescription}>{date}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}
