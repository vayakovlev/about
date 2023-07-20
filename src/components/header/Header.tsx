import {Component} from "react";
import {USERNAME} from "../../consts/consts";
import {SOCIAL_NETWORKS} from "./social";
import "./headers.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function link(l: any) {
    return (
        <a className="link" target="_blank" rel="noreferrer" href={l.url}>
            <FontAwesomeIcon icon={l.icon}/>
        </a>
    )
}

class Links extends Component<{}> {
    render() {
        return (
            <div className="links">
                {SOCIAL_NETWORKS.map((l) => link(l))}
            </div>
        );
    }
}

export class Header extends Component<{}> {
    render() {
        return <div className="header-box">
            <div className="header-left">
                <div className="header">
                    <span className="logo-name">{USERNAME}</span>
                </div>
                <Links/>
            </div>
        </div>;
    }
}