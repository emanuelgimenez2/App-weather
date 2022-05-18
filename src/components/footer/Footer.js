import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';
 

export default function Footer() {
    return (
        <div className="footer">
        <div className="footer-content">
            <div className="footer-section about">
            <h1 className="logo-text">Weather App</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                dolores, quod quia, dolore doloribus quisquam cumque, quis
                voluptates doloremque, quibusdam dolorum quisquam.
            </p>
            <div className="contact">
                <span>
                <i className="fas fa-phone"></i>
                +1(123)456-7890
                </span>
                <span>
                <i className="fas fa-envelope"></i>
                </span>
                    
            </div>
            <div className="footer-section links">¨
            <h2>Quick Links</h2>
            
            </div>
            <div className="footer-section social">
            <h2>Social Media</h2>
            <br></br>
            <ul>
                <li>
                <a href="#">

                <i className="fab fa-facebook-f"></i>
                </a>
                </li>
                <li>
                <a href="#">
                <i className="fab fa-instagram"></i>
                </a>
                </li>
                <li>
                <a href="#">
                <i className="fab fa-twitter"></i>
                </a>
                </li>
                <li>
                <a href="#">
                <i className="fab fa-google"></i>

                </a>
                </li>
            </ul>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; Weather App 2020 - Designed by

            <a href="" target="_blank">
            <span>
                <i className="fas fa-code"></i>
                </span>
            </a>
        </div>
        </div>
        </div>
    )

    
    
}