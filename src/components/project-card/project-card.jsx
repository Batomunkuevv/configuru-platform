import './project-card.scss';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ categoryName, category, preview, name, slug }) => {
    const projectLink = `/projects/${category}/${slug}`;
    const buttonLabel = category === '3d-tour' ? "View 3D tour" : 'Go to files';

    return (
        <article className="project-card">
            <div className="project-card__category">{categoryName}</div>
            <h2 className="project-card__name">{name}</h2>
            <Link to={projectLink} className={`project-card__image project-card__image--${category}`}>
                <img width={384} height={384} src={preview} alt="Project preview" title="Project preview" />
            </Link>
            <Link to={projectLink} className="project-card__button button">{buttonLabel}</Link>
        </article>
    )
}