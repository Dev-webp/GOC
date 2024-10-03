import Link from "next/link";
import clsx from "clsx";
import {
    BsFacebook,
    BsTwitter,
    BsYoutube,
    BsLinkedin,
    BsInstagram,
} from "react-icons/bs";

export const SocialMediaProfiles = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/vjc_overseas_bangalore?utm_source=qr&igsh=MXZzNXY3dGV1YXg1bw== ",
        icon: BsInstagram,
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/company/vjc-overseas/",
        icon: BsLinkedin,
    },
    {
        title: "Twitter",
        href: "https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09",
        icon: BsTwitter
    },
    {
        title: "Youtube",
        href: "https://www.youtube.com/@vjcoverseas9434",
        icon: BsYoutube,
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/VJCOVERSEAS/",
        icon: BsFacebook,
    },
];

const SocialMedia = ({ className, invert = false }) => {
    return (
        <ul
            role="list"
            className={clsx(
                "flex gap-x-10",
                invert ? "text-white" : "text-neutral-300",
                className
            )}
        >
            {SocialMediaProfiles.map((item) => (
                <li key={item.title}>
                    <Link
                        href={item.href}
                        aria-label={item.title}
                        className={clsx(
                            "transition",
                            invert ? "hover:text-neutral-200" : "hover:text-neutral-400"
                        )}
                    >
                        <item.icon className="h-6 w-6 fill-current" />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialMedia;
