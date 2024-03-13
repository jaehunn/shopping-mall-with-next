import Image from "next/image";

// import NextIcon from "~/../public/next.svg";

import vercelIconUrl from "~/../public/vercel.svg?url";

type Props = {
  // ...
};

export default function Home({}: Props) {
  return (
    <main>
      <Image src={vercelIconUrl} alt="" width={200} height={200} />

      {/* <NextIcon width={200} height={200} /> */}
    </main>
  );
}
