
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      

<Navbar title="TextUtils" aboutText="About Us" serviceText="Services" />
<div className="container">
<TextForm heading="Enter the text to analyze" label="Enter Your Message" summaryText="Your Text Records" tableRecord = "Table Reacord"/>

</div>
    </>
  );
}

export default App;
