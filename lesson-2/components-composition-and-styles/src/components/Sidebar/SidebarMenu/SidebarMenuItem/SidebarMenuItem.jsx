import PropTypes from "prop-types";

import styles from "./SidebarMenuItem.module.scss";

const SidebarMenuItem = ({text, link, active}) => {

    const fullClassName = active ? styles.linkActive : styles.link;
    
    return (
        <li className={styles.item}>
            <a className={fullClassName} href={link}>{text}</a>
        </li>
    )
}

export default SidebarMenuItem;

SidebarMenuItem.defaultProps = {
    link: "#",
    active: false
}

SidebarMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string
}