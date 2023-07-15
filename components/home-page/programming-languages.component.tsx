import programingLanguageImages from "../common/images/programming-languages.images";

const ProgrammingLanguagesComponent: React.FC = () => {
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div className="relative aspect-square w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
        <programingLanguageImages.Typescript
          alt="https://www.typescriptlang.org/"
          width={3744}
          height={5616}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-square w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
        <programingLanguageImages.NodeJS
          alt="https://nodejs.org"
          width={3744}
          height={5616}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
      <div className="relative aspect-square w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
        <programingLanguageImages.Flutter
          alt="https://flutter.dev/"
          width={3744}
          height={5616}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
      {/* <div className="relative aspect-square w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      <programingLanguageImages.Aws
        alt=""
        width={3744}
        height={5616}
        className="absolute inset-0 h-full w-full object-fill"
      />
    </div> */}
      <div className="relative aspect-square w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
        <programingLanguageImages.CSharp
          alt=""
          width={3744}
          height={5616}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </div>
  );
};
export default ProgrammingLanguagesComponent;
