import socialMediaImagesComponent from "@/components/common/images/socila-media.image";
import { IKeyLabelType } from "@/types/common/key-label.types";
import { FC, SVGProps } from "react";
const { Github, Instagram, Linkedin, Twitter } = socialMediaImagesComponent;
export const socialMediaPortals: Array<IKeyLabelType<string, FC<{}>>> = [
  {
    key: "https://twitter.com",
    label: Twitter,
  },
  {
    key: "https://github.com",
    label: Github,
  },
  {
    key: "https://linkedin.com",
    label: Linkedin,
  },
  {
    key: "https://instagram.com",
    label: Instagram,
  },
];

export const programmingLanguagesUrls = {
  typescript: "https://www.typescriptlang.org/",
  nodejs: "https://nodejs.org/en",
  flutter: "https://flutter.dev/",
  csharp: "https://dotnet.microsoft.com/en-us/",
};
