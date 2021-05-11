import { BrowserRouter, Route } from "react-router-dom";
import Home from "../containers/Home";
export default function App({ children }) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}
