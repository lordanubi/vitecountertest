import { render } from "preact";
import renderToString from "preact-render-to-string";
import Element from "./element";
function App() {
  
  renderToString(<Element />);
  return (
    <div>
      <Element />
      <Element />
      <Element />
      <Element />
    </div>
  );
}

if (typeof window !== "undefined") {
  render(<App />, document.body);
}
