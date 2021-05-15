// Full Credit to Lee Robinson
import { motion } from 'framer-motion'

export default function Track(track) {
  return (
    <div className="flex flex-row items-baseline py-2 w-full">
      <p>{track.ranking}</p>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium truncate w-60 sm:w-96 md:w-full text-md text-boulder dark:text-mobster hover:underline"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="truncate w-60 sm:w-96 md:w-full">{track.artist}</p>
      </div>
    </div>
  )
}
