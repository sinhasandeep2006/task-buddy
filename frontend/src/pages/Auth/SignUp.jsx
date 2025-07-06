import React, { useState } from "react";
import AuthLayout from "./../../components/layout/AuthLayout";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import { Link, useNavigate } from "react-router-dom";
import Input from "./../../components/inputs/Input";
import axiosInstance from "../../utils/axoisInstance";
import { API_PATHS } from "../../utils/apiPath";
import { UserContext } from "../../context/UserContext";
import uploadImage from "../../utils/uploadImage"; // Assuming you have a utility function for image upload

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteCode, setadminInviteCode] = useState("");
  const navigate = useNavigate();
  const { updateUser } = React.useContext(UserContext);
  const [error, seterror] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = " ";
    // TODO: Add login logic here
    if (!fullname) {
      seterror("Please enter Full Name.");
      return;
    }

    if (!validateEmail(email)) {
      seterror("Please enter a valid email address.");
      return;
    }
    if (!password) {
      seterror("Please enter the password");
      return;
    }
    seterror("");

    try {
   try {
    profileImageUrl = await uploadImage(profilePic);
    console.log("Uploaded URL:", profileImageUrl);
  } catch (uploadErr) {
    seterror("Image upload failed.");
    return;
  }
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name : fullname, email, password, profileImageUrl, adminInviteToken 
        : adminInviteCode,
      });

      const { token, role } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        seterror(error.response.data.message);
      } else {
        seterror("Something went Wrong");
      }
    }
  };
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full  flex flex-col justify-center ">
        <h3 className="text-xl  text-slate-700 mb-1 font-bold  md:px-28 px-14">
          {" "}
          Create the account
        </h3>
        {/* <p className="text-xs text-slate-700 mt-[5px] mb-6">join us !!</p> */}

        <form onSubmit={handleSignup}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Input
              value={fullname}
              onChange={({ target }) => setFullname(target.value)}
              label="Full name"
              placeholder="Sandeep"
              type="text"
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="sandeep@gmail.com"
              type="text"
            />
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="*********"
              type="password"
            />
            <Input
              value={adminInviteCode}
              onChange={({ target }) => setadminInviteCode(target.value)}
              label="Invite code"
              placeholder="*****"
              type="password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-3 ">{error}</p>}

          <button type="submit" className="btn-primary">
            Sign up
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            have account ?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
