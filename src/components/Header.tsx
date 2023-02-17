import { List, X } from "phosphor-react";
import { useState } from "react";

export function Header() {
  let Links = [
    { name: "Home", link: "#home" },
    { name: "Sobre mim", link: "#about" },
    { name: "Portfólio", link: "#portfolio" },
    { name: "Contato", link: "#contact" },
  ];
  let [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white dark:bg-zinc-800 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-zinc-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <svg
              width="42"
              height="40"
              viewBox="0 0 42 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.52 7.968C10.032 7.968 14.384 10.368 18.576 15.168C19.856 17.696 20.496 20.144 20.496 22.512C20.496 28.08 17.664 32.176 12 34.8C10.176 35.6 8.208 36 6.096 36H4.896C3.712 35.968 3.12 35.472 3.12 34.512H2.976C2.976 33.648 3.52 33.2 4.608 33.168H5.712V32.88H5.808C3.824 24.464 2.832 18.208 2.832 14.112H2.688L1.488 14.88C0.656 14.88 0.16 14.32 0 13.2C0 11.44 0.992 9.904 2.976 8.592C3.776 8.176 4.624 7.968 5.52 7.968ZM6.096 10.8H5.712V13.104C5.712 18.352 6.704 24.944 8.688 32.88H8.832C14.752 31.28 17.712 27.824 17.712 22.512C17.712 16.816 14.4 13.008 7.776 11.088C7.392 10.896 6.832 10.8 6.096 10.8ZM36.2048 0.959999H36.3488C37.1488 1.376 37.5488 1.84 37.5488 2.352L36.3488 11.472C36.3488 14.8 37.3408 21.696 39.3248 32.16L41.7248 38.16C41.7248 38.576 41.3888 39.04 40.7168 39.552H39.8048C39.1648 39.36 38.2048 37.392 36.9248 33.648C36.0928 30.64 35.2608 26 34.4288 19.728H34.1407C32.2848 25.232 30.9728 28.08 30.2048 28.272L29.4368 28.464C28.7648 28.464 27.9328 27.152 26.9408 24.528H26.6048C26.2208 32.432 25.4688 36.384 24.3488 36.384H24.2048C23.1808 36.384 22.6208 35.584 22.5248 33.984C23.3248 30.912 23.7248 27.712 23.7248 24.384L22.4288 11.664V10.752C22.4288 9.536 22.8608 8.928 23.7248 8.928C24.9728 8.928 26.0768 11.376 27.0368 16.272C28.4448 20.72 29.3088 23.12 29.6288 23.472C30.3648 22.32 31.1008 20.272 31.8368 17.328C32.4128 15.824 32.9728 13.472 33.5168 10.272L33.3248 10.128L33.5168 9.36V9.072C33.8048 3.664 34.7008 0.959999 36.2048 0.959999Z"
                fill="#F97316"
              />
            </svg>
          </span>
        </div>

        <button
          onClick={handleOpenMenu}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <X size={32} /> : <List size={32} />}
        </button>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto 
          z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-20 " : "top-[-490px]"
            }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                onClick={handleOpenMenu}
                className="font-bold text-xl dark:text-zinc-100 dark:hover:text-zinc-200
            hover:underline hover:underline-offset-8 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
