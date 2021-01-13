import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-4">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Did you ever hear the tragedy of Darth Plagueis The Wise?
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg md:text-md">
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

      <Link href="/">← Back to home</Link>
    </div>
  );
}
