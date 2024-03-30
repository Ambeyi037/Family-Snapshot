import UserContext from '../../Login/UserContext/UserContext';
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './Content.css';


const getUser = localStorage.getItem("userData")
const user = parseInt(getUser)


export default function Content() {
    const { id } = useParams();
    const { userId } = useContext(UserContext);
    console.log(`UseContext id ${userId}`)

    const baseURL = `http://127.0.0.1:8000/person_relationships/${user}`;

    const [userData, setUserData] = useState({
        person: {},
        children: [],
        spouses: [],
        parents: [],
        siblings: [],
    });

    useEffect(() => {
        fetch(baseURL)
            .then((res) => res.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [baseURL]);

    console.log(userData)

    return (
        <>
            <div className="separator"></div>
            <div className="person-header">
                <img src="../img/drone.jpg" alt="" />
                <div className="person-header">
                    <img src="../img/male-avatar.jpg" alt="" />
                    <section className="person-header-about">
                        {userData.person && (
                            <>
                                <h2>{userData.person.f_name} {userData.person.surname}</h2>
                                <p>Born: {userData.person.dob}</p>
                            </>
                        )}
                    </section>
                </div>

            </div>

            <div className="person-content-wrapper">
                <div className="person-about">
                    <div className="nuclear-family">
                        <h2>My family</h2>
                        <div className="nuclear-family-spouse">
                            <h2>Spouses</h2>
                            <section className="nuclear-family-spouse-about">
                                {userData.spouses && userData.spouses.map((spouse, index) => (
                                    <div key={index}>
                                        <img src="../img/male-avatar.jpg" alt="Spouse identity" />
                                        <p>{spouse.f_name} + {spouse.surname}</p>
                                        <p>{spouse.dob}</p>
                                    </div>
                                ))}
                            </section>
                            <Link to='/addSpouse/'> + Add Spouse</Link>
                        </div>
                        <div className="nuclear-family-children">
                            <h2>Children</h2>
                            {userData.children && userData.children.map((child, index) => (
                                <div key={index} className="nuclear-family-child">
                                    <p>{child.f_name} {child.surname} </p>
                                    <p>   </p>
                                    <p>{child.dob}</p>
                                </div>
                            ))}
                            <Link to='/addChild'>+ Add child</Link>
                        </div>
                    </div>

                    <div className="extended-family">
                        <h2>Parents</h2>
                        <div className="extended-family-parents">
                            <h2>Parents</h2>
                            {userData.parents && userData.parents.map((parent, index) => (
                                <div key={index} className="parent">
                                    <img src="../img/woman-avatar.png" alt="Mother" />
                                    <p>{parent.f_name}  {parent.surname}</p>
                                </div>
                            ))}
                            <Link to='/addParent'>+ Add Parent</Link>
                        </div>
                        {/* <div className="extended-family-siblings">
                            <h2>Siblings</h2>
                            {userData.siblings && userData.siblings.map((sibling, index) => (
                                <div key={index} className="sibling">
                                    <img src="../img/male-avatar.jpg" alt="Brother" />
                                    <p>{sibling.f_name}  {sibling.surname} {sibling.dob}</p>
                                </div>
                            ))}
                            <Link to='/addSibling'>+ Add Sibling</Link>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="person-events-wrapper">
                <h2>My Events</h2>
            </div>

            <div className="person-events-wrapper">
                <div className="person-events">
                    <Link to="/addEvent">Add events</Link>
                </div>
                <div className="person-events">
                    <Link to='/events'>My Events</Link>
                </div>
            </div>
        </>
    );
}

