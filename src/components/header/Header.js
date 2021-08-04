import React from "react";
import {NavLink} from 'react-router-dom'
import s from "./header.module.css"


class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    addItemMenu() {
        let dataFromProps = this.props.data.nav
        const itemMenu = dataFromProps.map(x => <li className={s.li}><NavLink to={x.link}
                                                                              className={s.a}>{x.text}</NavLink></li>)
        return itemMenu
    }

    render() {
        return (
            <header className={s.header}>
                <nav className={s.nav}>
                    <ul className={s.ul}>{this.addItemMenu()}</ul>
                </nav>
            </header>
        )
    }
}

export default Header