import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <h2>Proyecto no encontrado</h2>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} width="300" />
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
        Ver Proyecto
            </a>
        </div>
    );
}
//Para enlaces externos usar <a>, para internos usa <Link>.
// usamos noopener = para evitar que la pagina de destino tenga acceso
// a window.opener, y así protegemos contra los ataques.
// y usamos noreferrer = para que no envíe información sobre la 
// página de origen y así prevenir el rastreo
// Siempre usar rel="noopener noreferrer" cuando se abre enlaces externos
// con target="_blank"
export default ProjectDetail;
