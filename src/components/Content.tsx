import React from 'react';
import {CoursePart} from "../types";

interface ContentProps {
    // Array of content objects
    contents: CoursePart[]
}

/**
 * Helper function for exhaustive type checking
 */
const _assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

const Content = (props: ContentProps): JSX.Element => {
    const courseParts: CoursePart[] = props.contents;
    return (
        <div>
            {/*map the parts with the switch case method*/}
            {courseParts.map((part, index) => {
                    switch (part.type) {
                        case "groupProject":
                            return (
                                <div key={index}>
                                    <p><b>{part.name} {part.exerciseCount}</b></p>
                                    <i>{part.description}</i>
                                    <p>Project exercises {part.groupProjectCount}</p>
                                </div>
                            )
                        case "normal":
                            return (
                                <div key={index}>
                                    <p><b>{part.name} {part.exerciseCount}</b></p>
                                    <i>{part.description}</i>
                                </div>
                            )
                        case "submission":
                            return (
                                <div key={index}>
                                    <p><b>{part.name} {part.exerciseCount}</b></p>
                                    <i>{part.description}</i>
                                    <p>Submit to <a href={part.exerciseSubmissionLink}>{part.exerciseSubmissionLink}</a></p>
                                </div>
                            )
                        case "special":
                            return (
                                <div key={index}>
                                    <p><b>{part.name} {part.exerciseCount}</b></p>
                                    <i>{part.description}</i>
                                    <p>Required skills: {part.requirements.join(", ")}</p>
                                </div>
                            )
                        default:
                            return _assertNever(part);
                    }
                }
            )}
        </div>
    );
};

export default Content;