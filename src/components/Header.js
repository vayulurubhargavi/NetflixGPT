import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  // useSelector to get the user from the store
  const user = useSelector((store) => store.user);
  console.log(user, "--user");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.navigate to home page
        navigate("/");
        //
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen z-50 px-8 py-4 bg-gradient-to-b from-black w-full flex justify-between ">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center space-x-2">
          <img
            // src="https://occ-0-6127-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="user-icon"
            className="w-12 h-12 border-2 border-black rounded-full"
            src={user?.photoURL}
          />
          <button
            className="bg-red-500 p-1.5 font-bold text-white "
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
