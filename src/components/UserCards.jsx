import React, { useEffect } from "react";
import { useGetUsersQuery } from "../api/userApi";
import { useSelector, useDispatch } from "react-redux";
import { addError, addUser, removeUser } from "../Store/UserSlice";
import { data } from "autoprefixer";

const UserCards = () => {
  const dispatch = useDispatch();

  const mans = useSelector((state) => state.man.list);
  // const Error = useSelector((state) => state.man.error);

  const { data: users, error } = useGetUsersQuery();
  useEffect(() => {
    if (error) {
      dispatch(addError(true))
    } else if(data) {
      dispatch(addUser(users));
    }
  }, [users,error,dispatch]);

  const handleRemove = (id) => {
    dispatch(removeUser({ id }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users data</p>;

  return (
    <>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mans.map((user) => (
          <div
            key={user.id}
            className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={`https://i.pravatar.cc/150?img=${user.id}`}
                  alt="User Avatar"
                />
              </div>
              <div className="p-8 text-left">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {user.name}
                </div>

                <p className="mt-2 text-gray-500">{user.phone}</p>
                <p className="mt-2 text-gray-500">{user.website}</p>
                <p className="block mt-2 text-lg leading-tight font-medium text-black">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default UserCards;
