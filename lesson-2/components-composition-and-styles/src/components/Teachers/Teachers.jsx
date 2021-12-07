import Button from "../Button";

import "./Teachers.scss";

const Teachers = ({})=> {
    return (
        <div className="teachers">
            <div className="teachers-item">
                <div className="teacher-fio">
                    Руденко Мария Александровна
                </div>
                <ul className="teacher-contacts">
                    <li>+38(097) 448 73 11</li>
                    <li>rudenko.mail@gmail.com</li>
                    <li>Полтава</li>
                </ul>
                <div className="teacher-work">
                Создание групп, создание стран, редактировани профилей преподавателей
                </div>
            </div>
            <Button text="Добавить преподавателя" />
        </div>
    )
}

export default Teachers;