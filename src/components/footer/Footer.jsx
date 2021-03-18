import React from 'react'
import './Footer.css'
import * as FaIcons from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div>
                    <ul>
                        <li>Mentions légales</li>
                        <li>Envie de nous contacter</li>
                        <li>Blog</li>
                        <li>Nos partenaires</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Accueil</li>
                        <li>L'équipe</li>
                        <li>Médias</li>
                        <li>Nous contacter</li>
                    </ul>
                </div>
                <a href='https://www.instagram.com/?hl=fr' target='_blank'>
                    <FaIcons.FaInstagram className='fa'/>
                </a>
                <a href='https://www.facebook.com/' target='_blank'>
                    <FaIcons.FaFacebook className='fa'/>
                </a>
                <a href='https://www.twitter.com/' target='_blank'>
                    <FaIcons.FaTwitter className='fa'/>
                </a>
                <a href='https://fr.linkedin.com/' target='_blank'>
                    <FaIcons.FaLinkedin className='fa'/>
                </a>
            </div>
        </footer>
    )
}

export default Footer
