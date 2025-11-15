import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Wallet,
  TrendingUp,
  Lock,
  PieChart,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col overflow-x-hidden">
      {/* 🟣 Sticky Navbar */}
      

        <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 80 }}
    className="fixed top-0 left-0 w-full z-50 flex justify-between items-center 
              px-8 py-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600
              text-white shadow-lg border-b border-white/10"
  >
    <motion.h1
      whileHover={{ scale: 1.05 }}
      className="text-2xl font-bold tracking-wide cursor-pointer select-none"
      onClick={() => navigate("/")}
    >
      💰 PaisaGraph
    </motion.h1>

    <motion.button
      onClick={() => navigate("/login")}
      className="bg-white text-indigo-700 font-semibold px-5 py-2 rounded-full shadow-lg 
                hover:bg-yellow-100 hover:shadow-xl transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Login
    </motion.button>
  </motion.header>




      {/* 🟣 Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6 mt-28">
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
          {[Wallet, BarChart3, TrendingUp].map((Icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white text-indigo-600 p-4 rounded-full shadow-lg">
                <Icon size={36} />
              </div>
              <p className="mt-2 text-sm font-medium">
                {i === 0 ? "Smart Budgeting" : i === 1 ? "Visual Insights" : "Grow Savings"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* 🟣 Features Section */}
      <section className="bg-white text-gray-900 py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Why Choose PaisaGraph?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <BarChart3 size={40} />,
              title: "Real-Time Analytics",
              desc: "Understand your spending trends through beautiful and interactive charts.",
            },
            {
              icon: <Wallet size={40} />,
              title: "Smart Expense Tracking",
              desc: "Automatically categorize and monitor where your money goes every month.",
            },
            {
              icon: <TrendingUp size={40} />,
              title: "Goal-Based Saving",
              desc: "Set savings goals and track progress effortlessly with visual insights.",
            },
            {
              icon: <Lock size={40} />,
              title: "Data Privacy",
              desc: "We prioritize your privacy with strong encryption and secure storage.",
            },
            {
              icon: <PieChart size={40} />,
              title: "Customizable Reports",
              desc: "Generate personalized reports for a deeper understanding of your finances.",
            },
            {
              icon: <ArrowRight size={40} />,
              title: "Seamless Experience",
              desc: "Modern UI, smooth animations, and a clutter-free experience for everyone.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟣 CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500 text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Start Managing Your Finances Today 🚀
        </motion.h2>
        <motion.button
          onClick={() => navigate("/register")}
          className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-indigo-50 transition"
          whileHover={{ scale: 1.05 }}
        >
          Create Your Free Account
        </motion.button>
      </section>

      {/* 🟣 Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-10 mt-10">
        <p className="text-lg font-semibold mb-4">
          Built by <span className="text-indigo-400">Aditya Raj Singh</span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm mb-4">
          <a
            href="mailto:9555adityarajsingh@gmail.com"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <Mail size={18} /> Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/adityarajsingh117/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/adityarajsingh11/PaisaGraph"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <Github size={18} /> GitHub
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} PaisaGraph. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
