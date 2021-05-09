import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import { LeftArrow } from "../public/images/icons/icons";

export default function Custom404() {
  return (
    <Container>
      <Head>
        <title>Rajbir Johar | Uh oh</title>
      </Head>
      <section>
        <h1 className="font-bold text-3xl text-mist">
          How Did You End Up Here?
        </h1>
        <div className="my-2 mt-4 space-y-2">
          <p>
            I must have done something gravely wrong for you to find this page.
          </p>
        </div>
        <Link href="/">
          <button
            className="flex items-center px-3 py-1 
            text-thunder dark:text-cararra mt-6 mb-2
            bg-lilac dark:bg-stormcloud rounded-md
            transition duration-300 ease-in-out"
          >
            <LeftArrow /> Back to home
          </button>
        </Link>
      </section>
    </Container>
  );
}
