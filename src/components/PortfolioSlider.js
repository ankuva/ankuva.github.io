import React, {useState} from 'react'
import {A11y, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {faChevronRight, faChevronLeft, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "../static/sass/swiper.scss"

import results from "../static/img/Fifa/results.jpg"
import trade_helper from "../static/img/TradeHelper/trade_helper.jpg"
import rabbit_admin from "../static/img/RabbitAdmin/rabbit_admin.jpg"
import rabbit from "../static/img/Rabbit/rabbit.jpg"

const projects = [
    {
        name: "Fifa Mobile League", main_photo: results,
        description: `
            <div>Сайт для учёта матчей в мобильной игре.</div>
                <div>Реализована авторизация и регистрация, личный кабинет, возможность заполнения и подтверждения данных.</div>
                <div>Реализован вывод (динамическая лента). Сайт адаптивный и кроссбраузерный.</div>
                <div>Сделано небольшое SEO.</div>
                <div>Стек: </div>
                <div>- Frontend: HTML5, SASS, React.js, axios.</div>
                <div>- Backend: Spring Boot, jwt.</div>
            `
    },
    {
        name: "TradeHelper",
        main_photo: trade_helper,
        description: `
                <div>Агрегатор внутриигровых активов.</div>
                <div>Сделано более 10 парсеров других маркетплейсов и агрегаторов, данные записаны в базу данных. Общее количество товаров > 100000</div>
                <div>Реализована авторизация и регистрация</div>
                <div>Реализован вывод (динамическая лента), сортировка, фильтрация и поиск товаров. Сайт адаптивный и кроссбраузерный.</div>
                <div>Сделано небольшое SEO.</div>
                <div>Стек: </div>
                <div>- Frontend: HTML5, CSS3, React.js, Redux-toolkit, axios.</div>
                <div>- Backend: Node.js, Express.js, Jwt, Mongoose, MongoDB.</div>
                <div>- Парсеры: requests.py, lxml, bs4.</div>
                `,
    },
    {
        name: "Rabbit Vape Shop Admin",
        main_photo: rabbit_admin,
        description: `<div>CRM (админ) панель к интернет-магазину VapeRabbit.</div>
            <div>Реализована авторизация сотрудников, вывод, редактирование, удаление, создание категорий, подкатегорий и товаров.</div>
            <div>Для удобства сделана фильтрация и поиск на каждой странице с данными.</div>
            <div>Стек:</div>
            <div>- Frontend: HTML5, CSS3, Vanilla.js, Jinja2, Fetch.</div>
            <div>- Backend: Flask (Python), flask-session, MySQL.</div>
            `
    },
    {
        name: "Rabbit Vape Shop", main_photo: rabbit,
        description: `<div>Интернет-магазин по продаже vape устройств, жидкостей и комплектующих к ним.</div>
            <div>Полностью обговорён дизайн с заказчиком, реализован адаптивная, кроссбразуерная вёрстка.</div>
            <div>Сделан каталог с выводом товаров из базы данных, реализована динамическая лента, сортировка, фильтрация, блок похожих и скидочных товаров.
            Реализовано SEO.
            </div>
            <div>Стек:</div>
            <div>- Frontend: HTML5, CSS3, Vanilla.js, fetch.</div>
            <div>- Backend: Flask (Python), MySQL.</div>
            `
    }
]

const navigation = {
    nextEl: ".slider-button-custom-next",
    prevEl: ".slider-button-custom-prev",
}

export const PortfolioSlider = () => {
    const [activeIndex, setActiveIndex] = useState(1)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<div class='${className}'></div>`;
        },
    };

    const openMobileDescription = () => {
        const chevrons = document.getElementsByClassName("svg-inline--fa fa-chevron-down")
        chevrons[activeIndex].classList.toggle("open")
        const mobileDescription = document.getElementsByClassName("slide_container__mobile_description")
        mobileDescription[activeIndex].classList.toggle("_open")
    }

    const changeActiveIndex = swiper => {
        setActiveIndex(swiper.activeIndex)
        const openChevron = document.getElementsByClassName("fa-chevron-down open")
        const mobileDescription = document.getElementsByClassName("slide_container__mobile_description _open")
        if(openChevron.length) openChevron[0].classList.remove("open")
        if(mobileDescription.length) mobileDescription[0].classList.remove("_open")
    }

    return (
        <>
            <Swiper
                className="portfolio_swiper"
                modules={[A11y, Navigation, Pagination]}
                scrollbar={{draggable: true}}
                speed={800}
                slidesPerView={1}
                navigation={navigation}
                pagination={pagination}
                loop={true}
                onActiveIndexChange={(swiper) => changeActiveIndex(swiper)}
            >
                <div className="slider-button-custom-next">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>
                <div className="slider-button-custom-prev">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
                {
                    projects.map(site => {
                        return (
                            <SwiperSlide key={`project-${site.name}`}>
                                <div className="slide_container">
                                    <div className="slide_container__main_photo">
                                        <div className="slide_container__actions">
                                            <FontAwesomeIcon icon={faChevronDown} onClick={openMobileDescription}/>
                                        </div>
                                        <div className="slide_container__mobile_description">
                                            <div className="slide_information__heading">
                                                {site.name}
                                            </div>
                                            <div className="slide_information__data"
                                                 dangerouslySetInnerHTML={{__html: site.description}}/>
                                        </div>
                                        <figure className="imghvr-shutter-out-diag-1">
                                            <img src={site.main_photo} alt={site.name}/>
                                            <figcaption>
                                                <div className="slide_information__heading">
                                                    {site.name}
                                                </div>
                                                <div className="slide_information__data"
                                                     dangerouslySetInnerHTML={{__html: site.description}}/>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
        </>
    );
};

