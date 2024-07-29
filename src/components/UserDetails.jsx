import React from "react";
import UserCards from "./UserCards";

const UserDetails = () => {
  return (
    <>
      <div>
        <div className="user-table my-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-80 px-4 sm:px-12">
          <div className="subtitles text-2xl sm:text-4xl font-bold text-center sm:text-left">
            List of user details
          </div>
          <div>
            <button className="text-white px-4 sm:px-5 py-1 text-center text-lg sm:text-xl rounded-xl bg-gradient-to-r from-cyan-500 to-blue-400">
              Add new User
            </button>
            
          </div>
        </div>
        <hr />

        <UserCards />
        <hr />
       
      </div>
    </>
  );
};

export default UserDetails;
