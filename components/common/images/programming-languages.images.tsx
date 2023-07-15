import TypescriptLogo from "@/Images/typescript.png";
import NodeJSLogo from "@/Images/node-js.png";
import FlutterLogo from "@/Images/flutter.png";
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
  alt = "",
  className = "",
  height,
  width,
}) => (
  <Link href={programmingLanguagesUrls.typescript}>
    <Image
      src={TypescriptLogo}
      alt=""
      width={width}
      height={height}
      className={className}
    />
  </Link>
);

const NodeJSImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  alt = "",
  className = "",
  height,
  width,
}) => {
  return (
    <Link href={programmingLanguagesUrls.nodejs}>
      <Image
        src={NodeJSLogo}
        alt=""
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};

const FlutterImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  alt = "",
  className = "",
  height,
  width,
}) => {
  return (
    <Link href={programmingLanguagesUrls.flutter}>
      <Image
        src={FlutterLogo}
        alt=""
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};

const CSharpImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  alt = "",
  className = "",
  height,
  width,
}) => {
  return (
    <Link href={programmingLanguagesUrls.csharp}>
      <Image
        src={CsharpLogo}
        alt=""
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
  Flutter: FlutterImageComponent,
  CSharp: CSharpImageComponent,
};

export default programingLanguageImages;
