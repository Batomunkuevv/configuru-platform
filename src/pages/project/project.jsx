import './project.scss';
import { useParams, Navigate } from 'react-router';
import { Link } from 'react-router-dom';

import { projectsData } from '../../data/projects-data';

export const ProjectPage = () => {
    const { projectsCategory, projectSlug } = useParams();
    const currentProjectsCategory = projectsData.find(data => data.category === projectsCategory);
    const project = currentProjectsCategory?.projects.find(project => project.slug === projectSlug);

    return (
        <>
            {project ? (
                <article className='project'>
                    <div className="container">
                        <h1 className="project__title">{project.name}</h1>
                        {projectsCategory === '3d-tour' ? (
                            <iframe className='project__frame' title={project.name} src={project.url} />
                        ) : (
                            <ul className="project__images">
                                {project.images.map((image, i) => (
                                    <li key={i} className="project__images-item">
                                        <img width="400" height="400" src={image} alt={project.name} title='{project.name}'/>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="project__bottom">
                            <Link to={`/projects/${currentProjectsCategory.category}`} className="project__button button button--border">
                                <span className="button__icon">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8334 10.8382H4.16669M4.16669 10.8382L10 16.6715M4.16669 10.8382L10 5.00488" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="button__text">
                                    Back to cabinet
                                </span>
                            </Link>
                        </div>
                    </div>
                </article >
            ) : <Navigate to='/404' />}
        </>
    );
}