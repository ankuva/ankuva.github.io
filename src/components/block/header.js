import React, {useEffect, useState} from 'react';
import {faSun, faMoon, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import kwork from "../../static/img/kwork.png";
import {TELEGRAM, KWORK, MAIL, WEBLANCER} from "../../global_variables";
import weblancer from "../../static/img/weblancer.png";


const navigation = [
    {name: "О нас", anchor: "#about"},
    {name: "Почему мы", anchor: "#why_are_me"},
    {name: "Технологии", anchor: "#technologies"},
    {name: "Портфолио", anchor: "#portfolio"},
    {name: "Контакты", anchor: "#contact"},
]
export const Header = () => {
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
        if (lightMode !== 'enabled') {
            return enableLightMode();
        }
        return disableLightMode();
    }

    const changeActiveLink = e => {
        const activeLink = document.getElementsByClassName("_active_link");
        if (activeLink.length) {
            activeLink[0].classList.remove("_active_link");
        }
        e.target.classList.add("_active_link")
    }


    useEffect(() => {
        if (lightMode === "enabled") {
            enableLightMode();
        }
        const location = window.location.hash
        const links = document.getElementsByClassName("nav_link");
        if(!location) return links[0].classList.add("_active_link")
        for (let i = 0; i < links.length; i++){
            const link_anchor = `#${links[i].getAttribute("href").split("#")[1]}`
            if(link_anchor === location) return links[i].classList.add("_active_link")
        }
    }, [lightMode])

    // useEffect(() => {
    //     if (lightMode) setTheme(faMoon)
    //     document.addEventListener('scroll', scrollHandler)
    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler)
    //     };
    // }, [])
    //
    // const scrollHandler = (e) => {
    //     const sections = document.getElementsByTagName("section")
    //     const scrolling = e.target.documentElement.scrollTop
    //     for (let i = 0; i < sections.length - 1; i++) {
    //         const selector = sections[i].offsetTop
    //         const nextSelector = sections[i + 1].offsetTop
    //         console.log('sections', sections[i + 1])
    //         console.log('nextSelector', nextSelector)
    //         if (scrolling > selector && scrolling - window.innerHeight < nextSelector) {
    //             const activeLink = document.getElementsByClassName("_active_link");
    //             const nav_link = document.getElementsByClassName("nav_link");
    //             if (activeLink.length) {
    //                 activeLink[0].classList.remove("_active_link");
    //             }
    //             nav_link[i].classList.add("_active_link")
    //         }
    //     }
    // }

    return (
        <>
            <header className="header">
                <div className="container">
                    <a href="#about" className="header_logo">
                        Ankuva
                    </a>
                    <nav className="nav">
                        {navigation.map(link => {
                            return (
                                <a href={link.anchor} className="nav_link" key={link.anchor}
                                   onClick={changeActiveLink}>{link.name}</a>
                            )
                        })}
                        <div className="theme_switcher" onClick={changeTheme}>
                            <FontAwesomeIcon icon={theme}/>
                        </div>
                    </nav>
                    <div className="header_social_items">
                        <div className="header_social__item">
                            <a href={TELEGRAM} className="social_item" target="_blank"
                               rel="noreferrer">
                                <FontAwesomeIcon icon={faTelegram}/>
                            </a>
                        </div>
                        <div className="header_social__item">
                            <a href={`mailto: ${MAIL}`} className="social_item" target="_blank"
                               rel="noreferrer">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                        <div className="header_social__item">
                            <a href={KWORK} className="social_item" target="_blank"
                               rel="noreferrer">
                                <img src={kwork} alt="Kwork.ru"/>
                            </a>
                        </div>
                        <div className="header_social__item">
                            <a href={WEBLANCER} className="social_item" target="_blank"
                               rel="noreferrer">
                                <img src={weblancer} alt="Weblancer.net"/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

