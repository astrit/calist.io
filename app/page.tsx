import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Calist.</h1>
      <figure>
        <Image
          src="/extension.png"
          alt="Calist on Raycast"
          width={2000}
          height={1250}
        />
      </figure>
    </main>
  );
}
