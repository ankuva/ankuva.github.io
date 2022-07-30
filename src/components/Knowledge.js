import React, {useState} from 'react';
import {faHtml5, faCss3, faJs, faReact, faNode, faPython} from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import spring from '../static/img/spring.png'
import django from '../static/img/django.png'
import redux from '../static/img/redux.png'
import typescript from '../static/img/typescript.png'
import figma from '../static/img/figma.png'

export const Knowledge = () => {
    const [page, setPage] = useState(1)
    const nextIcon = `<svg height="40" style="transform:translateX(4%);shape-rendering:auto" version="1.1" viewBox="0 0 148 90" width="82" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="#01bdf1"  fill-rule="nonzero"></path></svg>`
    const technologies = [
        {
            name: "HTML5", icon: faHtml5
        },
        {
            name: "CSS3", icon: faCss3
        },
        {
            name: "JavaScript", icon: faJs
        },
        {
            name: "React.js", icon: faReact
        },
        {
            name: "Next.js", icon: nextIcon
        },
        {
            name: "Redux-toolkit", icon: redux
        },
        {
            name: "Typescript", icon: typescript
        }
    ]

    const backendTechnologies = [
        {
            name: "Node.js", icon: faNode
        },
        {
            name: "Spring boot", icon: spring
        },
        {
            name: "Flask", icon: faPython
        },
        {
            name: "Django", icon: django
        }
    ]
    const isIcon = icon => {
        return icon.hasOwnProperty("iconName")
    }
    const other = [
        {name: "Parsing", icon: faMagnifyingGlass},
        {name: "Дизайн", icon: figma}
    ]
    const changeActivePage = pageParameter => setPage(pageParameter)
    return (
        <div className="container">
            <div className="knowledge_category">
                <div
                    className={page === 1 ? "knowledge_category__item _active" : "knowledge_category__item"}
                    onClick={() => changeActivePage(1)}
                >
                    Frontend
                </div>
                <div
                    className={page === 2 ? "knowledge_category__item _active" : "knowledge_category__item"}
                    onClick={() => changeActivePage(2)}
                >
                    Backend
                </div>
                <div
                    className={page === 3 ? "knowledge_category__item _active" : "knowledge_category__item"}
                    onClick={() => changeActivePage(3)}
                >
                    Other
                </div>
            </div>

            <div className="technology_items">
                {
                    page === 1 &&
                    technologies.map(technology => {
                        return (
                            <div className="technology_item" key={`knowledge-${technology.name}`}>
                                {technology.name === "Next.js" ?
                                    <div dangerouslySetInnerHTML={{__html: nextIcon}}/> : <></>}
                                {isIcon(technology.icon) && technology.name !== "Next.js" &&
                                    <FontAwesomeIcon icon={technology.icon}/>}
                                {!isIcon(technology.icon) && technology.name !== "Next.js" &&
                                    <img src={technology.icon} alt={technology.name}/>}
                                <div className="technology_item__heading">
                                    {technology.name}
                                </div>
                            </div>
                        )
                    })
                }
                {
                    page === 2 &&
                    backendTechnologies.map(technology => {
                        return (
                            <div className="technology_item" key={`knowledge-${technology.name}`}>
                                {isIcon(technology.icon) ? <FontAwesomeIcon icon={technology.icon}/> :
                                    <img src={technology.icon} alt={technology.name}/>}
                                <div className="technology_item__heading">
                                    {technology.name}
                                </div>
                            </div>
                        )
                    })
                }
                {
                    page === 3 &&
                    other.map(technology => {
                        return (
                            <div className="technology_item" key={`knowledge-${technology.name}`}>
                                {isIcon(technology.icon) ? <FontAwesomeIcon icon={technology.icon}/> :
                                    <img src={technology.icon} alt={technology.name}/>}
                                <div className="technology_item__heading">
                                    {technology.name}
                                </div>
                            </div>

                    )
                    })
                }
            </div>
        </div>
    );
};

