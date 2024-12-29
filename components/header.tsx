"use client";
import { usePathname } from "next/navigation";
import UserAvatar, { HeaderLogo } from "./avatar";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { navBarItems } from "@/constants/layout.constants";

const MobileNavItem: React.FC<{ href: string; children: JSX.Element }> = ({
  children,
  href,
}) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
};

function ChevronDownIcon(props: any) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const HeaderComponent: React.FC = (params) => {
  const pathname = usePathname();

  return (
    <>
      <header className="pointer-events-none relative z-50 flex flex-col">
        <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>

        {pathname === "/" && (
          <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
                    <div className="relative">
                      <UserAvatar
                        className="block h-16 w-16 origin-left pointer-events-auto"
                        large={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="top-0 z-10 h-16 pt-6">
          <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1">
                      {/* <UserAvatar large={false} /> */}
                      <HeaderLogo large={false} />
                    </div>
                    <div className="flex flex-1 justify-center md:justify-center">
                      {/* <nav className="pointer-events-auto hidden md:block">
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                          {navBarItems.map((item, index) => (
                            <Link
                              href={item.key}
                              key={`${item.key}-${index}`}
                              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </ul>
                      </nav> */}
                    </div>
                    {/* <Popover className="pointer-events-auto md:hidden">
                      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-0 dark:hover:ring-white/20">
                        Menu
                        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                      </Popover.Button>
                      <Transition.Root>
                        <Transition.Child
                          as={Fragment}
                          enter="duration-150 ease-out"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="duration-150 ease-in"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
                        </Transition.Child>
                        <Transition.Child
                          as={Fragment}
                          enter="duration-150 ease-out"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="duration-150 ease-in"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Popover.Panel
                            focus
                            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                          >
                            <div className="flex flex-row-reverse items-center justify-between">
                              <Popover.Button
                                aria-label="Close menu"
                                className="-m-1 p-1"
                              >
                                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                              </Popover.Button>
                              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                Navigation
                              </h2>
                            </div>
                            <nav className="mt-6">
                              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                {navBarItems.map((item) => (
                                  <MobileNavItem href={item.key} key={item.key}>
                                    <>{item.label}</>
                                  </MobileNavItem>
                                ))}
                              </ul>
                            </nav>
                          </Popover.Panel>
                        </Transition.Child>
                      </Transition.Root>
                    </Popover> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderComponent;
