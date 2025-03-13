import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bienvenido a mi Portafolio</h1>
            <p>Hola, soy un desarrollador con experiencia en frontend y backend.</p>
            <nav>
                <ul>
                    <li><Link to="/projects">Ver Proyectos</Link></li>
                    <li><Link to="/resume">Ver Currículum</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
