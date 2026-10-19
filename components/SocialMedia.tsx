import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function SocialMedia(){
    return(
        <ul className={`social-media`}>
            <li>
                <a href={`https://github.com/komanganggard98`} target="_blank">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
            <li>
                <a href={`https://dribbble.com/anggarahayudiputra`} target="_blank">
                    <FontAwesomeIcon icon={faDribbble}/>
                </a>
            </li>
        </ul>
    )
}