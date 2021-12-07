import "./Cities.scss";

import { btnStyle } from "./styles";

const Cities = () => {
    return (
        <div>
            Список городов
            <button style={btnStyle}>Добавить город</button>
        </div>
    )
}

export default Cities;