import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { MyContext } from "./Context";

function App() {
    const [data, setData] = useState([]);

    return (
        <div className="App">
            <MyContext.Provider value={{ data, setData }}>
                <Layout />
            </MyContext.Provider>
        </div>
    );
}

export default App;
