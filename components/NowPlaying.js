import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import styles from '@/styles/track.module.css'

export default function NowPlaying() {
  const { data } = useSWR('/api/nowplaying', fetcher)

  return (
    <>
      {data?.songUrl ? (
        <>
          <p>Now currently playing - </p>
          <div className={styles.nowplaying}>
            <div className={styles.info}>
              <img src={data?.albumArt} className={styles.albumArt} />
              <div>
                <p className={styles.title}>
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data?.title}
                  </a>
                </p>
                <p className={styles.artist}>{data?.artist}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.nowplaying}>
          <div className={styles.info}>
            <img src="/assets/spotify.png" className={styles.albumArt} />
            <div>
              <p className={styles.title}>Not currently playing</p>
              <p className={styles.artist}>Spotify</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
