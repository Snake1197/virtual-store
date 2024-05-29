import styles from './NavButton.module.css'


interface NavButtonProps {
    title: string;
    link: string;
}

function NavButton({ title, link }: NavButtonProps) {
    return (
        <>
        <li className={styles["nav-li"]}>
            <a className={styles["nav-a"]} href={link}>
                {title}
            </a>
        </li>
</>
    );
}


export default NavButton