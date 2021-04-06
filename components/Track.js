// Full Credit to Lee Robinson

export default function Track(track) {
  return (
    <div className="flex flex-row items-baseline border-b-2 border-border-light dark:border-border-dark max-w-3xl mt-4 w-full justify-items-center transition duration-300 ease-in-out">
      <p className="text-md text-gray-500 dark:text-gray-300">
        {track.ranking}
      </p>
      <div className="flex flex-col pl-3">
        <a
          className="underline font-medium text-title-light dark:text-title-dark truncate w-60 sm:w-96 md:w-full md:text-lg text-md"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p
          className="mb-4 truncate w-60 sm:w-96 md:w-full md:text-lg text-md text-gray-500 dark:text-gray-300"
        >
          {track.artist}
        </p>
      </div>
    </div>
  );
}
