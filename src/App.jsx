import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}

        <Alert type="error" message="This is error alert box" />
        <Alert type="warning" message="This is a warning alert box" />
        <Alert type="info" message="This is an info alert box" />
        <Alert type="success" message="This is a success alert box" />
      </div>
    </div>
  );
}

export default App;
