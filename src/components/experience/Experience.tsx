import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {COMPANIES} from "./company";
import "./experience.scss"

interface WorkPlaceInterface {
    icon: string,
    name: string,
    role: string,
    period: string,
    link: string
}

class WorkPlace extends Component<WorkPlaceInterface> {
    render() {
        return (
            <div className="work-place">
                <div>
                    <a href={this.props.link} target="_blank" rel="noreferrer">
                        <img src={this.props.icon} alt=""/>
                    </a>
                </div>
                <div className="work-desc">
                    <div className="company">{this.props.name}</div>
                    <div className="role">{this.props.role}</div>
                    <div className="period">{this.props.period}</div>
                </div>
            </div>
        );
    }
}

export class Experience extends Component<{}> {
    render() {
        return <div className="timeline">
            <p><FontAwesomeIcon icon={faBriefcase}/> Timeline</p>
            {COMPANIES.reverse().map(j => {
                return (
                    <WorkPlace icon={j.icon} name={j.name}
                               role={j.role} period={j.period} link={j.link}/>
                )
            })}
        </div>;
    }
}