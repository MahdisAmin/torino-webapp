import Image from "next/image";
import Link from "next/link";

import styles from "./not-found.module.css"
export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div>
        <h3>صفحه مورد نظر یافت نشد!</h3>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
      <div>
        <Image
          src="/images/Error Tv.png"
          width={555}
          height={555}
          alt="Error Tv"
        ></Image>
      </div>
    </div>
  );
}
