import Image from "next/image";
import styles from "./page.module.css";
import Inputs from "../components/inputs";
import Cards from "../components/module/Cards";
import Banner from "../components/element/Banner";
import WhyTorino from "../components/element/WhyTorino";

export default async function Home() {
  const data = await getServerSideProps();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/images/banner.png"
          width={1440}
          height={350}
          alt="banner"
        ></Image>
        <div className={styles.decription}>
          <p>
            <span>تورینو</span>
            برگزار کننده بهترین تور های داخلی و خارجی
          </p>
        </div>
        <Inputs />
        <h3>همه تور ها</h3>
        <div className={styles.container}>
          {data.map((item) => (
            <Cards key={item.id} data={item} />
          ))}
        </div>
        <Banner />
        <WhyTorino />
      </main>
    </div>
  );
}

async function getServerSideProps() {
  const res = await fetch("http://localhost:6500/tour");
  const data = await res.json();
  // console.log(data);

  return data;
}
