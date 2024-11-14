import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DefaultLayout } from "~/layouts/"
import Dashboard from "~/layouts/components/Dashboard"
import { Posts, Rooms } from "~/pages"
import { useContext } from "react"
import { ThemeContext } from "~/store/context"
import { ModalContext } from "~/store/context" 

const App = () => {
    const { theme } = useContext(ThemeContext)
    const { modal } = useContext(ModalContext)

    return (
        <div className={`${theme.mode} ${theme.theme}`}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/rooms" element={<Rooms />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
