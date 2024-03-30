// import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss"
import { Link } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string
}

const handleDelete = (id: number) => {
    const conf = window.confirm("Do you want to delete")
    if (conf) {
        axios.delete(`http://127.0.0.1:8000/delete_person/${id}`)
            .then(res => alert("User deleted successfully"))
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    // console.log(id + " has been deleted")
    // alert(id + " has been deleted")
}

const DataTable = (props: Props) => {

    const actionColumn: GridColDef = {
        field: "Action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <ModeEditIcon />
                    </Link>
                    <button onClick={e => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </button>
                    {/* <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </div> */}
                </div>
            )
        }
    }

    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 15,
                        },
                    },
                }}

                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }


                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div >
    )
}

export default DataTable;