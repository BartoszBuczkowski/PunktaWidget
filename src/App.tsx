import PunktaWidget from "./widgets/punktaWidget/PunktaWidget";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "5%",
      }}
    >
      <PunktaWidget widgetInstanceId="1" />
    </div>
  );
}

export default App;
