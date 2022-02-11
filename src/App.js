import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import RequestPyment from "./pages/RequestPyment";
import PettyCash from "./pages/PettyCash";

//components
import Header from "./components/Header";
//import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="request" element={<RequestPyment />} />
				<Route exact path="pettycash" element={<PettyCash />} />
			</Routes>
			{/*<Footer />*/}
		</div>
	);
}

export default App;
