import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notFound";
import Logo from "../assets/CavabrewLogo.png";
import Configuraciones from "./pages/config";
import UsuariosLista from "./pages/usuarios";
import ClientesLista from "./pages/clientes";
import ProductosLista from "./pages/productos";
import ComedorLista from "./pages/comedor";
import ModalForm from "../components/modals";
import FormAperturas from "../components/formularios/aperturas";
import FormClientes from "../components/formularios/clientes";
import FormProductos from "../components/formularios/productos";
import FormUsuarios from "../components/formularios/usuarios";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/dashboard/*", element: <Dashboard empresa={"CAVABREW"} logo={Logo} titulo={"Menu"} page={<></>} modal={<></>}  licencia={"14/03/2026"} rol={"demo"}/> },
  { path: "/dashboard/usuarios", element: <Dashboard empresa={"CAVABREW"} logo={Logo} titulo={"Usuarios"} page={<UsuariosLista />} modal={<ModalForm form={"usuarios"} />} licencia={"14/03/2026"} rol={"prueba"}/> },
  { path: "/dashboard/permisos", element: <Dashboard empresa={"CAVABREW"} logo={Logo} titulo={"Permisos"} page={<Configuraciones />} modal={<></>}  licencia={"14/03/2026"} rol={"prueba"}/>  },
  { path: "/dashboard/configuracion", element: <Dashboard empresa={"CAVABREW"} logo={Logo} titulo={"Configuración"} page={<Configuraciones />} modal={<></>} rol={"prueba"}/> },
  { path: "/dashboard/clientes", element: <Dashboard empresa={"CAVABREW"} logo={Logo} titulo={"Cliente"} page={<ClientesLista />} modal={<ModalForm form={"clientes"} />}  licencia={"14/03/2026"} rol={"prueba"}/> },
  { path: "/dashboard/productos", element: <Dashboard empresa={"CAVABREW"} logo={Logo} titulo={"Productos"} page={<ProductosLista />} modal={<ModalForm form={"productos"} />}  licencia={"14/03/2026"} rol={"prueba"}/> },
  { path: "/dashboard/comedor", element: <Dashboard empresa={"CAVABREW"} logo={Logo} titulo={"Aperturas"} page={<ComedorLista />} modal={<ModalForm form={"aperturas"} />}  licencia={"14/03/2026"} rol={"prueba"}/> },
  { path: "/dashboard/reportes", element: <Dashboard empresa={"CAVABREW"} logo={Logo} titulo={"Reportes"} page={<Configuraciones />}  modal={<></>} licencia={"14/03/2026"} rol={"prueba"}/> },
  { path: "*", element: <NotFound /> }, // Página 404
]);

export default function AppRouter() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>);
}
