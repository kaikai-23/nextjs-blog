import  { Links } from './Links';
import  { Headline } from './Headline';

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
