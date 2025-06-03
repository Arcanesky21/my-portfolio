import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/Arcanesky21"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/mikarlo-francis-a8a65b20b/"
  }
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((link) => (
        <Link key={link.name} href={link.url} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {link.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social