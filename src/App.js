import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title: "What is React?",
        content: "React is a front end JavaScript framework"
    },
    {
        title: "Why use React?",
        content: "React is a famous"
    },
    {
        title: "How do you use react?",
        content: "React is used by creating components"
    }
];

export default () => {
    return <div><Accordion items={items} /></div>
}