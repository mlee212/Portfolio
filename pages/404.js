import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import { LeftArrow } from '@/components/icons/icons'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Rajbir Johar | Uh oh</title>
      </Head>
      <section>
        <h1>How Did You End Up Here?</h1>
        <p>
          I must have done something gravely wrong for you to find this page.
        </p>
        <Link href="/">
          <button className={styles.button}>
            <LeftArrow /> Back home
          </button>
        </Link>
      </section>
    </Layout>
  )
}
