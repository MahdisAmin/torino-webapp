import { howmanyDats, toPersianNumber } from "@/utils/extras";
import styles from "../../styles/DetailPage.module.css";
import { TbRouteSquare } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { SiSpringsecurity } from "react-icons/si";
import { FaBusSimple } from "react-icons/fa6";
import Link from "next/link";
import moment from "jalali-moment";
import { useAddToBasket } from "@/core/services/mutations";
async function fetchData(id) {
  const res = await fetch(`http://localhost:6500/tour/${id}`, {
    cache: "no-store",
  });
  const data = res.json();
  return data;
}

async function DetailPage({ params }) {
  const data = await fetchData(params.id);

  const {
    image,
    title,
    startDate,
    endDate,
    options,
    price,
    origin,
    fleetVehicle,
    availableSeats,
    insurance,
    id
  } = data;
 

  const perStartDay = moment(startDate, "YYYY-MM-DD")
    .locale("fa")
    .format("jD jMMMM jYYYY");
  const perEndtDay = moment(endDate, "YYYY-MM-DD")
    .locale("fa")
    .format("jD jMMMM jYYYY");
  const day = howmanyDats(startDate, endDate);
  const night = +day - 1;
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.details}>
          <div>
            <img src={image} />
          </div>
          <div className={styles.info}>
            <h1>{title}</h1>
            <p>
              {toPersianNumber(day)} روز و {toPersianNumber(night)} شب
            </p>
            <span>{options[0]}</span>
            <span> {options[1]}</span>
            <div className={styles.reserve}>
              <p>
                {toPersianNumber(price)} <span>تومان</span>
              </p>
              <Link
                href={`/user?title=${title}&price=${price}&startDate=${startDate}&endDate=${endDate}`}
              >
                رزرو و خرید
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.moreDetails}>
          <div>
            <TbRouteSquare />
            <span>مبدا</span>
            <p>{origin.name}</p>
          </div>
          <div>
            <FaCalendarAlt />
            <span>تاریخ رفت</span>
            <p>{perStartDay}</p>
          </div>
          <div>
            <FaCalendarAlt />
            <span>تاریخ برگشت</span>
            <p>{perEndtDay}</p>
          </div>
          <div>
            <FaBusSimple />
            <span>حمل و نقل</span>
            <p>{fleetVehicle}</p>
          </div>
          <div>
            <HiUsers />
            <span>ظرفیت</span>
            <p> حداکثر {toPersianNumber(availableSeats)} نفر</p>
          </div>
          <div style={{ border: "none" }}>
            <SiSpringsecurity />
            <span>بیمه</span>
            <p>{insurance ? "دارد" : "ندارد"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
