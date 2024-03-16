import './app-header.scss';
import { Link } from 'react-router-dom';

import profileImage from '../../assets/images/vladimir.jpg';
import logo from '../../assets/images/logo.svg';

export const AppHeader = () => {
    ;
    return (
        <header className="app-header">
            <div className="app-header__container container">
                <div className="app-header__body">
                    <Link to="/" className="app-header__logo">
                        <img src={logo} alt="Configuru Logo" title='Configuru Logo' />
                    </Link>
                    <div className="app-header__profile">
                        <span className="app-header__profile-caption">
                            My account
                        </span>
                        <span className="app-header__profile-image">
                            <img src={profileImage} alt="Vladimir Shakhov" title='Vladimir Shakhov' />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}