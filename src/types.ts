// new types
interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
}

interface CoursePartExtended extends CoursePartBase {
    // The description is optional
    description?: string;
}

interface CourseNormalPart extends CoursePartExtended {
    type: "normal";
}

interface CourseProjectPart extends CoursePartExtended {
    type: "groupProject";
    groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartExtended {
    type: "submission";
    exerciseSubmissionLink: string;
}

interface CourseSpecialPart extends CoursePartExtended {
    type: "special";
    requirements: string[];
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpecialPart;