import classes from './Headline.module.css';

export function Headline(props) {
  return (
      <div> 
        <h1 className={classes.title}>
          {props.page} <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={classes.description}>
          Get started by editing {props.children}
        </p>

      </div> 
  );
}
