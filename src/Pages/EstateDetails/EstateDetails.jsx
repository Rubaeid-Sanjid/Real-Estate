import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);

  const estate = estates.find((estate) => estate.id === idInt);

  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    bedrooms,
    bathrooms,
    parking,
    year_built,
    lot_size,
    hoa_fee,
  } = estate;

  return (
    <div className="container mx-auto px-8 my-8">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex flex-1">
          <img src={image} alt="estate" />
        </figure>
        
        <div className="card-body flex-1">
          <h2 className="card-title text-3xl mb-2">{estate_title}</h2>
          <p className="text-left mb-2">{description}</p>
          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Property Type</h3>
            <h3>{segment_name}</h3>
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Location</h3>
            <h3>{location}</h3>
          </div>

          <div className="card-actions justify-between pt-4 border-t-2">
            <h3 className="font-medium">Facilities</h3>
            {facilities.map((facility, idx) => (
              <div key={idx} className="badge badge-outline">
                {facility}
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Bedrooms</h3>
            <h3>{bedrooms}</h3>
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Bathrooms</h3>
            <h3>{bathrooms}</h3>
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Parking</h3>
            <h3>{parking}</h3>
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Year Built</h3>
            <h3>{year_built}</h3>
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Lot Size</h3>
            <h3>{lot_size}</h3>
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">HOA Fee</h3>
            <h3>{hoa_fee}</h3>
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Area</h3>
            <h3>{area}</h3>
          </div>

          <div className="flex justify-between pt-4 border-t-2">
            <h3 className="font-medium">Status</h3>
            <h3>{status}</h3>
          </div>

          <div className="flex justify-between py-4 border-y-2 text-lg">
            <h3 className="font-medium">Price</h3>
            <h3 className="font-medium">{price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
