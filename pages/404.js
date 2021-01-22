import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mt-16 px-8 text-center">
      <div className="fixed flex z-0 opacity-10">
        <Image
          src="/images/deathstar.png"
          alt="Death Star"
          width={500}
          height={500}
        />
      </div>
      <h3 className="font-bold text-2xl md:text-4xl  mb-16 text-black z-10">
        Did you ever hear the tragedy of Darth Plagueis The Wise?
      </h3>
      <p className="text-gray-600 mb-4 md:text-lg text-md z-10">
        I thought not. It’s not a story the Jedi would tell you. It’s a Sith
        legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so
        wise he could use the Force to influence the midichlorians to create
        life… He had such a knowledge of the dark side that he could even keep
        the ones he cared about from dying. The dark side of the Force is a
        pathway to many abilities some consider to be unnatural. He became so
        powerful… the only thing he was afraid of was losing his power, which
        eventually, of course, he did. Unfortunately, he taught his apprentice
        everything he knew, then his apprentice killed him in his sleep. Ironic.
        He could save others from death, but not himself.
        <br />
        <br />
        Anyways, you've reached the 404...and nothing else.
      </p>

      <Link href="/">
        <button className="flex items-center text-sm my-4 mx-auto px-4 py-2 bg-black dark:bg-cardbgdark rounded-md font-medium text-white dark:text-gray-100 md:text-lg text-md transition duration-400 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
          ← Back to home
        </button>
      </Link>
    </div>
  );
}
