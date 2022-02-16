import TeX from "@matejmazur/react-katex";
import {useParams} from "react-router-dom";

export default function RightErgebnis(props){
    const {themeList}=props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })
    return(
        <div >
            <h2 className="ergebnis"> Ihre Antwort ist richtig! </h2>
            <br/>
            <TeX>{findHomework.solution}</TeX>
            <br/>
        </div>
    )
}

/*
export default function Ergebnis(props){
    const {themeList}=props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })
    return(
        <div >
            <br/>
            <TeX>{findHomework.solution}</TeX>
            <br/>
        </div>
    )
}*/