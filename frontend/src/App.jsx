import { useState } from "react";
import HomeLeft from "./component/HomeLeft";
import HomeRight from "./component/HomeRight";
//import { useState } from "react";

function App() {


  return (
    <>
      <div className="flex h-screen">
        <HomeLeft />
        <HomeRight />
     
      </div>
    </>
  );
}

export default App;
