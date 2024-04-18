import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = () => {
  const estates = useLoaderData();
  return (
    <div className="mt-12 bg-[#e5e9ef]">
      <h2 className="pt-10 text-4xl font-bold mb-4">Best Available <span className="text-[#486df0]">Properties</span></h2>
      <p>Uncover your dream home with our diverse range of exceptional properties</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8 container mx-auto lg:p-8 p-3">
        {
            estates.map((estate) => (<Estate key={estates.id} estate={estate}></Estate>))
        }
      </div>
    </div>
  );
};

export default Estates;
