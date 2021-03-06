import {Outlet, useParams} from "react-router-dom";
import TeX from "@matejmazur/react-katex";
import {useEffect, useState} from "react";
import {Button, Stack} from "@mui/material";
import WrongAnswer from "../components/WrongAnswer";
import RightAnswer from "../components/RightAnswer";
import NoAnswer from "../components/NoAnswer";
import "../styles/Homework.css";
import 'katex/dist/katex.min.css';

function AufgabeContent({findHomework}) {
    const [userAnswer, setUserAnswer] = useState(undefined);
    //notwendig: React erkennt nicht dass userAnswer zurückgesetzt werden muss.
    useEffect(() => setUserAnswer(undefined), [findHomework]);

    let answer;
    if (userAnswer === undefined) {
        answer = <NoAnswer/>
    } else if (findHomework.result === userAnswer) {
        answer = <RightAnswer/>
    } else {
        answer = <WrongAnswer/>
    }

    return (
        <div className="homework-content">
            <div className="topic"><TeX>{findHomework.topic}</TeX></div>
            <div className="buttons">
            <Stack direction="row" spacing={1}>
                <Button variant="contained" size="small" color="success"
                        onClick={()=>setUserAnswer(true)}>wahr</Button>
                <Button variant="contained" size="small" color="error"
                        onClick={()=>setUserAnswer(false)}>falsch</Button>
            </Stack>
            </div>
            {answer}
            <Outlet/>
        </div>)
}

export default function Homework(props) {
    const {themeList} = props;
    const {themeName, subtopic} = useParams();
    const findTheme = themeList.find((mathTheme) => {
        return mathTheme.themeName === themeName;
    })
    const findHomework = findTheme.homeworkList.find((mathHomework) => {
        return mathHomework.subtopic === subtopic;
    })

    return (
        <div>
            <AufgabeContent findHomework={findHomework}/>
        </div>
    )
}