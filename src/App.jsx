import { Global } from "@emotion/react"
import { global } from "./styles/global"
import MainLayout from "./components/common/MainLayout/MainLayout"
import MainContainer from "./components/common/MainContainer/MainContainer"
import { Route, Routes } from "react-router-dom"
import TestPage from "./pages/TestPage/TestPage"

function App() {

	return (
		<>
			<Global styles={global} />
			<MainLayout>
					<Routes>
						<Route path="/test" element={<TestPage />} />
					</Routes>
			</MainLayout>
		</>
	)
}

export default App
