import { signInWithGoogle } from "../../utils/firebase";
import axiosInstance from "../../utils/axoisInstance";
import toast from "react-hot-toast";
// import image from "../../assets/images/image.png"
import Side from "./Side";
const AuthLayout = ({ children }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const idToken = await result.user.getIdToken();

      const res = await axiosInstance.post("/api/auth/google", { idToken });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data._id);

      toast.success(`Welcome ${res.data.name}`);
      window.location.href = "/user/dashboard";
    } catch (err) {
      console.error(err);
      toast.error("Google Login Failed");
    }
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-10 md:px-16 bg-white z-0">
        <div className="max-w-md w-full">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-1 mb-2">
            <span className="text-3xl">📋</span> TaskBuddy
          </h1>
          <p className="text-sm text-slate-600 mb-2">
            Streamline your workflow and track progress effortlessly with our
            all-in-one task management app.
          </p>
          <h3 className="text-xl font-semibold mb-1">Welcome !!!</h3>
          {/* Google Auth Button */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 bg-black text-white px-10 py-2 rounded-lg mb-0 mx-auto"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="G"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
          <p className="text-xs font-semibold text-slate-800 text-center mt-[2px] mx-auto mb-0.5">
            OR
          </p>
          <div className="w-[100%] h-px bg-black mx-auto mt-0"></div>
          {/* Email/Password Form */}
          <div className="mt-[8px]">{children}</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-[45%] h-full relative bg-[#fff] items-center justify-center overflow-hidden z-20">
        {/* Concentric circles */}
        <div className="absolute w-[600px] h-[600px] border border-pink-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[450px] h-[450px] border border-pink-400 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[300px] h-[300px] border border-pink-300 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[700px] h-[700px] border border-pink-300 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[250px] h-[250px] border border-pink-300 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div
          className="
      absolute right-0 top-1/2 -translate-y-1/2
      h-[90%] w-[70%] z-10
      transition-transform duration-300
      hover:scale-[1.05] rounded-xl overflow-hidden
    "
        >
          <Side />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
