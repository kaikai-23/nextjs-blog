import styles from '../styles/Home.module.css';

export function Headline(props) {
  return (
      <div> 
        <h1 className={styles.title}>
          {props.page} <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing {props.children}
        </p>

      </div> 
  );
}
