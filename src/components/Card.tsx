interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="flex flex-row bg-zinc-100 dark:bg-zinc-800  rounded-lg justify-center items-center h-28 px-7">
      <div className="flex justify-center items-center mr-14 bg-zinc-200 rounded-full w-16 h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <rect
            x="32"
            y="72"
            width="192"
            height="144"
            rx="8"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></rect>
          <path
            d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
          <path
            d="M224,126.3A191.3,191.3,0,0,1,128,152a190.3,190.3,0,0,1-96-25.7"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
          <line
            x1="116"
            y1="120"
            x2="140"
            y2="120"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
        </svg>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-brand-300 font-bold text-3xl">{title}</p>
        <p className="font-bold">{description}</p>
      </div>
    </div>
  );
}
