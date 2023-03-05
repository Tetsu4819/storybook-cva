import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Head>
        <title>My Application</title>
        <meta name="description" content="My Application description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-10 text-center">
        <p className="text-4xl">Hello🎉</p>
      </div>
    </div>
  );
}
