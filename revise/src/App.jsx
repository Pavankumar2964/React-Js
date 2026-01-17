import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HandleCounter from "./RenderProps/HandleCounter";
import ClickCounter from "./RenderProps/ClickCounter";
import HoverCounter from "./RenderProps/HoverCounter";
import ShowMessage from "./RenderProps/ShowMessage";
import HandleCounterOne from "./RenderProps1/HandleCounterOne";
import HoverCounterOne from "./RenderProps1/HoverCounterOne";
import ClickCounterOne from "./RenderProps1/ClickCounterOne";
import HandleCount from "./RenderProps2/HandleCount";
import HoverCount from "./RenderProps2/HoverCount";
import ClickCountOne from "./RenderProps2/ClickCountOne";
import ClickCount from "./Hoc3/ClickCount";


function App() {
  return (
    <>
      {/* <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />

      <hr />
      <br />
      <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount} />)} />

      <br />
      <hr />
      <HandleCounter hello={"hello from HandleCounter"}
        sayHello={
          () => {
            return <ShowMessage msg="hello from function" />
          }} /> */}

      <HandleCount
        render={(count, incrementCount, decrementCount, resetCount) => (
          <ClickCountOne
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
      <br />
      <hr />
      <HandleCount
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverCount
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />


      {/* <ClickCount/>
<hr/>
<br/>
<HoverCount/> */}
    </>


  );
}

export default App;
