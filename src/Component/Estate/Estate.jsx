import PropTypes from "prop-types";

const Estate = ({ estate }) => {
  const {
    id,
    estate_title,
    image,
    facilities,
    segment_name,
    status,
    price,
    location,
    area
  } = estate;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="property" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <div className="flex justify-between pt-2 border-t-2">
          <h3 className="font-medium">Property Type</h3>
          <h3>{segment_name}</h3>
        </div>

        <div className="flex justify-between pt-2 border-t-2">
          <h3 className="font-medium">Location</h3>
          <h3>{location}</h3>
        </div>

        <div className="card-actions justify-between pt-2 border-t-2">
          <h3 className="font-medium">Facilities</h3>
          {facilities.map((facility, idx) => (
            <div key={idx} className="badge badge-outline">
              {facility}
            </div>
          ))}
        </div>

        <div className="flex justify-between py-2 border-y-2 text-lg text-[#486df0]">
          <h3 className="font-medium">For {status}</h3>
          <h3 className="font-medium">{price}</h3>
        </div>
        <button className="btn bg-[#486df0] text-white">View Details</button>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object,
};

export default Estate;
