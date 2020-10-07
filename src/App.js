import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
    {
        "label": "Red",
        "value": "red"
    },
    {
        "label": "Green",
        "value": "green"
    },
    {
        "label": "Blue",
        "value": "blue"
    }
]

export default () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options} />
            {/* <Search /> */}
            {/* <Accordion items={items} /> */}
        </div>
    );
}
