import React from "react";
import s from "./page.module.css"


class Page extends React.Component{
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div className={s.container}>
                <h1>{this.props.namePage}</h1>
            </div>

        )
    }
}

export default Page