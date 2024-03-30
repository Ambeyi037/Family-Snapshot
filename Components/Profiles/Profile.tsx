import { Link, useParams } from 'react-router-dom';
import './profile.css';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../Login/UserContext/UserContext';

type Props = {
    f_name: string;
    surname: string;
    dob: string;
    spouses: {
        name: string;
        dob: string;
        children: number;
        gender: string;
        hometown: string;
    }[];
    children: {
        name: string;
        age: string;
        gender: string;
    }[];
    parents: {
        id: number;
        name: string;
        dob: number;
        alive: boolean;
    }[];
    siblings: {
        id: number;
        name: string;
        dob: Date;
        alive: boolean;
    }[];
    members: {
        id: number;
        name: string;
        dob: Date;
        alive: boolean;
    }[];
}

type UserData = {
    person: {
        f_name: string;
        surname: string;
        dob: string;
    };
    children: {
        f_name: string;
        dob: string;
    }[];
    spouses: {
        name: string;
        dob: string;
    }[];
    parents: {
        f_name: string;
    }[];
    siblings: {
        name: string;
    }[];
    members: {
        name: string;
    }[];
}

const getUser = localStorage.getItem("userData")
console.log(getUser)
// console.log(typeof getUser)
const user = parseInt(getUser)
console.log(typeof user)

const Content = (props: Props) => {
    const { id } = useParams();
    const { userId } = useContext(UserContext);
    console.log(userId)
    const baseURL = `http://127.0.0.1:8000/person_relationships/${user}`;
    console.log(baseURL, id)

    const [userData, setUserData] = useState<UserData>({
        person: {
            f_name: '',
            surname: '',
            dob: '',
        },
        children: [],
        spouses: [],
        parents: [],
        siblings: [],
        members: [],
    });

    useEffect(() => {
        fetch(baseURL)
            .then((res) => res.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <div className="separator"></div>
            <div className="person-header">
                <img src="../img/drone.jpg" alt="" />
                <section className="person-header-about">
                    {userData && (<><h2>{userData.person.f_name + " " + userData.person.surname}</h2>
                        <p>Born: {userData.person.dob}</p></>)}
                </section>
            </div>

            <div className="person-content-wrapper">
                <div className="person-about">
                    <div className="nuclear-family">
                        <h2>Nuclear family</h2>
                        <div className="nuclear-family-spouse">
                            <h2>Spouses</h2>
                            <section className="nuclear-family-spouse-about">
                                {userData.spouses.map(spouse => (
                                    <>
                                        <img src="../img/male-avatar.jpg" alt=" Spouse identity" />
                                        <p>{spouse.name}</p>
                                    </>
                                ))}
                            </section>
                            <Link to={`/addSpouse/${userData.person.id}`}> + Add Spouse</Link>

                        </div>
                        <div className="nuclear-family-children">
                            <h2>Children</h2>
                            {userData && userData.children.map(child => (
                                <div className="nuclear-family-child"><p>{child.f_name + " " + child.dob}</p></div>

                            ))}
                            <Link to={`/addChild/${userData.person.id}`}>+ Add child</Link>
                        </div>
                    </div>

                    <div className="extended-family">
                        <h2>Parents and Siblings</h2>
                        <div className="extended-family-parents">
                            <h2>Parents</h2>
                            {userData &&
                                userData.parents.map(parent => (
                                    <>
                                        <img src="../img/woman-avatar.png" alt="Mother" />
                                        <p>{parent.f_name}</p>
                                    </>

                                ))


                            }
                        </div>

                        {/* <div className="extended-family-siblings">
                            <h2>Siblings</h2>
                            {userData &&
                                userData.siblings.map(sibling => (
                                    <>
                                        <img src="../img/male-avatar.jpg" alt="Sister" />
                                        <p>{sibling.name}</p>
                                    </>
                                ))
                            }
                        </div> */}
                    </div>

                    <div className="members-listing">
                        <h2>Members</h2>
                        {userData.members && userData.members.map(member => (
                            <div className="member-listed" key={member.id}>
                                <img src="../img/woman-avatar.png" alt="Brother" />
                                <Link to="">{member.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
