// Full Credit to Lee Robinson

export default function Track(track) {
  return (
    <div className="flex flex-row items-baseline border-b-2 border-shadow-700 max-w-3xl
     mt-4 w-full justify-items-center">
      <p>
        {track.ranking}
      </p>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium text-shadow-100 truncate w-60 sm:w-96 md:w-full text-md hover:underline"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p
          className="mb-4 truncate w-60 sm:w-96 md:w-full text-shadow-300">
          {track.artist}
        </p>
      </div>
    </div>
  );
}
