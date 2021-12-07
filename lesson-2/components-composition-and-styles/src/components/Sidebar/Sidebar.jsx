import SidebarMenu from "./SidebarMenu";

import styles from "./Sidebar.module.css";

const Sidebar = ({menuItems})=> {
    return (
        <aside>
            <div className={styles.header} />
            <SidebarMenu items={menuItems} />
        </aside>
    )
}

export default Sidebar;