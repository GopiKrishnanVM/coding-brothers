import UserAvatar from "@/components/avatar";
import SocialMediaCOmponent from "@/components/home-page/social-media.component";
import Head from "next/head";
import avatarImage from "@/Images/avatar.jpg";
import Image from "next/image";
import headerLogo from "@/Images/typescript.png";
import programingLanguageImages from "@/components/common/images/programming-languages.images";

export default function Home() {
  return (
    <>
      <div className="sm:px-8 mt-9">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  End-to-End Tech Alchemist: Crafting Mobile-Enabled Full Stack
                  Solutions.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  {`
                          I'm Gopi Krishnan VM, a dynamic Full Stack Developer skilled in mobile app development, back end development, and system architecture. My passion lies in crafting seamless user experiences that transcend platforms, ensuring exceptional interactions across devices. With expertise in managing cloud platforms such as AWS and Azure, I guarantee reliable and scalable deployments that meet the demands of modern businesses. With an acute focus on optimization and a comprehensive understanding of cutting-edge technologies, I deliver end-to-end solutions that drive businesses to unprecedented digital success. Let's embark on an incredible journey of creating something truly remarkable together!`}
                </p>
                <SocialMediaCOmponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <programingLanguageImages.Typescript
              alt="https://www.typescriptlang.org/"
              width={3744}
              height={5616}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <programingLanguageImages.NodeJS
              alt="https://nodejs.org"
              width={3744}
              height={5616}
              className="absolute inset-0 h-full w-full object-contain"
            />
            {/* <img alt="" loading="lazy" width="3936" height="2624" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 640px) 18rem, 11rem" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&amp;w=3840&amp;q=75" style="color: transparent;"> */}
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <programingLanguageImages.Flutter
              alt="https://flutter.dev/"
              width={3744}
              height={5616}
              className="absolute inset-0 h-full w-full object-contain"
            />
            {/* <img alt="" loading="lazy" width="5760" height="3840" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 640px) 18rem, 11rem" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&amp;w=3840&amp;q=75" style="color: transparent;"> */}
          </div>
          {/* <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            <programingLanguageImages.Aws
              alt=""
              width={3744}
              height={5616}
              className="absolute inset-0 h-full w-full object-fill"
            />
          </div> */}
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            <programingLanguageImages.CSharp
              alt=""
              width={3744}
              height={5616}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          Crafting a design system for a multiplanetary future
                        </span>
                      </a>
                    </h2>
                    <time
                      className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      dateTime="2022-09-05"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      September 5, 2022{" "}
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Most companies try to stay ahead of the curve when it
                      comes to visual design, but for Planetaria we needed to
                      create a brand that would still inspire us 100 years from
                      now when humanity has spread across our entire solar
                      system.
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article{" "}
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="/articles/introducing-animaginary">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          Introducing Animaginary: High performance web
                          animations
                        </span>
                      </a>
                    </h2>
                    <time
                      className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      dateTime="2022-09-02"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      September 2, 2022{" "}
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      When you’re building a website for a company as ambitious
                      as Planetaria, you need to make an impression. I wanted
                      people to visit our website and see animations that looked
                      more realistic than reality itself.
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article{" "}
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                  <article className="group relative flex flex-col items-start">
                    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="/articles/rewriting-the-cosmos-kernel-in-rust">
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">
                          Rewriting the cosmOS kernel in Rust
                        </span>
                      </a>
                    </h2>
                    <time
                      className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                      dateTime="2022-07-14"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                      </span>
                      July 14, 2022{" "}
                    </time>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      When we released the first version of cosmOS last year, it
                      was written in Go. Go is a wonderful programming language,
                      but it’s been a while since I’ve seen an article on the
                      front page of Hacker News about rewriting some important
                      tool in Go and I see articles on there about rewriting
                      things in Rust every single week.
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                    >
                      Read article{" "}
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 stroke-current"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                </div>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  <form
                    action="/thank-you"
                    className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                  >
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
                          d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                        ></path>
                        <path
                          d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                          className="stroke-zinc-400 dark:stroke-zinc-500"
                        ></path>
                      </svg>
                      <span className="ml-3">Stay up to date</span>
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Get notified when I publish something new, and unsubscribe
                      at any time.
                    </p>
                    <div className="mt-6 flex">
                      {/* <input type="email" placeholder="Email address" aria-label="Email address" required="" className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"> */}
                      <button
                        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                        type="submit"
                      >
                        Join
                      </button>
                    </div>
                  </form>
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
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          {/* <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-7 w-7" src="/_next/static/media/planetaria.ecd81ade.svg" style="color: transparent;"> */}
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Planetaria
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            CEO
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2019 until Present"
                          >
                            <time dateTime="2019">2019</time>
                            <span aria-hidden="true">—</span>
                            <time dateTime="2023">Present</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          {/* <img alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7" src="/_next/static/media/airbnb.b4000690.svg" style="color: transparent;"> */}
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Airbnb
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Product Designer
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2014 until 2019"
                          >
                            <time dateTime="2014">2014</time>
                            <span aria-hidden="true">—</span>
                            <time dateTime="2019">2019</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          {/* <img alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7" src="/_next/static/media/facebook.dd9e7d48.svg" style="color: transparent;"> */}
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Facebook
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            iOS Software Engineer
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2011 until 2014"
                          >
                            <time dateTime="2011">2011</time>
                            <span aria-hidden="true">—</span>
                            <time dateTime="2014">2014</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          {/* <img alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="h-7 w-7" src="/_next/static/media/starbucks.4a5bd050.svg" style="color: transparent;"> */}
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Starbucks
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Shift Supervisor
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2008 until 2011"
                          >
                            <time dateTime="2008">2008</time>
                            <span aria-hidden="true">—</span>
                            <time dateTime="2011">2011</time>
                          </dd>
                        </dl>
                      </li>
                    </ol>
                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                      href="/#"
                    >
                      Download CV{" "}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
