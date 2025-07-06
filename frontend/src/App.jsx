import React ,{useContext} from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Admin/Dashboard";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import MyTask from "./pages/Users/MyTask";
import UserDashBoard from "./pages/Users/UserDashBoard";
import ViewTaskDetails from "./pages/Users/ViewTaskDetails";
import ManageTask from "./pages/Admin/ManageTask";
import { UserContext } from "./context/UserContext"; // ✅ named import
import UserProvider from "./context/UserContext"; 
import {  Toaster } from "react-hot-toast";
const App = () => {

  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            {/* Admin route */}
            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/create-task" element={<CreateTask />} />
              <Route path="/admin/tasks" element={<ManageTask />} />
              <Route path="/admin/users" element={<ManageUsers />} />
            </Route>
            {/* user route */}
            <Route element={<PrivateRoute allowedRoles={["users"]} />}>
              <Route path="/user/dashboard" element={<UserDashBoard />} />
              <Route path="/user/tasks" element={<MyTask />} />
              <Route
                path="/users/task-details/:id"
                element={<ViewTaskDetails />}
              />
            </Route>
            {/* Default route */}
            <Route path="/" element={<Root />} />
          </Routes>
        </Router>
      </div>
      <Toaster 
      toastOptions={{
        className: 'custom-toast',
        style: {
          background: '#363636',
          color: '#fff',
          fontSize: '16px',
        },}}/>
    </UserProvider>
  );
};

export default App;

const Root = () => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    ) // You can replace this with a loading spinner
  }
  if (!user) {
    return <Login />;
  }
  return <Login />;
};
