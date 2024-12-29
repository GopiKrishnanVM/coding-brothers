import "./globals.css";
import { Inter } from "next/font/google";
import "focus-visible";
// eslint-disable-next-line @next/next/no-document-import-in-page
import HeaderComponent from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next/types";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Gopi Krishnan V M | Full Stack Developer & Cloud Solutions Architect",
  description:
    "Welcome to the personal website of Gopi Krishnan V M, a Full Stack Developer and Cloud Solutions Architect specializing in .NET, Node.js, MongoDB, AWS, Elasticsearch, and scalable digital solutions.",
  keywords: [
    "Gopi Krishnan V M",
    "Full Stack Developer",
    ".NET Developer",
    "Node.js Developer",
    "Cloud Solutions Architect",
    "AWS Certified AI Practitioner",
    "AWS Cloud Practitioner",
    "MongoDB Expert",
    "Elasticsearch Optimization",
    "Scalable Web Applications",
    "React.js",
    "TypeScript",
    "Flutter",
    "Next.js Developer",
    "B2B CRM Solutions",
    "Web Application Development",
    "LinkedIn",
    "GitHub",
  ],
  authors: [
    {
      name: "Gopi Krishnan V M",
      url: "https://gopikrishnanvm.com",
    },
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title:
      "Gopi Krishnan V M | Full Stack Developer & Cloud Solutions Architect",
    description:
      "Explore the portfolio and achievements of Gopi Krishnan V M, a versatile developer and architect creating scalable cloud-based solutions.",
    url: "https://gopikrishnanvm.com",
    type: "website",
    images: [
      {
        url: "https://front-end-assetz.s3.eu-north-1.amazonaws.com/1573053033229.jpeg", // Your profile image URL
        alt: "Gopi Krishnan V M",
      },
    ],
  },
};

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="en" className="h-full">
//       <body className={`${inter.className} h-full`}>{children}</body>
//     </html>
//   );
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="h-full antialiased no-scrollbar" lang="en">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-full lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative">
            <HeaderComponent />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="h-full">
//       <body className={`${inter.className} h-full`}>{children}</body>
//     </html>
//   );
// }
