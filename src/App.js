import { Route, Switch } from "react-router-dom";
import "./App.css";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <header>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Homepage></Homepage>
          </Route>

          <Route path="/Services">
            <Services></Services>
          </Route>
        </Switch>
      </header>
      <main className="mb-auto">
        <Card></Card>
      </main>

      <footer className="h-10 ">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
