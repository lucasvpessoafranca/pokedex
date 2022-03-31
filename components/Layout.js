import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title> PokeDex</title>
      </Head>
      <Header />
      <main className="mainContainer">{children}</main>
      <Footer />
    </>
  );
}
