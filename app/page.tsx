import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={500}
        height={240}
        priority
      />
      <h1>hello this is a test app</h1>
      <p>this is a next js app deployed on vercel</p>
      <Image
        src="/next.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={500}
        height={240}
        priority
      />
    </main>
  );
}
