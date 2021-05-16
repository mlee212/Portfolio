import styles from '@/styles/track.module.css'

export default function Track(track) {
  return (
    <div className={styles.track}>
      <p className={styles.rank}>{track.ranking}</p>
      <div className={styles.info}>
        <p className={styles.title}>
          <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
            {track.title}
          </a>
        </p>
        <p className={styles.artist}>{track.artist}</p>
      </div>
    </div>
  )
}
