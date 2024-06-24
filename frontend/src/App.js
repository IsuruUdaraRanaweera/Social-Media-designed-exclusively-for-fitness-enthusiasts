import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import SharedPosts from "./Pages/SharedPosts";
import User from "./Pages/User";
import UserPosts from "./Pages/UserPosts";
import WorkoutPlanList from "./Pages/WorkoutPlan/WorkoutPlanList";
import WorkoutPlansPage from "./Pages/WorkoutPlan/WorkoutPlansPage";
import WorkoutStatus from "./Pages/WorkoutStatus/workoutStatus";

// import HomePage from "./Pages/MealPlan/HomePage";
import AddMeal from "./Pages/MealPlan/AddMeal";
import MealList from "./Pages/MealPlan/MealList";
import UpdateMeal from "./Pages/MealPlan/UpdateMeal";
import ViewMeal from "./Pages/MealPlan/ViewMeal";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:userId" element={<UserPosts />} />
            <Route path="/sharedposts" element={<SharedPosts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/api/workout-plans" element={<WorkoutPlansPage />} />
            <Route path="/workout-plan-list" element={<WorkoutPlanList />} />
            <Route path="/workoutStatus" element={<WorkoutStatus />} />
            <Route path="/mealList" element={<MealList />} />
            <Route path="/add" element={<AddMeal />} />
            <Route path="/view/:id" element={<ViewMeal />} />
            <Route path="/update/:id" element={<UpdateMeal />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
