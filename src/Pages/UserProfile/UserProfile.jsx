import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto lg:px-8 px-3 my-12">
      <Helmet>
        <title>Residence Realm | UserProfile</title>
      </Helmet>

      <div className="card bg-base-100 shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold">My Profile</h1>
        </div>
        <figure className="px-10 pt-10">
          <img
            src={user.photoURL}
            alt="profile picture"
            className="rounded-xl w-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex border-y-2 lg:w-1/2 justify-between p-3 gap-6">
            <h2 className="card-title">Name</h2>
            <h2 className="card-title">{user.displayName}</h2>
          </div>

          <div className="flex border-b-2 lg:w-1/2 justify-between px-3 pb-3 gap-6">
            <h2 className="card-title">Email</h2>
            <h2 className="card-title">{user.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
