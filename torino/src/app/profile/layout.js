import AuthProvider from "@/components/provider/AuthProvider";
import Link from "next/link";
import styles from "./Prolayout.module.css";
import { TiUser } from "react-icons/ti";
import { RiSunFoggyFill } from "react-icons/ri";
import { GiCardExchange } from "react-icons/gi";

function ProfileLaypout({ children }) {
  return (
    <AuthProvider>
      <div className={styles.container}>
        <ul>
          <li>
            <Link href="/profile">
              <TiUser style={{ fontSize: "20px", marginBottom: "-5px" }} />
              پروفایل 
            </Link>
          </li>
          <li>
            <Link href="/profile/my-tours">
              <RiSunFoggyFill
                style={{
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginLeft: "3px",
                }}
              />
              تور ها من
            </Link>
          </li>
          <li style={{borderBottom: "none"}}>
            <Link href="/profile/transactions">
              <GiCardExchange
                style={{
                  fontSize: "20px",
                  marginBottom: "-5px",
                  marginLeft: "3px",
                }}
              />
              تراکنش ها
            </Link>
          </li>
        </ul>
        <main>{children}</main>
      </div>
    </AuthProvider>
  );
}

export default ProfileLaypout;
