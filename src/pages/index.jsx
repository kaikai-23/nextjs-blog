import Head from 'next/head'
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer/Footer';
import { Main } from 'src/components/Main/Main';
import { Header } from 'src/components/Header/Header';
import { useCallback, useEffect } from 'react';

export default function Home() {
  const handleClick = useCallback((e) => {
        console.log(e.target.href);
        // alert("ボタンが押されました");
        e.preventDefault();
      },[]);

  useEffect(() => {
    //マウント時の処理
    console.log("マウント");
    document.body.style.backgroundColor = "lightblue";
    //アンマウントでの処理
    return () => {
    console.log("アンマウント");
    document.body.style.backgroundColor = "";
    }
  },[]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <a 
      href = "/about"
      onClick={handleClick}
      >
      ボタン
      </a>

      <Main page="index"/>
      <Footer />

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
