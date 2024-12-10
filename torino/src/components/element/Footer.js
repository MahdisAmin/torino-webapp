import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div>
          <img src="/images/price.png" />
        </div>
        <div>
          <h4>بصرفه ترین قیمت</h4>
          <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
        </div>
      </div>
      <div className={style.card}>
        <div>
          <img src="/images/support.png" />
        </div>
        <div>
          <h4>پشتیبانی</h4>
          <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
        </div>
      </div>
      <div className={style.card}>
        <div>
          <img src="/images/heart.png" />
        </div>
        <div>
          <h4>رضایت کاربران</h4>
          <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
