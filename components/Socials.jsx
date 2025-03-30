import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, url: "https://github.com/Shobhit186"},
    {icon: <FaLinkedin />, url: "https://www.linkedin.com/in/s-d01"},
]
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => (
            <Link href={social.url} key={index} target="_blank" rel="noopener noreferrer" className={iconStyles}>{social.icon}</Link>
        ))}
    </div>
  )
}

export default Socials