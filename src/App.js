import { useState } from "react";

import Education from "./components/Education";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [print, setPrint] = useState(false)
  const handlePrint = () => {
    setPrint(true)
  }

  return (
    <div className="App">
      <Header handlePrint={handlePrint}/>
    <div>
      <Main print={print}/>
    </div>
    </div>
  );
}

export default App;
