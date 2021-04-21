//Skeleton Loader for Github cards
const Skeleton = () => {
  return (
    <div className="rounded-lg p-6 bg-shadow-800 transition duration-300 ease-in-out">
      <div className="animate-pulse bg-shadow-700 rounded-md h-6 w-1/2 mb-2"></div>
      <div className="animate-pulse bg-shadow-700 rounded-md h-6 w-2/3"></div>
    </div>
  );
};

export default function Loader({ show }) {
  return show ? (
    <div className="md:flex w-full space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex-1 space-y-4">
        <Skeleton />
        <Skeleton />
      </div>
      <div className="flex-1 space-y-4">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  ) : null;
}
