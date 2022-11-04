import "./App.css";
import {AppProviders} from "./providers/AppProviders";
import {Application} from "./components/application/Application";
import {CounterTwo} from "./components/counter-two/CounterTwo";
import {Counter} from "./components/counter/Counter";
import {Greet} from "./components/greet/Greet";
import {Skills} from "./components/skills/Skills";
import {Users} from "./components/users/Users";
import {MuiMode} from "./components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <Greet />
      <Application />
      <Skills skills={["HTML", "CSS"]} />
      <Counter />
      <CounterTwo count={1} />
      <Users />
      <MuiMode />
    </AppProviders>
  );
}

export default App;
