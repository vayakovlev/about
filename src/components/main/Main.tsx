import {Component} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {getLangColor} from "../../api/github"

interface LanguageProps {
    name: string
}

class Language extends Component<LanguageProps> {
    render() {
        return (
            <span className="language hint" style={{color: getLangColor(this.props.name)}}>
                {this.props.name}
            </span>
        )
    }
}

export class Main extends Component<{}> {
    render() {
        return (
            <div>
                <p>Nice to meet you, stranger! My name is <span className="hint">Viktor Yakovlev</span> and I am a
                    backend software developer. I
                    usually write code in&nbsp;
                    <Language name="Java"/>/
                    <Language name="Kotlin"/>/
                    <Language name="Groovy"/>.
                </p>
                <p>In my free time I like exploring new technologies, doing some experiments in my home lab and learning
                    programming languages. Right now I'm learning <Language name="Go"/>.
                </p>
                <p>Fan of:
                    <ul>
                        <li>Playing guitar</li>
                        <li>Cycling</li>
                        <li>Learning English</li>
                        <li>Games</li>
                        <li>Selfhosted way</li>
                    </ul>

                </p>
            </div>
        );
    }
}