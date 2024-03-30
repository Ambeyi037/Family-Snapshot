import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from './DataTable/DataTable'
import './user.scss'
import { useEffect, useState } from 'react';
import Add from './Add/Add';
import { differenceInYears, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

const baseURL = "http://127.0.0.1:8000/persons"

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
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
        field: 'dob',
        headerName: 'Date of Birth',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: "alive", headerName: "Alive", width: 100, type: "boolean"
    }
    ,
    {
        field: 'home_place',
        headerName: 'Home',
        type: 'string',
        width: 200,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'number',
        width: 200,
        editable: true,
    },
    {
        field: 'spouse_id',
        headerName: 'Spouse ID',
        type: 'number',
        width: 110,
        editable: true,
    },
];



const Users = () => {

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
                const male = data.filter(user => user.gender === 'Male')
                const female = data.filter(user => user.gender === 'Female')

                const underAge = data.filter(user => calculateAge(user.dob) < 18)
                const adultUsers = data.filter(user => calculateAge(user.dob) >= 18)

                setMaleUsers(male)
                setFemaleUsers(female)
                setunderAgeUsers(underAge)
                setAdultUsers(adultUsers)
            }), []
    }, [])
    console.log("All users")
    console.log(users)

    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="users">
                <div className="infor">
                    <h1>Family Members</h1>
                    <Link to="/addMember" className='timeline-link'>Add User</Link>
                    {/* <button className='timeline-link' onClick={() => setOpen(true)}>Add new Member</button> */}
                </div>
                {/* Fetch the rows */}
                <DataTable slug="update" columns={columns} rows={users} />
                {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
            </div>
            <div className="members-summary">
                <section className="total-members">
                    <h2>Total members:{maleUsers.length + femaleUsers.length}</h2>
                </section>
                <section className="gender-totals">
                    <h2>Male= {maleUsers.length}</h2>
                    <h2>Female={femaleUsers.length}</h2>
                </section>
                <section className="adults-children">
                    <h2>Under 18: {underAgeUsers.length}</h2>
                    <h2>Adults : {adultUsers.length}</h2>
                </section>
            </div>
            <div className="users">
                <div className="infor">
                    <h1>Download Family Relationships pdf </h1>
                    {/* <Link to="127.0.0.1:8000/generate_report/" className='timeline-link'>Family Relationships</Link> */}
                    <Link to="http://127.0.0.1:8000/generate_report/" target="_blank" className='timeline-link'>Family Relationships</Link>

                    {/* <button className='timeline-link' onClick={() => setOpen(true)}>Add new Member</button> */}
                </div>
            </div>
        </>
    )
}

export default Users