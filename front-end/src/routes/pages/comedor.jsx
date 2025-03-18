import DataTableList from "../../components/tableList";

export default function ComedorLista() {
    return (<>
        <a className="btn btn-outline-success" data-bs-toggle="modal" href="#formmodalModalToggle" role="button">
            Abrir Cava
        </a>
        <DataTableList />
    </>)
}