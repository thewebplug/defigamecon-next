import { useState } from "react";
import Logo from "@/public/assets/logo.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header({ active, setActive }) {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    router.push(`/search?event=${text}`);
  };

  return (
    <>
      <header className="header">
        <Link className="header__logo" href="/">
          <Image src={Logo} alt="" />
          <div>
            DEFI <br />
            GAMECON
          </div>
        </Link>

        <form className="header__form" onSubmit={handleSubmit}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 19C12 15.134 15.134 12 19 12C22.866 12 26 15.134 26 19C26 20.8859 25.2542 22.5977 24.0414 23.8563C24.0072 23.8827 23.9743 23.9115 23.9429 23.9429C23.9115 23.9743 23.8827 24.0072 23.8563 24.0414C22.5977 25.2542 20.8859 26 19 26C15.134 26 12 22.866 12 19ZM24.6177 26.0319C23.078 27.2635 21.125 28 19 28C14.0294 28 10 23.9706 10 19C10 14.0294 14.0294 10 19 10C23.9706 10 28 14.0294 28 19C28 21.125 27.2635 23.078 26.0319 24.6177L29.7071 28.2929C30.0976 28.6834 30.0976 29.3166 29.7071 29.7071C29.3166 30.0976 28.6834 30.0976 28.2929 29.7071L24.6177 26.0319Z"
              fill="white"
              fillOpacity="1"
            />
          </svg>

          <input
            className="header__form__input"
            type="text"
            placeholder="Search events"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <nav className="header__nav">
          <Link prefetch={false} href="/#games">
            Games
          </Link>
          <Link prefetch={false} href="/#upcoming-events">
            Upcoming events
          </Link>
          {/* Connect this to a discord community */}
          <div>Community</div>
          <Link prefetch={false} href="/#past-events">
            Past events
          </Link>
        </nav>
        <button className="header__button">Contact us</button>
        {!active && (
          <div
            onClick={() => (active ? setActive(false) : setActive(true))}
            className={
              !active
                ? "header__hamburger"
                : "header__hamburger header__hamburger-active"
            }
          >
            <div className="header__hamburger__hamburger1"></div>
            <div className="header__hamburger__hamburger2"></div>
            <div className="header__hamburger__hamburger3"></div>
          </div>
        )}
      </header>
      <div className={active ? "sidebar" : "sidebar sidebar-none"}>
        {active && (
          <div
            onClick={() => (active ? setActive(false) : setActive(true))}
            className={
              !active
                ? "header__hamburger"
                : "header__hamburger header__hamburger-active"
            }
          >
            <div className="header__hamburger__hamburger1"></div>
            <div className="header__hamburger__hamburger2"></div>
            <div className="header__hamburger__hamburger3"></div>
          </div>
        )}
        <form className="sidebar__form" onSubmit={handleSubmit}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 19C12 15.134 15.134 12 19 12C22.866 12 26 15.134 26 19C26 20.8859 25.2542 22.5977 24.0414 23.8563C24.0072 23.8827 23.9743 23.9115 23.9429 23.9429C23.9115 23.9743 23.8827 24.0072 23.8563 24.0414C22.5977 25.2542 20.8859 26 19 26C15.134 26 12 22.866 12 19ZM24.6177 26.0319C23.078 27.2635 21.125 28 19 28C14.0294 28 10 23.9706 10 19C10 14.0294 14.0294 10 19 10C23.9706 10 28 14.0294 28 19C28 21.125 27.2635 23.078 26.0319 24.6177L29.7071 28.2929C30.0976 28.6834 30.0976 29.3166 29.7071 29.7071C29.3166 30.0976 28.6834 30.0976 28.2929 29.7071L24.6177 26.0319Z"
              fill="white"
              fillOpacity="1"
            />
          </svg>

          <input
            className="header__form__input"
            type="text"
            placeholder="Search events"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <Link prefetch={false} href="/#games">
              Games
            </Link>
            <Link prefetch={false} href="/#upcoming-events">
              Upcoming events
            </Link>
                    <div>Community</div>
                    <Link prefetch={false} href="/#past-events">Past events</Link>

        <button className="sidebar__button">Contact us</button>
      </div>
    </>
  );
}
