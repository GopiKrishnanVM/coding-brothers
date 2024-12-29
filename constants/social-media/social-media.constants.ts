import socialMediaImagesComponent from "@/components/common/images/socila-media.image";
import { IKeyLabelType } from "@/types/common/key-label.types";
import { FC, SVGProps } from "react";
const { Github, Instagram, Linkedin, Twitter } = socialMediaImagesComponent;
export const socialMediaPortals: Array<IKeyLabelType<string, FC<{}>>> = [
  {
    key: "https://github.com/GopiKrishnanVM",
    label: Github,
  },
  {
    key: "https://www.linkedin.com/in/gopi-krishnan-vm-511492194",
    label: Linkedin,
  },
  // {
  //   key: "https://instagram.com",
  //   label: Instagram,
  // },
];

export const programmingLanguagesUrls = {
  typescript: "https://www.typescriptlang.org/",
  nodejs: "https://nodejs.org/en",
  aws: "https://aws.amazon.com/",
  csharp: "https://dotnet.microsoft.com/en-us/",
};
