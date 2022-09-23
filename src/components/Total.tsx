// Define for the content object should look like
interface Content {
    name: string,
    exerciseCount: number
}

interface TotalProps {
    // Array of the content objects
    exercises: Content[]
}

const Total = (props: TotalProps) => {
    return (
        <p>
            Number of exercises{" "}
            {/* Calculate the total from the exerciseCount object values */}
            {props.exercises.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
    );
}

export default Total;