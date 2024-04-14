import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = () => {
  const estates = useLoaderData();
  return (
    <div className="mt-12">
      <h2>Estates {estates.length}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
        {
            estates.map((estate) => (<Estate key={estates.id} estate={estate}></Estate>))
        }
      </div>
    </div>
  );
};

export default Estates;
