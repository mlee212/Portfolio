//Skeleton Loader for Song Tracks
const n = 10;

const Skeleton = () => {
  return (
    <div
      className="items-baseline border-b-2 border-gray-100 dark:border-shadow-700
     max-w-3xl mt-4 w-full justify-items-center pb-4"
    >
      <div className="animate-pulse bg-gray-300 dark:bg-shadow-700 rounded-md h-6 w-1/3 mb-2"></div>
      <div className="animate-pulse bg-gray-300 dark:bg-shadow-700 rounded-md h-6 w-1/2"></div>
    </div>
  );
};

export default function Loader({ show }) {
  return show ? [...Array(n)].map((e, i) => <Skeleton />) : null;
}
