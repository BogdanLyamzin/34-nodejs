import {SectionWrapper, SectionTitle} from "./components"

const Section = ({title, children})=> {
    return (
        <SectionWrapper>
            <div className="container">
                <h2 className="title">
                    {title}
                </h2>
                {children}
            </div>
        </SectionWrapper>
    )
}

export default Section;