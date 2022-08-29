import "./styles.css";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Content from "./components/Content/Content.jsx";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Content />
    </div>
  );
}
