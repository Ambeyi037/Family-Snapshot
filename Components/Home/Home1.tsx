import React from 'react'
import './Home1.css'

export default function Home1() {
    return (
        <body>
            <div className="person-header">
                <img src="../img/drone.jpg" alt="" />
                <section className="person-header-about">
                    <h2>Ambeyi Clintone</h2>
                    <p>Born: 2001-10-22</p>
                </section>
            </div>

            <div className="person-content-wrapper">
                <div className="person-about">
                    <div className="nuclear-family">
                        <h2>Nuclear family</h2>
                        <div className="nuclear-family-spouse">
                            <h2>Spouses</h2>
                            <section className="nuclear-family-spouse-about">
                                <img src="../img/male-avatar.jpg" alt=" Spouse identity" />
                                <p>Brett Mahoni</p>
                            </section>

                            <a href="#">+ Add spouse</a>
                        </div>
                        <div className="nuclear-family-children">
                            <h2>Children</h2>
                            <div className="nuclear-family-child"><p>Ambeyi Ouma 2001</p></div>
                            <div className="nuclear-family-child"><p>Isaac Mutende 2007</p></div>
                            <div className="nuclear-family-child"><p>Purity Alunya 2003</p></div>
                            <a href="#">+ Add child</a>
                        </div>
                    </div>

                    <div className="extended-family">
                        <h2>Parents and Siblings</h2>
                        <div className="extended-family-parents">
                            <h2>Parents</h2>
                            <div className="parent">
                                <img src="../img/woman-avatar.png" alt="Mother" />
                                <p>Judith Misiko</p>
                            </div>

                            <div className="parent">
                                <img src="../img/male-avatar.jpg" alt=" Father" />
                                <p>Judith Misiko</p>
                            </div>
                        </div>

                        <div className="extended-family-siblings">
                            <h2>Siblings</h2>
                            <div className="sibling">
                                <img src="../img/woman-avatar.png" alt="Brother" />
                                <p>Judith Misiko</p>
                            </div>
                            <div className="sibling">
                                <img src="../img/male-avatar.jpg" alt="Sister" />
                                <p>Isaac Mutende</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="person-events-wrapper">
                <h2>Memories</h2>
            </div>

            <div className="person-events-wrapper">
                <div className="person-events">
                    <a href="#">Add events</a>
                </div>

                <div className="person-events">
                    <a href="#">My memories</a>
                </div>
            </div>
        </body >
    )
}
