// // import React from 'react'
// import './Home.css'

// import avatar1 from '../../img/male-avatar.jpg'

// import avatar from '../../img/woman-avatar.png'
// import React from 'react';

// type Props = {
//     name: string;
//     dob: string;
//     married: string;
//     spouses: {
//         name: string;
//         dob: string;
//         children: number;
//         gender: string;
//         hometown: string;
//     }[]
//     children: {
//         name: string;
//         age: string;
//         gender: string;
//     }[]
//     parents: {
//         id: number;
//         name: string;
//         dob: number;
//         alive: Boolean;
//     }[]

// }

// export default function Home(props: Props) {
//     return (
//         <>
//             <h1>About {props.name}</h1>
//             <div className="containerfa">
//                 <div className="parents-section">
//                     <div className="separator"></div>

//                     {/* Parents */}
//                     <section className="parent">
//                         {props.parents.map(parent => (
//                             <>
//                                 {console.log("Hey")}

//                                 < div className="profile-card">
//                                     <div className="image">
//                                         <img src="https://images.pexels.com/photos/18369349/pexels-photo-18369349/free-photo-of-tet-holiday-in-vietnam.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profile-pic" />
//                                     </div>
//                                     <div className="data">
//                                         <h2>{parent.name}</h2>
//                                         <span>{parent.dob}</span>
//                                     </div>
//                                     <div className="row">
//                                         <div className="info">
//                                             <h3>Cildren</h3>
//                                             <span>1</span>
//                                         </div>
//                                         <div className="info">
//                                             <h3>Alive</h3>
//                                             <span>{parent.alive ? "Alive" : "Deceased"}</span>
//                                         </div>
//                                         <div className="info">
//                                             <h3>References</h3>
//                                             <span>209</span>
//                                         </div>
//                                     </div>
//                                     <div className="buttons">
//                                         <a href="#" className="btn">More</a>
//                                         <a href="#" className="btn">Edit</a>
//                                     </div>
//                                 </div> </>))}

//                         <button className="search-btn">Add parent/Guardian</button>
//                     </section>
//                 </div >

//                 {/* Subject matter */}
//                 <div className="right-content">
//                     <div className="person">
//                         <div className="details">
//                             <h2>{props.name}</h2>
//                             <h6>{props.dob}</h6>
//                             <h6>Age: 52</h6>
//                             <h6>{props.married}</h6>
//                         </div>
//                         <div className="image">
//                             <img src={avatar1} alt={avatar} className="profile-pic" />
//                         </div>
//                     </div>

//                     <br />

//                     {/* spouse */}
//                     <div className="days-forecast">
//                         {props.spouses.map
//                             (spouse => (<div className="parent-card">
//                                 <div className="image">
//                                     <img src={avatar} alt={avatar} className="profile-pic" />
//                                 </div>
//                                 <div className="data">

//                                     <h2>{spouse.name}</h2>
//                                     <span>{spouse.dob}</span>
//                                 </div>
//                                 <div className="row">
//                                     <div className="info">
//                                         <h3>Children</h3>
//                                         <span>{spouse.children}</span>
//                                     </div>
//                                     <div className="info">
//                                         <h3>Home</h3>
//                                         <span>{spouse.hometown}</span>
//                                     </div>
//                                     <div className="info">
//                                         <h3>Gender</h3>
//                                         <span>{spouse.gender}</span>
//                                     </div>
//                                 </div>
//                                 <div className="buttons">
//                                     <a href="#" className="btn">More</a>
//                                     <a href="#" className="btn">Edit</a>
//                                 </div>
//                             </div>))}




//                     </div>


//                     <h2>Washingtone's Children</h2>
//                     <div className="children">
//                         {props.children.map
//                             (child => (
//                                 <ul className="children-cards">
//                                     {/* child-card ==card $$ weathr-cards == children-cards */}
//                                     <li className="child-card">
//                                         <h3>{child.name}</h3>
//                                         <h6>Age : 23</h6>
//                                         <h6>Sigle</h6>
//                                         <h6>Gender: {child.gender}</h6>
//                                     </li>
//                                 </ul>))}
//                     </div>

//                     <hr />
//                     <div className="parent-card">
//                         <div className="image">
//                             <img src={avatar} alt={avatar} className="profile-pic" />
//                         </div>
//                         <div className="data">
//                             <h2>Judith Misiko</h2>
//                             <span>Born 1972</span>
//                         </div>
//                         <div className="row">
//                             <div className="info">
//                                 <h3>Children</h3>
//                                 <span>3</span>
//                             </div>
//                             <div className="info">
//                                 <h3>Home</h3>
//                                 <span>1971</span>
//                             </div>
//                             <div className="info">
//                                 <h3>Posts</h3>
//                                 <span>209</span>
//                             </div>
//                         </div>
//                         <div className="buttons">
//                             <a href="#" className="btn">More</a>
//                             <a href="#" className="btn">Edit</a>
//                         </div>
//                     </div>

//                     <div className="parent-card">
//                         <div className="image">
//                             <img src={avatar} alt={avatar} className="profile-pic" />
//                         </div>
//                         <div className="data">
//                             <h2>Judith Misiko</h2>
//                             <span>Born 1972</span>
//                         </div>
//                         <div className="row">
//                             <div className="info">
//                                 <h3>Children</h3>
//                                 <span>3</span>
//                             </div>
//                             <div className="info">
//                                 <h3>Home</h3>
//                                 <span>1971</span>
//                             </div>
//                             <div className="info">
//                                 <h3>Posts</h3>
//                                 <span>209</span>
//                             </div>
//                         </div>
//                         <div className="buttons">
//                             <a href="#" className="btn">More</a>
//                             <a href="#" className="btn">Edit</a>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </ >
//     )
// }
