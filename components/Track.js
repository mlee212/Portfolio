// Full Credit to Lee Robinson

export default function Track(track) {
  return (
    <div className="flex flex-row items-baseline border-b border-grey4-light dark:border-grey4-dark max-w-3xl w-full mt-8">
      <p className="text-md text-grey-light dark:text-gray-dark">
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
          className="mb-4 truncate w-60 sm:w-96 md:w-full md:text-lg text-md text-grey2-dark dark:text-grey-light"
        >
          {track.artist}
        </p>
      </div>
    </div>
  );
}
