import ImageSlider from "./ImageSlider";
import styles from "./Why.module.css";

function WhyTorino() {
  const images = [
    "/images/pic4.png",
    "/images/pic3.png",
    "/images/pic2.png",
    "/images/pic1.png",
  ];
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <div className={styles.why}>
            <p>؟</p>
          </div>
          <div className={styles.text}>
            چرا <span>تورینو</span> ؟
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.description}>
            <h3>تور طبیعت گردی و تاریخی </h3>
            <p>
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
          <div>
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTorino;
