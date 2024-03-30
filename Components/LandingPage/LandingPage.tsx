import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <>
            <main className='main-landing'>
                <div className="main-intro">
                    <h1>Welcome <br /> to <br />    Family Snapshot <br />Begin your <br />Family Summary <br /> Documentation <br /> Today</h1>

                    <p>We care about the family <br />A very fundamental aspect. <br /> We care about you!!</p>
                    <Link to="/signup">Signup</Link>
                </div>

                <div className="main-quotes">
                    <p>We care about the family <br />A very fundamental aspect. <br /> We care about you!!
                        <br /> <br />Create Account to <br /> document your family</p>
                    <Link to="/login">Login</Link>
                </div>

            </main>

            {/* Category Section */}

            <section className="index-category">
                <p>Categories</p>
                <a href="#" className="index-category-box">
                    <div className="dark-overlay"></div>
                    <h3>Document Family Members</h3>
                </a>
                <a href="#" className="index-category-box">
                    <div className="dark-overlay"></div>
                    <h3>Document memories</h3>
                </a>
                <a href="#" className="index-category-box">
                    <div className="dark-overlay"></div>
                    <h3>Update members information</h3>
                </a>
                <a href="#" className="index-category-box">
                    <div className="dark-overlay"></div>
                    <h3>Document all</h3>
                </a>
            </section>

            {/* About Section */}
            <section className="index-about">
                <div className="wrapper-main index-about-flex">
                    <div className="index-about-img">
                        <img src="../img/woman-avatar.png" alt="About image" />
                    </div>
                    <div className="index-about-text">
                        <h2> About Family Snapshot</h2>
                        <p>This is a web application<br />
                            dedicated to help you summarize <br />
                            Your family information. <br />It provides a friendly environment <br />
                            to add, edit and even delete family members.
                        </p>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </section>

        </>
    )
}
