import React from 'react';

// Define for the content object should look like
interface Content {
    name: string,
    exerciseCount: number
}

interface ContentProps {
    // Array of content objects
    contents: Content[]
}

const Content = (props: ContentProps) => {
    return (
        <div>
            {props.contents.map((content, index) => (
                <p key={index}>
                    {content.name} {content.exerciseCount}
                </p>
            ))}
        </div>
    );
}

export default Content;