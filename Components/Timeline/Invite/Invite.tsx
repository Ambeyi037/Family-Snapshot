import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import DataTable from '../../Users/DataTable/DataTable'

import InviteDataTable from './InviteDataTable'
import './Invite.css'
// import { rows } from '../../data';
import { useEffect, useState } from 'react';
import { differenceInYears, parseISO } from 'date-fns';
// import Add from './Add/Add';


const baseURL = "http://127.0.0.1:8000/persons"

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Member ID', width: 90 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.f_name || ''} ${params.row.surname || ''}`,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'number',
        width: 200,
        editable: true,
    },
];



const Invite = () => {

    const [users, setUsers] = useState({
        f_name: '',
        surname: '',
        dob: '',
        gender: '',
        home_place: '',
        id: '',
        alive: true,
        email: '',
        spouse_id: null
    });
    const [maleUsers, setMaleUsers] = useState([]);
    const [femaleUsers, setFemaleUsers] = useState([]);
    const [adultUsers, setAdultUsers] = useState([]);
    const [underAgeUsers, setunderAgeUsers] = useState([]);

    const calculateAge = (dob: string) => {
        const birthDate = parseISO(dob);
        const currentDate = new Date();
        return differenceInYears(currentDate, birthDate);
    };

    useEffect(() => {
        fetch(baseURL)
            .then((res) => res.json())
            .then((data) => {

                setUsers(data)
                const male = data.filter(user => user.gender === 'male')
                const female = data.filter(user => user.gender === 'female')

                const underAge = data.filter(user => calculateAge(user.dob) < 18)
                const adultUsers = data.filter(user => calculateAge(user.dob) >= 18)
                setMaleUsers(male)
                setFemaleUsers(female)
                setunderAgeUsers(underAge)
                setAdultUsers(adultUsers)

            }), []
    }, [])
    console.log("Male users")
    console.log(maleUsers)

    console.log("Female users")
    console.log(femaleUsers)

    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="users-invite">
                <div className="infor">
                    <h1>Invite All Family Members</h1>
                </div>
                <InviteDataTable slug="profile" columns={columns} rows={users} />
            </div>

            <div className="users-invite">

                <div className="infor">
                    <h1>Invite Adult Family Members</h1>
                </div>
                {/* Fetch the rows */}
                <InviteDataTable slug="profile" columns={columns} rows={adultUsers} />
            </div>

            <div className="users-invite">

                <div className="infor">
                    <h1>Invite Children</h1>
                </div>
                {/* Fetch the rows */}
                <InviteDataTable slug="profile" columns={columns} rows={underAgeUsers} />
            </div>
            {/* <div className="users-invite">
                <div className="infor">
                    <h1>Invite Female Members</h1>
                </div>
                <InviteDataTable slug="profile" columns={columns} rows={femaleUsers} />
            </div> */}

            {/* <div className="users-invite">
                <div className="infor">
                    <h1>Invite Male Members</h1>
                </div>
                
                <InviteDataTable slug="profile" columns={columns} rows={maleUsers} />
            </div> */}
        </>
    )
}

export default Invite