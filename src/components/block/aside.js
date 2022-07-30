import React from 'react';
import kwork from "../../static/img/kwork.png"
import weblancer from "../../static/img/weblancer.png"
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {TELEGRAM, MAIL, KWORK, WEBLANCER} from "../../global_variables";

export const Aside = () => {
    return (
        <aside className="social_items_place">
            <div className="social_items">
                <a href={TELEGRAM} className="social_item" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram}/>
                </a>
                <a href={`mailto: ${MAIL}`} className="social_item" target="_blank"
                   rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
                <a href={KWORK} className="social_item" target="_blank" rel="noopener noreferrer">
                    <img src={kwork} alt="Kwork.ru"/>
                </a>
                <a href={WEBLANCER} className="social_item" target="_blank" rel="noopener noreferrer">
                    <img src={weblancer} alt="Weblancer.net"/>
                </a>
            </div>
        </aside>
    );
};

