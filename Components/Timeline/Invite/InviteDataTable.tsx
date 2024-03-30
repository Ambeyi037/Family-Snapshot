import emailjs from "@emailjs/browser";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "../../Users/DataTable/dataTable.scss";
import { useState } from "react";
import './InviteDataTable.css'

type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
};

const DataTable = (props: Props) => {
    const serviceId = "service_5vzhg89";
    const templateId = "template_jue6bfe";
    const publicKey = "Rrda6pSKuSsllIkJS";

    const [invitedMembers, setInvitedMembers] = useState<string[]>([]);
    const handleInviteMember = (email: string, name: string) => {
        const templateParams = {
            email: email,
            from_name: "Ambeyi Clintone",
            message: "I Mutende Isaac Invites you to the function that will be held at Drive-Inn Primary ",
            to_name: name
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setInvitedMembers([...invitedMembers, name]);
                alert("Invited successfully");
                console.log(templateParams.to_name)
                console.log("Email sent successfully", response);
            })
            .catch((err) => {
                console.error("Error sending email", err);
            });
    };

    const actionColumn: GridColDef = {
        field: "Action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <button className="invite-link" onClick={() => handleInviteMember(params.row.email, params.row.surname)}>
                        Invite Member
                    </button>
                </div>
            );
        },
    };

    return (
        <>
            <div className="dataTable">
                <DataGrid
                    className="dataGrid"
                    rows={props.rows}
                    columns={[...props.columns, actionColumn]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableDensitySelector
                    disableColumnSelector
                />
            </div>

            {/* <div>
                <h2>Invited Members</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invitedMembers.map((member, index) => (
                            <tr key={index}>
                                <td>{member}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </>
    );
};

export default DataTable;
