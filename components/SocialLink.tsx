import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

export default function SocialLink() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Link href="mailto:jrmy.gulliet@gmail.com" aria-label="contact mail">
        <IoIosMail
          color="#a179e0"
          className="size-6 transition duration-150 ease-in-out hover:scale-105 md:size-8"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jérémy-gulliet"
        aria-label="linkedin"
        target="_blank"
      >
        <FaLinkedinIn
          color="#a179e0"
          className="size-6 transition duration-150 ease-in-out hover:scale-105 md:size-8"
        />
      </Link>
      <Link
        href="https://github.com/JeremyGulliet"
        aria-label="linkedin"
        target="_blank"
      >
        <FaGithub
          color="#a179e0"
          className="size-6 transition duration-150 ease-in-out hover:scale-105 md:size-8"
        />
      </Link>
    </div>
  );
}
