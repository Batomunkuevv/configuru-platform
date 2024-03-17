import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Pages } from "../../pages";

import { Layout } from "../layout";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Pages.Projects />} />
                    <Route path="projects" element={<Pages.Projects />} />
                    <Route path="projects/:projectsCategory" element={<Pages.Projects />} />
                    <Route path="projects/:projectsCategory/:projectSlug" element={<Pages.Project />} />
                </Route>
            </Routes>
        </Router>
    )
}