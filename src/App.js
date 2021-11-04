import Search from "./components/search";
import Header from "./components/Header";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
