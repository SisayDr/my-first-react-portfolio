import { SiGithub } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
function Footer() {
  return (
    <footer className="bg-gray-300 p-5 mt-5 space-y-2">
      <p className="flex gap-6 justify-center">
        <a href="https://github.com/SisayDr">
          <SiGithub size={32} />
        </a>
        <a href="https://t.me/Sisay_Dr">
          <SiTelegram size={32} style={{ fill: "#1d94cf" }} />
        </a>
      </p>
      <p className="text-center font-mono text-lg">&copy; SisayDr 2023</p>
    </footer>
  );
}

export default Footer;
