import Section from "../Section";
import Teachers from "../Teachers";
import Cities from "../Cities";
import ReverseButton from "../ReverseButton";

const Main = () => {
    return (
        <div>
            <Section title="Преподаватели">
                <Teachers />
            </Section>
            <Section title="Города">
                <Cities />
            </Section>
            <ReverseButton>
                Нажми меня!
            </ReverseButton>
            <ReverseButton reverse>
                Съешь меня!
            </ReverseButton>
            <ReverseButton as="a">
                Выпей меня!
            </ReverseButton>
        </div>
    )
}

export default Main;