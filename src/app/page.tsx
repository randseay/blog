import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="mx-auto my-8 flex max-w-3xl items-center gap-x-8">
        <Image
          src="/headshot.jpg"
          alt="Headshot of Rand"
          width={300}
          height={300}
          priority
          className="rounded-full outline outline-offset-8 outline-amber-600 dark:outline-blue-300"
        />

        <div className="flex flex-col gap-y-4">
          <h1 className="font-display text-8xl">Hi 👋</h1>

          <p className="text-2xl font-light">
            I'm Rand, a Senior Frontend Engineer with{' '}
            <a
              className="text-blue-500 hover:underline dark:text-amber-300"
              href="https://dispel.com/"
            >
              Dispel
            </a>
            . I was formerly with Google Cloud at both{' '}
            <a href="https://cloud.google.com/bigquery">BigQuery</a> and{' '}
            <a href="https://kaggle.com">Kaggle</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
