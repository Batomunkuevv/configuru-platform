import './projects-panel.scss';

import userImage from '../../assets/images/vladimir.jpg';

export const ProjectsPanel = () => {
    return (
        <div className="projects-panel">
            <div className="projects-panel__user">
                <div className="projects-panel__user-image">
                    <img src={userImage} alt="Vladimir Shakhov" title='Vladimir Shakhov' />
                </div>
                <p className="projects-panel__user-name">Vladimir Shakhov</p>
                <p className="projects-panel__user-email">vs@moebelita.com</p>
            </div>
        </div>
    )
}