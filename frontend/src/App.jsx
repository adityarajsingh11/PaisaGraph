


// // import { Routes, Route } from "react-router-dom";
// // import Dashboard from "./pages/Dashboard";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Profile from "./pages/Profile";
// // import NotFound from "./pages/NotFound";
// // import ProtectedRoute from "./components/ProtectedRoute";
// // import Home from "./pages/Home";

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/register" element={<Register />} />
// //       <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
// //       <Route path="*" element={<NotFound />} />
// //       <Route path="/" element={<Home />} />
// //     </Routes>
// //   );
// // }

// // export default App;

// import { Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* Protected Routes */}
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/profile"
//         element={
//           <ProtectedRoute>
//             <Profile />
//           </ProtectedRoute>
//         }
//       />

//       {/* 404 Fallback */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
