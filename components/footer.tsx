import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 py-5 w-full flex flex-col items-center gap-5 border-t-2 border-gray-400 mt-20">
      <div className="flex flex-col md:flex-row justify-between w-full gap-3 max-w-screen-lg mx-auto">
        <p className="flex items-center gap-3">
          <svg className="w-8 h-8" width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.6457 50.9952C61.1474 50.9952 87.6739 66.3552 113.225 97.0752C121.027 113.254 124.928 128.922 124.928 144.077C124.928 179.712 107.666 205.926 73.1429 222.72C62.0251 227.84 50.0297 230.4 37.1566 230.4H29.8423C22.6255 230.195 19.0171 227.021 19.0171 220.877H18.1394C18.1394 215.347 21.4552 212.48 28.0869 212.275H34.816V210.432H35.4011C23.3082 156.57 17.2617 116.531 17.2617 90.3168H16.384L9.06971 95.232C3.99848 95.232 0.975238 91.648 0 84.48C0 73.216 6.04648 63.3856 18.1394 54.9888C23.0156 52.3264 28.1844 50.9952 33.6457 50.9952ZM37.1566 69.12H34.816V83.8656C34.816 117.453 40.8625 159.642 52.9554 210.432H53.8331C89.917 200.192 107.959 178.074 107.959 144.077C107.959 107.622 87.7714 83.2512 47.3966 70.9632C45.056 69.7344 41.6427 69.12 37.1566 69.12ZM220.677 6.14398H221.555C226.431 8.80639 228.869 11.776 228.869 15.0528L221.555 73.4208C221.555 94.72 227.601 138.854 239.694 205.824L254.323 244.224C254.323 246.886 252.275 249.856 248.179 253.133H242.62C238.719 251.904 232.867 239.309 225.065 215.347C219.994 196.096 214.923 166.4 209.852 126.259H208.096C196.784 161.485 188.787 179.712 184.105 180.941L179.424 182.17C175.328 182.17 170.257 173.773 164.211 156.979H162.163C159.822 207.565 155.238 232.858 148.412 232.858H147.534C141.292 232.858 137.879 227.738 137.294 217.498C142.17 197.837 144.608 177.357 144.608 156.058L136.709 74.6496V68.8128C136.709 61.0304 139.342 57.1392 144.608 57.1392C152.215 57.1392 158.944 72.8064 164.796 104.141C173.378 132.608 178.644 147.968 180.595 150.221C185.081 142.848 189.567 129.741 194.053 110.899C197.564 101.274 200.977 86.2208 204.293 65.7408L203.123 64.8192L204.293 59.904V58.0608C206.048 23.4496 211.51 6.14398 220.677 6.14398Z" fill="#F97316" />
          </svg>
          <strong>
            Denis - </strong>contato.denismedeiros@hotmail.com</p>
        <div className="">
          <p className="font-medium">Social Media</p>
          <div className="flex gap-2 mt-2">
            <Link target="_blank" className="text-gray-400 hover:text-gray-500" href="https://github.com/DenisMedeirosSDK" ><Github /></Link>
            <Link target="_blank" className="text-gray-400 hover:text-gray-500" href="https://www.linkedin.com/in/denis-medeiros" ><Linkedin /></Link>
          </div>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400">© copyright {new Date().getFullYear()} - Denis Medeiros.</p>
    </footer>
  )
}