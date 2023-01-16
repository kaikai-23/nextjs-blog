import  { Links } from 'src/components/Links/Links';
import  { Headline } from 'src/components/Headline/Headline';

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
