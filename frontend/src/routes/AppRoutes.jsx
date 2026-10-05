import Projects from "../pages/Projects";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import ProjectDetails from "../pages/ProjectDetails";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                <Route path="/register" element={<Register />} />
                
                 <Route path="/login" element={<Login />} />

                <Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
    }
/>

<Route
    path="/projects"
    element={
        <ProtectedRoute>
            <Projects />
        </ProtectedRoute>
    }
/>

<Route
    path="/projects/:id"
    element={
        <ProtectedRoute>
            <ProjectDetails />
        </ProtectedRoute>
    }
/>

<Route
    path="/tasks"
    element={
        <ProtectedRoute>
            <Tasks />
        </ProtectedRoute>
    }
/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;