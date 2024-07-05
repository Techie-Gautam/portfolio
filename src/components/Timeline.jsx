import React from "react";
import '../styles/timeline.scss'
import projects from "../assets/data";

const Timeline = () => {
    return (
        <div id="timeline" className=" m-auto ">
            <div className="timelineBox">
                {projects.map((item, index) => (
                    <TimelineItem
                        heading={item.title}
                        technologies={item.technologies}
                        index={index}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

const TimelineItem = ({technologies, index, heading}) => (
    <div
        className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
    >
        <div>
            <h2 className="sm:text-xl text-sm uppercase tracking-wider text-center md:text-left font-semibold">{heading}</h2>
            <p className="flex flex-col md:flex-row gap-2 items-center font-semibold tracking-wider text-xs ">
                Technologies Used:
                {technologies.map((tech, index) => (
                    <span className="md:text-[15px] px-2 py-1 bg-green-200 rounded text-green-700 uppercase font-semibold" key={index}>{tech}</span>
                ))}
            </p>
        </div>
    </div>
);

export default Timeline;






