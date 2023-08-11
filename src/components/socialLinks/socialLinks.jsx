import "./socialLinks.module.css"
const SocialLinks = ({icon,href}) => {
 return (
    <a href={href} terget="blank">
        <ion-icon name={icon}/>
    </a>
 )
}

export default SocialLinks;