import { Link } from "react-router-dom";

interface NavButtonProps {
  title: string;
  link: string;
}

function NavButton({ title, link }: NavButtonProps) {
  return (
    <>
      <li>
        <Link
          className="text-white font-bold text-center list-none inline-block w-[150px] py-[5px] px-0 text-[14px] hover:underline"
          to={link}
        >
          {title}
        </Link>
      </li>
    </>
  );
}

export default NavButton;
