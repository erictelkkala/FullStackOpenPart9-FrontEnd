import {CoursePart} from "../types";

interface TotalProps {
    // Array of the content objects
    exercises: CoursePart[]
}

const Total = (props: TotalProps) => {
    return (
        <div>
            <br/>
            <p>
                Number of exercises in total{" "}
                {/* Calculate the total from the exerciseCount object values */}
                {props.exercises.reduce((carry, part) => carry + part.exerciseCount, 0)}
            </p>
        </div>
    );
}

export default Total;