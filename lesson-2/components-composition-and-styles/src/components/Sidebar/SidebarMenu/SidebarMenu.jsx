import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import SidebarMenuItem from "./SidebarMenuItem";

import styles from "./SidebarMenu.module.scss";

const SidebarMenu = ({items}) => {
    const menuItems = items.map((item, index) => ({...item, active: index === 0}));

    const elements = menuItems.map(item => <SidebarMenuItem key={item.id} {...item} />)

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default SidebarMenu;

SidebarMenu.defaultProps = {
    items: []
};

SidebarMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string
    }).isRequired)
}