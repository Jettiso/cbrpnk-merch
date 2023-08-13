import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route path="/" element={<Home />}></Route>
			<Route path="shop" element={<Shop />}></Route>
		</Route>
	)
);

function App() {
	return <>
		<RouterProvider router={router} />	
	</>;
}

export default App;
