import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative h-screen w-screen">
      <main className="flex-1 flex flex-col text-center justify-center items-center sm:items-start relative z-10 p-4 pb-20 sm:p-20">
        <Image
          // className="dark:invert"
          className="mx-auto"
          src="/hashfi.svg"
          alt="Next.js logo"
          width={160}
          height={38}
          priority
        />
        <h1 className="mt-10 text-center text-3xl sm:text-4xl font-bold text-gray-800">
          WE ARE COMING SOON!!
        </h1>
        <p className="mt-4 text-center text-lg sm:text-xl w-full text-gray-600">
          Stay tuned for something amazing
        </p>
        <div className="flex"></div>
      </main>
      <footer className="text-center text-sm mb-6">
        {new Date().getFullYear()} © Hashfi.
      </footer>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
    </div>
  );
}
