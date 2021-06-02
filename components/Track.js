import styles from '@/styles/track.module.css'

export default function Track(track) {
  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <img src={track.albumArt} className={styles.albumArt} />
        <div>
          <p className={styles.title}>
            <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
              {track.title}
            </a>
          </p>
          <p className={styles.artist}>{track.artist}</p>
        </div>
      </div>
    </div>
  )
}
