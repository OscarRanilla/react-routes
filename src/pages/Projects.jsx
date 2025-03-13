import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
    return (
        <div>
            <h1>Proyectos</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={project.name} width="200" />
                        <p>{project.description}</p>
                        <Link to={`/projects/${project.id}`}>Ver detalles</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;

