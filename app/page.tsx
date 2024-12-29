import SocialMediaCOmponent from "@/components/home-page/social-media.component";
import ProgrammingLanguagesComponent from "@/components/home-page/programming-languages.component";
import { homePageTrendingArticles } from "@/constants/articles/trending-articles.constant";
import TrendingArticleHomePageComponent from "@/components/home-page/trending-article.component";
import socialMediaImagesComponent from "@/components/common/images/socila-media.image";
import CosImage from "@/Images/cos.jpeg";
import NextImage from "next/image";
import EdvoyImg from "@/Images/edvoy.jpeg";
import AWSImage from "@/Images/aws.png";

import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <div className="sm:px-8 mt-9">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Crafting Scalable Digital Solutions: Cloud Architect & Full
                  Stack Innovator
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I’m Gopi Krishnan V M, a Full Stack Developer and Cloud
                  Architect specializing in .NET, React.js, Node.js, and cloud
                  platforms like AWS and Azure. With a focus on scalability,
                  reliability, and performance, I deliver secure, high-impact
                  solutions tailored for global deployment.
                </p>
                <SocialMediaCOmponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <ProgrammingLanguagesComponent />
      </div>
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  {homePageTrendingArticles.map((article, index) => (
                    <TrendingArticleHomePageComponent
                      key={article.url + index}
                      article={article}
                    />
                  ))}
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <socialMediaImagesComponent.Linkedin />
                      <span className="ml-3">Connect with me!</span>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Let’s connect on LinkedIn and grow together by sharing
                      knowledge, ideas, and opportunities to create impactful
                      solutions!
                    </p>
                    <div className="mt-6 flex">
                      <a
                        href="https://www.linkedin.com/in/gopi-krishnan-vm-511492194"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-0 flex-none"
                      >
                        Connect Now
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none"
                      >
                        <path
                          d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                        ></path>
                        <path
                          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                          className="stroke-zinc-400 dark:stroke-zinc-500"
                        ></path>
                      </svg>
                      <span className="ml-3">Work</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      {/* Edvoy - Development Team Lead */}

                      {/* Edvoy - Project Lead Developer */}
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <NextImage
                            alt="Edvoy"
                            src={EdvoyImg}
                            fill
                            className="rounded-full"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Edvoy Technologies Pvt Ltd
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Project Lead Developer
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2024 until 2024"
                          >
                            <time dateTime="2024-08">Aug 2024</time>
                            <span aria-hidden="true">—</span>
                            <time dateTime="2024-12">Dec 2024</time>
                          </dd>
                        </dl>
                      </li>

                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <NextImage
                            alt="Edvoy"
                            src={EdvoyImg}
                            fill
                            className="rounded-full"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Edvoy Technologies Pvt Ltd
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Development Team Lead
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2021 until 2024"
                          >
                            <time dateTime="2021-04">Apr 2021</time>
                            <span aria-hidden="true">—</span>
                            <time dateTime="2024-12">Aug 2024</time>
                          </dd>
                        </dl>
                      </li>

                      {/* Cochin Computing Studio */}
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <NextImage
                            alt="Cochin Computing Studio"
                            src={CosImage}
                            fill
                            className="rounded-full"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Cochin Computing Studio and Research Centre Private
                            Limited
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Full Stack Engineer
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2019 until 2021"
                          >
                            <time dateTime="2019-12">Dec 2019</time>
                            <span aria-hidden="true">—</span>
                            <time dateTime="2021-04">Apr 2021</time>
                          </dd>
                        </dl>
                      </li>
                    </ol>
                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                      href="https://front-end-assetz.s3.eu-north-1.amazonaws.com/GOPI+KRISHNAN+14_11_2024.pdf "
                      target="_blank"
                    >
                      Download Resume{" "}
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                      >
                        <path
                          d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <svg
                        className="h-6 w-6 flex-none"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="ml-3">Certifications</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      <NextLink
                        href="https://www.credly.com/badges/19857fab-dc3d-4c86-90b3-d55d6a515785/public_url"
                        target="_blank"
                      >
                        <li className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <NextImage
                              alt="Edvoy"
                              src={AWSImage}
                              fill
                              className="rounded-full object-contain bg-white p-1"
                            />
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Certificate Name</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              AWS Cloud Practitioner
                            </dd>
                            <dt className="sr-only">Provider</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Amazon Web Services
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label="2024 until 2024"
                            >
                              <time dateTime="2024-08">Dec 2024</time>
                              <span aria-hidden="true">—</span>
                              <time dateTime="2024-12">Dec 2027</time>
                            </dd>
                          </dl>
                        </li>
                      </NextLink>
                      <NextLink
                        href="https://www.credly.com/badges/16562364-a88c-4303-ba43-223f6127759a/public_url"
                        target="_blank"
                        className="m-2"
                      >
                        <li className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <NextImage
                              alt="Edvoy"
                              src={AWSImage}
                              fill
                              className="rounded-full object-contain bg-white p-1"
                            />
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Certificate Name</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              AWS AI Practitioner
                            </dd>
                            <dt className="sr-only">Provider</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Amazon Web Services
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label="2024 until 2024"
                            >
                              <time dateTime="2024-08">Dec 2024</time>
                              <span aria-hidden="true">—</span>
                              <time dateTime="2024-12">Dec 2024</time>
                            </dd>
                          </dl>
                        </li>
                      </NextLink>
                      <NextLink
                        href="https://www.linkedin.com/learning/certificates/b7ed6599b6d96784fb2f16e560efbff6e231feec6110a37e28adba55e8164fac"
                        target="_blank"
                        className="m-2"
                      >
                        <li className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            {/* <socialMediaImagesComponent.Linkedin /> */}
                            <NextImage
                              alt="Edvoy"
                              src={
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Linkedin_circle.svg/1024px-Linkedin_circle.svg.png"
                              }
                              fill
                              className="rounded-full object-contain bg-white"
                            />
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Certificate Name</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              Agile Project Leadership
                            </dd>
                            <dt className="sr-only">Provider</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Linkedin
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label="2024 until 2024"
                            >
                              <time dateTime="2024-08">July 2024</time>
                              <span aria-hidden="true">—</span>
                              <time dateTime="2024-12">No Expiry</time>
                            </dd>
                          </dl>
                        </li>
                      </NextLink>
                      <NextLink
                        href="https://www.udemy.com/certificate/UC-VGTJLA5W/"
                        target="_blank"
                        className="m-2"
                      >
                        <li className="flex gap-4">
                          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 object-contain">
                            {/* <socialMediaImagesComponent.Udemy /> */}
                            <NextImage
                              alt="Edvoy"
                              src={
                                "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg"
                              }
                              fill
                              className="rounded-full object-contain bg-white p-1"
                            />
                          </div>
                          <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Certificate Name</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              React - The Complete Guide (incl Hooks, React
                              Router, Redux)
                            </dd>
                            <dt className="sr-only">Provider</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              Udemy
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                              aria-label="2024 until 2024"
                            >
                              <time dateTime="2024-08">Jan 2020</time>
                              <span aria-hidden="true">—</span>
                              <time dateTime="2024-12">No Expiry</time>
                            </dd>
                          </dl>
                        </li>
                      </NextLink>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
