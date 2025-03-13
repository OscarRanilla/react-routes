import React from 'react';
import { studies, experiences } from '../data/resume';

function Resume() {
    return (
        <div>
            <h1>Currículum</h1>

            <h2>Experiencia Laboral</h2>
            <ul>
                {experiences.map((exp) => (
                    <li key={exp.id}>
                        <h3>{exp.title}</h3>
                        <p>{exp.company} - {exp.date}</p>
                    </li>
                ))} 
            </ul>

            <h2>Educación</h2>
            <ul>
                {studies.map((study) => (
                    <li key={study.id}>
                        <h3>{study.title}</h3>
                        <p>{study.institution} - {study.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Resume;
