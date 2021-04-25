import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";

export default function Custom404() {
  return (
    <Container>
      <div className="flex flex-col">
        <div className="max-w-2xl mx-auto flex flex-col">
          <div className="opacity-10 dark:opacity-100 py-2 flex items-center justify-center">
            <Image
              src="/images/deathstar.png"
              alt="Death Star"
              width={200}
              height={200}
            />
          </div>
          <h3
            className="font-bold text-2xl md:text-4xl py-4 
          text-gray-900 dark:text-shadow-100 z-10 text-center leading-loose space-y-2"
          >
            Did you ever hear the tragedy of Darth Plagueis The Wise?
          </h3>
          <p className="my-2 mt-6">
            I thought not. It’s not a story the Jedi would tell you.
          </p>
          <p className="my-2"> It’s a Sith legend.</p>
          <p className="my-2">
            Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise
            he could use the Force to influence the midichlorians to create
            life… He had such a knowledge of the dark side that he could even
            keep the ones he cared about from dying.
          </p>
          <p className="my-2">
            The dark side of the Force is a pathway to many abilities some
            consider to be unnatural. He became so powerful… the only thing he
            was afraid of was losing his power, which eventually, of course, he
            did.
          </p>
          <p className="my-2">
            Unfortunately, he taught his apprentice everything he knew, then his
            apprentice killed him in his sleep. Ironic. He could save others
            from death, but not himself.
          </p>
          <p className="my-2 mb-6">
            Anyways, you've reached order number 66, the end of the Jedi...I
            suggest you go back before you succumb to the Dark Side.
          </p>

          <Link href="/">
            <button
              className="flex items-center mx-auto px-3 py-1 text-gray-800 dark:text-shadow-200 mb-2
              bg-gray-100 hover:bg-gray-200 dark:bg-shadow-700 dark:hover:bg-shadow-600 rounded-md text-md transition duration-300 ease-in-out"
            >
              ← Back to home
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
