import Image from "next/image";

import backgroundImage from "../../public/background.jpg";
import { Button } from "../Button";
import { Container } from "../Container";

export function Hero() {
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        <Image
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Coding Brothers - </span>Every code is
            same when you understand the base.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Every coding language may have its own syntax and specific
              features, but at their core, they are all the same when you
              understand the underlying concepts. The fundamental principles of
              programming, such as variables, loops, conditionals, and
              functions, apply universally across different languages. Once you
              grasp these concepts, you can easily adapt your knowledge to any
              programming language
            </p>
            <p>
              Understanding the concept allows you to approach problem-solving
              and algorithm design with a logical mindset, enabling you to write
              efficient and effective code regardless of the language you are
              using.
            </p>
          </div>
          {/* mobile design */}
          {/* <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button> */}
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Speakers", "18"],
              ["People Attending", "2,091"],
              ["Venue", "Staples Center"],
              ["Location", "Los Angeles"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
