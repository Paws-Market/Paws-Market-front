import { Global } from "@emotion/react"
import { global } from "./styles/global"
import MainLayout from "./components/common/MainLayout/MainLayout"
import MainContainer from "./components/common/MainContainer/MainContainer"
import { Route, Routes } from "react-router-dom"
import TestPage from "./pages/TestPage/TestPage"
import Header from "./components/common/Header/Header"
import Footer from "./components/common/Footer/Footer"
import MainPage from "./pages/MainPage/MainPage"
import SlickPage from "./pages/SlickPage/SlickPage"
import ProductDetail from "./pages/ProductDetail/ProductDetail"

function App() {

	return (
		<>
			<Global styles={global} />
			<MainLayout>
				<Header />
				<MainContainer>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/slick" element={<SlickPage />} />
						<Route path="/product/:productId" element={<ProductDetail />} />
						<Route path="/test" element={<TestPage />} />
					</Routes>
				</MainContainer>
				<Footer />
			</MainLayout>
		</>
	)
}

export default App
