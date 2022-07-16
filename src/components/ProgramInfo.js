import React from "react";
import Attend from "./Information/Attend";
import ExamGrade from "./Information/ExamGrade";
import ProgClass from "./Information/ProgClass";
import ProgInfo from "./Information/ProgInfo";

const ProgramInfo = () => {
    return(
        <>
            <ProgInfo/>
            <ProgClass/>
            <ExamGrade/>
            <Attend/>
        </>
    )
}

export default ProgramInfo;