import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);

  const handleChanges =(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;

    updateUser({ displayName: name, photoURL: photo })
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error.message);
          });
  }
  return (
    <div>
      <Helmet>
        <title>Residence Realm | UpdateProfile</title>
      </Helmet>

      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col my-6 lg:w-1/2">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Update Your Profile</h1>
            </div>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={handleChanges} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email}
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  value={user?.photoURL}
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
