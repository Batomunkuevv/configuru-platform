import './projects.scss';
import { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';

import { projectsData } from '../../data/projects-data';

import { Link } from 'react-router-dom';
import { ProjectCard } from '../../components/project-card';
import { ProjectsPanel } from '../../components/projects-panel';
import { useParams } from 'react-router';

export const ProjectsPage = () => {
    const { projectsCategory } = useParams();
    const [projects, setProjects] = useState(null);

    const handleProjectsFilterClick = (e) => {
        const { target } = e;
        const filterCategory = target.dataset.category;

        if (!filterCategory) return;

        const currentProjects = projectsData.find(data => data.category === filterCategory);

        setProjects(currentProjects);
    }

    const setInitialProjectCategory = useCallback(() => {
        let currentProjects = projectsData.find(data => data.category === 'ai-renders');

        if (projectsCategory) currentProjects = projectsData.find(data => data.category === projectsCategory);

        setProjects(currentProjects);
    }, [projectsCategory])

    useEffect(() => {
        setInitialProjectCategory();
    }, [setInitialProjectCategory])

    return (
        <div className='projects'>
            <div className='container'>
                <ProjectsPanel />
                <h1 className="projects__title">My projects</h1>
                {projects && (
                    <ul className="projects__filters">
                        {projectsData.map((data, i) => {
                            const isActiveFilter = data.category === projects.category;

                            return (
                                <li key={i} className="projects__filters-item">
                                    <Link to={`/projects/${data.category}`} className={classNames('projects__filter', 'button', { 'is-active': isActiveFilter })}>{data.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                )}
                {projects && (
                    <ul className={`projects__list projects__list--${projects.category}`}>
                        {projects.projects.map((project, i) => (
                            <ProjectCard key={i} categoryName={projects.name} category={projects.category} preview={projects.preview} {...project} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}