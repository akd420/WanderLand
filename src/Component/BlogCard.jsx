import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  const { _id, name, shortDis, photo, category } = blog;
  let cat = category;
  if (category === 'destinations') {
     cat = 'Destinations';
  } else if (category === 'tips') {
     cat = 'Tips & Advice';
  } else if (category === 'stories') {
     cat = 'Stories & Experiences';
  } else if (category === 'food') {
     cat = 'Food & Cuisine';
  } else if (category === 'culture') {
     cat = 'Culture & Insights';
  }
  return (
    <div>
      <div className="card card-compact bg-base-100 md:h-[500px]">
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">{name}</h2> */}
          <div title={name} className="card-title">
          {name.length > 62 ? (
            <p>{name.slice(0, 60)}. . . . </p>
          ) : (
            name
          )}
        </div>
          <p className="text-grn font-semibold">{cat}</p>
          <div title={shortDis}>
          {shortDis.length > 100 ? (
            <p>{shortDis.slice(0, 75)}. . . . . .</p>
          ) : (
            shortDis
          )}
        </div>
        <div className="card-actions mt-2">
            <Link to={`/blogs/${_id}`}><button className="btn bg-grn text-white btn-sm md:btn-md">Details</button></Link>
            <button className="btn bg-grn text-white btn-sm md:btn-md">Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
