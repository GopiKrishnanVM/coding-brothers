import TypescriptLogo from "@/Images/typescript.png";
import NodeJSLogo from "@/Images/node-js.png";
import AWSLogo from "@/Images/aws.png";
import CsharpLogo from "@/Images/Csharp.png";

import Image from "next/image";
import Link from "next/link";
import { programmingLanguagesUrls } from "@/constants/social-media/social-media.constants";

export interface IProgramingLanguageImageProps {
  alt: string;
  width: number;
  height: number;
  className: string;
}

const TypescriptImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  className = "",
  height,
  width,
}) => (
  <Link href={programmingLanguagesUrls.typescript}>
    <Image
      src={TypescriptLogo}
      alt={programmingLanguagesUrls.typescript}
      width={width}
      height={height}
      className={className}
    />
  </Link>
);

const NodeJSImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  className = "",
  height,
  width,
}) => {
  return (
    <Link href={programmingLanguagesUrls.nodejs}>
      <Image
        src={NodeJSLogo}
        alt={programmingLanguagesUrls.nodejs}
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};

const AWSImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  className = "",
  height,
  width,
}) => {
  return (
    <Link href={programmingLanguagesUrls.aws}>
      <Image
        src={AWSLogo}
        alt={programmingLanguagesUrls.aws}
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};

const CSharpImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  className = "",
  height,
  width,
}) => {
  return (
    <Link href={programmingLanguagesUrls.csharp}>
      <Image
        src={CsharpLogo}
        alt={programmingLanguagesUrls.csharp}
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};

const programingLanguageImages = {
  Typescript: TypescriptImageComponent,
  NodeJS: NodeJSImageComponent,
  AWS: AWSImageComponent,
  CSharp: CSharpImageComponent,
};

export default programingLanguageImages;
