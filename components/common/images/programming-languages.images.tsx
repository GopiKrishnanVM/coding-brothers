import TypescriptLogo from "@/Images/typescript.png";
import NodeJSLogo from "@/Images/node-js.png";
import FlutterLogo from "@/Images/flutter.png";
import CsharpLogo from "@/Images/Csharp.png";

import Image from "next/image";

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
}) => {
  return (
    <Image
      src={TypescriptLogo}
      alt=""
      width={width}
      height={height}
      className={className}
    />
  );
};

const NodeJSImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  alt = "",
  className = "",
  height,
  width,
}) => {
  return (
    <Image
      src={NodeJSLogo}
      alt=""
      width={width}
      height={height}
      className={className}
    />
  );
};

const FlutterImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  alt = "",
  className = "",
  height,
  width,
}) => {
  return (
    <Image
      src={FlutterLogo}
      alt=""
      width={width}
      height={height}
      className={className}
    />
  );
};

const CSharpImageComponent: React.FC<IProgramingLanguageImageProps> = ({
  alt = "",
  className = "",
  height,
  width,
}) => {
  return (
    <Image
      src={CsharpLogo}
      alt=""
      width={width}
      height={height}
      className={className}
    />
  );
};

const programingLanguageImages = {
  Typescript: TypescriptImageComponent,
  NodeJS: NodeJSImageComponent,
  Flutter: FlutterImageComponent,
  CSharp: CSharpImageComponent,
};

export default programingLanguageImages;
