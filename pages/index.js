import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Audios } from "./api/data.js";
import Button from "./components/button";
import Image from "next/image";
import { NextSeo } from "next-seo";

export const getStaticProps = async () => {
  return {
    props: {
      audioLists: Audios,
    },
  };
};

export default function Home({ audioLists, track }) {
  let audioList = audioLists.map((audio) => (
    <>
      <Button id={audio.id} title={audio.title} url={audio.audioPath} />
    </>
  ));

  return (
    <>
      <NextSeo
        title="Maldita Lisiada | Revamp"
        description="Que haces besando a la lisiadaaaaa?"
        canonical="https://maldita-lisiada.vercel.app/"
        openGraph={{
          url: "https://maldita-lisiada.vercel.app",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://maldita-lisiada.vercel.app/startup.png",
              width: 800,
              height: 600,
              alt: "Que haces besando a la lisiadaaaa?",
              type: "image/jpeg",
            },
          ],
          site_name: "Maldita Lisiada",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maldita Lisiada | Revamp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <section className="col-md-3 py-2 pb-10 text-center container">
            <Image
              src="/logo 2.png"
              alt="Maldita Lisiada"
              width="500px"
              height="350px"
              layout="responsive"
              lazy
            />
          </section>{" "}
        </header>
        <main>
          <section className="col-md-8 col-sm-12 col-xs-12 py-5 pb-5 text-center container botonera d-flex flex-row flex-wrap">
            <div className="row">{audioList}</div>
          </section>
        </main>

        <footer className={styles.footer}>
          <section className="col-md-8 py-2 pb-5 text-justify container">
            <p>
              Este sitio no es nuevo: es un homenaje al sitio original de 2012
              (¡que no podremos entender por qué lo bajaron!). Sus creadores
              originales fueron <Link href="/">@sr_bigotes</Link> y la voz de
              Itatí Cantoral como Soraya Montenegro. El creador de la imagen
              principal fue{" "}
              <Link href="https://twitter.com/jeanpaulatb">@jeanpaulatb</Link>.
              El código de este sitio se encuentra <Link href="https://github.com/gusma/maldita-lisiada">aquí</Link>. Y el ultimo registro del sitio original, antes de ser dado de baja, se encuentra <Link href="https://bit.ly/3y8QN0f">aquí</Link>.
            </p>
            <p className="text-center">
              ❤️ Este sitio fue rehecho en 2022 con NextJS y alojado en Vercel.
            </p>
          </section>
        </footer>
      </div>
    </>
  );
}