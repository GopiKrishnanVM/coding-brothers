import Link from "next/link";
import NextImage from "next/image";
import clsx from "clsx";
import avatarImage from "@/Images/avatar.jpg";
import headerLogo from "@/Images/Logo.jpeg";

interface Prop {
  className?: String;
  large: boolean;
}

const UserAvatar: React.FC<Prop> = ({ className, large = false }) => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
    >
      <NextImage
        src={avatarImage}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
        priority
      />
    </Link>
  );
};
export default UserAvatar;
export const HeaderLogo: React.FC<Prop> = ({ className, large = false }) => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
    >
      <NextImage
        src={headerLogo}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
        priority
      />
    </Link>
  );
};
