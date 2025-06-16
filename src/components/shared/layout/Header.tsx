import { Link } from "react-router";
import { ModeToggle } from "../theme/mode-toggle";

const Header = () => {
  const nav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Demo",
      link: "/demo",
    },
  ];

  return (
    <div className="flex justify-between items-center p-10">
      <ModeToggle />
      <nav>
        <ul className="flex gap-5">
          {nav.map((item) => (
            <li key={item.title}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
