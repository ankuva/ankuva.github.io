import React, {useState} from 'react';
import {Aside} from "../components/block/aside";
import {Knowledge} from "../components/Knowledge";
import {PortfolioSlider} from "../components/PortfolioSlider";
import {Section} from "../components/block/section";
import ankuva from "../static/img/ankuva.png"
import {Title} from "../components/block/title";
import axios from "axios";
import {MAILFORM} from "../global_variables";
import {Notification} from "../components/block/notification";


const why_me_points = [
    {
        name: "Технологии", description: `Мы используем самые современные и актуальные технологии, подстраиваясь под ваше
                                        приложение.`
    },
    {
        name: "SEO оптимизация и скорость", description: `Для продвижения сайта важны: правильная семантика сайта, 
        адаптивность, скорость работы и meta-тэги.
        Мы полностью учитываем эти правила.`
    },
    {name: "Демократичные цены", description: `Выполняем сложные задачи по цене, ниже, чем у 90% конкурентов.`}
]

const about_points = [
    {data: "1+", description: `год работы в команде`},
    {data: "10+", description: `Реализованных проектов`},
    {data: "5+", description: `Используемых технологий`}
]

export const Index = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        description: ''
    })
    const sendMail = async () => {
        const http = axios.create({
            baseURL: MAILFORM
        })
        if(!form.email.includes("@")){
            setActive(true)
            setText("Неккоректный email адрес")
            setStatus(false)
            return setTimeout(() => {
                setActive(false)
            }, 4500)
        }
        if(!form.name || !form.description){
            setActive(true)
            setText("Заполните все поля!")
            setStatus(false)
            return setTimeout(() => {
                setActive(false)
            }, 4500)
        }
        try{
            const data = await http.get(`&text=Имя: ${form.name}%0AМыло: ${form.email}%0AОписание: ${form.description}`)
            setActive(true)
            if(data.status === 200){
                setText("Мы получили вашу заявку. \n Скоро мы с вами свяжемся.")
                setStatus(true)
                return setTimeout(() => {
                    setActive(false)
                }, 4500)
            }
        }
        catch(e){
            setStatus(false)
            setText("Что-то пошло не так!")
            return setTimeout(() => {
                setActive(false)
            }, 4500)
        }
    }

    const changeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const [status, setStatus] = useState(false)
    const [active, setActive] = useState(false)
    const [text, setText] = useState('')
    return (
        <>
            <Aside/>
            {/* О нас */}
            <Section id="about">
                <Title title="О нас"/>
                <div className="container_data">
                    <div className="about_data">
                        Ankuva — воронежская WEB студия, состоящая из команды профессионалов, искренне увлеченных разработкой ПО.
                        Мы решаем сложные задачи, работаем с новыми технологиями и
                        разрабатываем комплексные программные решения.
                    </div>
                    <div className="about_statistics">
                        {about_points.map(point => {
                            return (
                                <div className="about_statistics__item" key={point.data}>
                                    <div className="about_statistics__item_data">
                                        {point.data}
                                    </div>
                                    <div className="about_statistics__item_text">
                                        {point.description}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Section>
            {/* Почему мы? */}
            <Section id="why_are_me">
                <Title title="Почему мы?" right={true}/>
                <div className="container_data">
                    <div className="why_me_block">
                        <div className="why_me_block__item">
                            <div className="why_me_block__item_img">
                                <img src={ankuva} className="why_are_me_logo" alt="Anukva"/>
                            </div>
                        </div>
                        <div className="why_me_block__item">
                            {why_me_points.map((point, i) => {
                                return (
                                    <div className="why_me_block__item_data" key={`point-${point.name}`}>
                                        <div className="item_data__number">
                                            {i + 1}
                                        </div>
                                        <div className="item_data__text">
                                            <div className="heading">
                                                {point.name}
                                            </div>
                                            <p dangerouslySetInnerHTML={{__html: point.description}}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Section>
            {/* Технологии */}
            <Section className="technology" id="technologies">
                <Title title="Технологии"/>
                <div className="container_data">
                    <Knowledge/>
                </div>
            </Section>
            {/* Портфолио */}
            <Section id="portfolio" className="portfolio">
                <Title title="Портфолио" right={true}/>
                <div className="container_data">
                    <PortfolioSlider/>
                </div>
            </Section>
            {/* Контакты */}
            <Section id="contact">
                <Title title="Контакты"/>
                <div className="container_data">
                    <div className="form_container">
                        <div className="form_item">
                            <div className="form_item__text">
                                У вас есть идея сайта? Напишите нам!
                                <div>Опишите ваше видение сайта, желаемый дизайн, сроки и предположительную стоимость.</div>
                                <div>Покажите конкурентов.</div>
                                <div>Наша команда ответит вам в ближайшее время.</div>
                            </div>
                            <div className="form">
                                <div className="heading">
                                    Заказать сайт
                                </div>
                                <div className="form_label">Введите имя</div>
                                <input className="form_input" name="name" onChange={changeHandler} placeholder="Введите имя" maxlength="30" />
                                <div className="form_label">Введите Email адрес</div>
                                <input className="form_input" name="email" onChange={changeHandler} placeholder="Введите Email" maxlength="40" />
                                <div className="form_label">Опишите детали заказа</div>
                                <textarea className="form_textarea" name="description" onChange={changeHandler} placeholder="Опишите детали заказа" maxlength="1000"/>
                                <div className="form_btn" onClick={sendMail}>
                                    Отправить заявку
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Notification text={text} status={status} active={active} />
        </>
    );
};

