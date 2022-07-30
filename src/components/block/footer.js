import React, {useState, useEffect} from 'react';
import {faBuilding, faQuestion, faImage, faCode, faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const footerLinks = [
    {name: "О нас", icon: faBuilding, anchor: "#about"},
    {name: "Почему мы", icon: faQuestion, anchor: "#why_are_me"},
    {name: "Технологии", icon: faCode, anchor: "#technologies"},
    {name: "Портфолио", icon: faImage, anchor: "#portfolio"},
    {name: "Контакты", icon: faTelegram, anchor: "#contact"}
]
export const Footer = () => {
    const [theme, setTheme] = useState(faSun)
    let lightMode = localStorage.getItem("lightMode");
    const enableLightMode = () => {
        document.body.classList.add('light');
        localStorage.setItem("lightMode", "enabled");
        setTheme(faMoon)
    }
    const disableLightMode = () => {
        document.body.classList.remove("light");
        localStorage.setItem("lightMode", null);
        setTheme(faSun)
    }

    const changeTheme = () => {
        lightMode = localStorage.getItem("lightMode");
        if (lightMode !== 'enabled') return enableLightMode();
        return disableLightMode();
    }

    const changeActiveLink = i => {
        const activeLink = document.getElementsByClassName("_footer_active_link");
        const links = document.getElementsByClassName("footer_nav__item");
        if (activeLink.length) {
            activeLink[0].classList.remove("_footer_active_link");
        }
        links[i].classList.add("_footer_active_link")
    }

    useEffect(() => {
        if (lightMode === 'enabled') {
            enableLightMode();
        }
        const location = window.location.hash
        const links = document.getElementsByClassName("footer_nav__item");
        if(!location) return links[0].classList.add("_footer_active_link")
        for (let i = 0; i < links.length; i++){
            const link_anchor = `#${links[i].getAttribute("href").split("#")[1]}`
            if(link_anchor === location) return links[i].classList.add("_footer_active_link")
        }
    }, [lightMode])

    return (
        <footer className="footer">
            <div className="footer_nav">
                {footerLinks.map((link, i) => {
                    return (
                        <a className="footer_nav__item" href={link.anchor} key={link.name} onClick={() => changeActiveLink(i)}>
                            <FontAwesomeIcon icon={link.icon}/>
                            <span>{link.name}</span>
                        </a>
                    )
                })}
                <div className="theme_switcher" onClick={changeTheme}>
                    <FontAwesomeIcon icon={theme}/>
                </div>
            </div>
        </footer>
    );
};

