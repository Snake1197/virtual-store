import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

interface NavButtonProps {
  title: string;
  link: string;
}

function NavButton({ title, link }: NavButtonProps) {
  return (
    <>
      <li className={styles["nav-li"]}>
        <Link className={styles["nav-a"]} to={link}>
          {title}
        </Link>
      </li>
    </>
  );
}

export default NavButton;
