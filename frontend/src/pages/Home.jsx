// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight, BarChart3, Wallet, TrendingUp } from "lucide-react";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col">
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-8 py-5">
//         <h1 className="text-2xl font-bold tracking-wide">💰 PaisaGraph</h1>
//         <button
//           onClick={() => navigate("/login")}
//           className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-50 transition"
//         >
//           Login
//         </button>
//       </header>

//       {/* Hero Section */}
//       <main className="flex flex-col items-center justify-center flex-grow text-center px-6">
//         <motion.h1
//           className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Track Your <span className="text-yellow-300">Expenses</span> <br /> & Boost Your Savings 💸
//         </motion.h1>

//         <motion.p
//           className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           PaisaGraph helps you visualize your income and expenses in one place.
//           Manage your money smarter with real-time charts and detailed insights.
//         </motion.p>

//         <motion.button
//           onClick={() => navigate("/dashboard")}
//           className="flex items-center gap-2 bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:bg-yellow-300 transition"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get Started <ArrowRight size={22} />
//         </motion.button>

//         {/* Floating animation for icons */}
//         <motion.div
//           className="flex gap-10 mt-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           <motion.div
//             animate={{ y: [0, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 3 }}
//             className="flex flex-col items-center"
//           >
//             <div className="bg-white text-indigo-600 p-4 rounded-full shadow-lg">
//               <Wallet size={36} />
//             </div>
//             <p className="mt-2 text-sm font-medium">Smart Budgeting</p>
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 3, delay: 0.4 }}
//             className="flex flex-col items-center"
//           >
//             <div className="bg-white text-indigo-600 p-4 rounded-full shadow-lg">
//               <BarChart3 size={36} />
//             </div>
//             <p className="mt-2 text-sm font-medium">Visual Insights</p>
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
//             className="flex flex-col items-center"
//           >
//             <div className="bg-white text-indigo-600 p-4 rounded-full shadow-lg">
//               <TrendingUp size={36} />
//             </div>
//             <p className="mt-2 text-sm font-medium">Grow Savings</p>
//           </motion.div>
//         </motion.div>
//       </main>

//       {/* Footer */}
//       <footer className="text-center py-5 text-indigo-100 text-sm">
//         © {new Date().getFullYear()} PaisaGraph. Built with 💜 using React + Tailwind.
//       </footer>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BarChart3, Wallet, TrendingUp } from "lucide-react";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  // 🔁 Redirect logged-in users to dashboard
  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold tracking-wide">💰 PaisaGraph</h1>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-50 transition"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Track Your <span className="text-yellow-300">Expenses</span> <br /> & Boost Your Savings 💸
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PaisaGraph helps you visualize your income and expenses in one place.
          Manage your money smarter with real-time charts and detailed insights.
        </motion.p>

        <motion.button
          onClick={() => navigate("/register")}
          className="flex items-center gap-2 bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-full text-lg shadow-lg hover:bg-yellow-300 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <ArrowRight size={22} />
        </motion.button>

        {/* Floating icons */}
        <motion.div
          className="flex gap-10 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white text-indigo-600 p-4 rounded-full shadow-lg">
              <Wallet size={36} />
            </div>
            <p className="mt-2 text-sm font-medium">Smart Budgeting</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white text-indigo-600 p-4 rounded-full shadow-lg">
              <BarChart3 size={36} />
            </div>
            <p className="mt-2 text-sm font-medium">Visual Insights</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white text-indigo-600 p-4 rounded-full shadow-lg">
              <TrendingUp size={36} />
            </div>
            <p className="mt-2 text-sm font-medium">Grow Savings</p>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-5 text-indigo-100 text-sm">
        © {new Date().getFullYear()} PaisaGraph. Built with 💜 using React + Tailwind.
      </footer>
    </div>
  );
}
