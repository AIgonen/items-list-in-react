import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

/*
function App() {
  let items = ["London", "Paris", "Tokyo", "Helsinki"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onselectItem={handleSelectItem}
      />
    </div>
  );
}
*/

function App() {
  const [alertVisible, setAletrVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAletrVisibility(false)}>"Hello world!"</Alert>
      )}
      <Button color="primary" onClick={() => setAletrVisibility(true)}>
        Press me
      </Button>
    </div>
  );
}

export default App;
