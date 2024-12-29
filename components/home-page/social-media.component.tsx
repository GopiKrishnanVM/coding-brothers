import { socialMediaPortals } from "@/constants/social-media/social-media.constants";
import Link from "next/link";

const SocialMediaCOmponent: React.FC = () => {
  return (
    <>
      <div className="mt-6 flex gap-6">
        {socialMediaPortals.map((media, index) => {
          return (
            <Link
              key={media.key + index}
              href={media.key}
              target="_blank"
              className="group -m-1 p-1"
            >
              <media.label />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SocialMediaCOmponent;
