import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Produto } from "../pages/Produto";
import { Cliente } from "../pages/Cliente";
import { Servicos } from "../pages/Servicos";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Cliente />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/cliente" element={<Cliente />} />
                <Route path="/servicos" element={<Servicos />} />
            </Routes>
        </BrowserRouter>
    )
}