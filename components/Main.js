import  { Links } from '../components/Links';
import  { Headline } from '../components/Headline';
import styles from "../styles/Home.module.css"

export function Main(props) {
  return (
      <main>
      <Headline  page={props.page}>
      code={<code>pages/{props.page}.js</code>}
      </Headline>
        <Links />
      </main>
  )
}
