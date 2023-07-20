import {GITHUB_URL, LINKEDIN_URL} from "../../consts/consts";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
//import {faFilePdf} from "@fortawesome/free-solid-svg-icons";

export const SOCIAL_NETWORKS = [
    {
        title: "Github",
        url: GITHUB_URL,
        icon: faGithub
    }, {
        title: "LinkedIn",
        url: LINKEDIN_URL,
        icon: faLinkedin
    }/*, { //todo add cv file
        title: "CV",
        url: "/cv.pdf",
        icon: faFilePdf
    }*/
]