import DataTableList from "../../components/tableList";

export default function ProductosLista() {
    return (<>
        <a className="btn btn-outline-success" data-bs-toggle="modal" href="#formmodalModalToggle" role="button">
            Nuevo Registro
        </a>
        <DataTableList />
    </>)
}