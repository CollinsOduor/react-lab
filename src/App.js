import { ContextComponent } from "./components/ContextComponent";
import { RecursiveComponent } from "./components/RecursiveComponent";
import { RefComponent } from "./components/RefComponent";
import { TestContext } from "./context/TestContext";

function App() {
  return (
    // <RecursiveComponent
    //   data={{
    //     name: "Name",
    //     job: {
    //       profession: "prof",
    //       companies: ["something", "Something Else"],
    //     },
    //   }}
    // />

    // <RefComponent />

    <TestContext.Provider value={[42, 10, 1304]}>
      <ContextComponent />
    </TestContext.Provider>
  );
}

export default App;
