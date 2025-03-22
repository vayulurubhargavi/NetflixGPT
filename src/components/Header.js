import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_Logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useSelector to get the user from the store
  const user = useSelector((store) => store.user);
  // console.log(user, "--user");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.navigate to home page
        // navigate("/");--this is not needed as we are using the onAuthStateChanged to navigate to the home page
        //
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // when the user signin/singup/signout --the data should be stored in the redux store--this is done when once the user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,destructure the user data and dispatch the action to store the user data in the redux store
        const { uid, email, displayName, photoURL } = user;
        // passing the payload to the action
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // only navigate to the browse page when the user is signed in
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen z-50 px-8 py-4 bg-gradient-to-b from-black w-full flex justify-between ">
      <img className="w-44" src={Netflix_Logo} alt="netflix-logo" />
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
