import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { ThemeProvider, ModalProvider } from "~/store/context"

createRoot(document.getElementById("root")).render(
    // <StrictMode>
        <ThemeProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </ThemeProvider>
    // </StrictMode>,
)
