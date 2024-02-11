import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./src_login/pages/Login";
import SignUpPage from "./src_register/pages/SignUp";
import HarvestHubPage from "./pages/HarvestHub";


const ProjectRoutes = () => {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Router>
                <Routes>
                    <Route path="/" element={<HarvestHubPage />} />
                    <Route path="/register" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </React.Suspense>
    );
};
export default ProjectRoutes;
