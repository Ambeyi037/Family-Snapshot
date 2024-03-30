// import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer-main">
            <div className="wrapper-main footer-main-flex">
                <a className="footer-getintouch" href="/signup"> Start today</a>


                {/* Sitemap */}
                <div className="footer-sitemap">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/tree">Profile</a></li>
                        <li><a href="/memories">Memories</a></li>
                        <li><a href="/analytics">Administration</a></li>
                    </ul>

                    <ul>
                        <li><a href="#">Easy to use</a></li>
                        <li><a href="#">Privacy for your data</a></li>
                        <li><a href="#">Free</a></li>
                        <li><a href="#">Available for all platforms</a></li>
                    </ul>

                    <ul>
                        <li>
                            <p>
                                We value our clients. They make us great and we guarantee
                                best quality for our services. Enjoy Documenting Your Family!!
                            </p>
                        </li>

                    </ul>

                    <ul>
                        <li><p>Get in touch</p></li>
                        <li><p>About</p></li>
                        <li><p>legacylines@hotmail.com</p></li>
                        <li><p>50101 - Nairobi Kasarani Drive-in</p></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
