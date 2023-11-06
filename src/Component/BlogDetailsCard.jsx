import React from 'react';
import CommentCard from './CommentCard';

const BlogDetailsCard = ({ blogDetails }) => {
  const { _id, name, category, shortDis, longDis, photo, userName } = blogDetails;
  let cat = category;
  if (category === "destinations") {
    cat = "Destinations";
  } else if (category === "tips") {
    cat = "Tips & Advice";
  } else if (category === "stories") {
    cat = "Stories & Experiences";
  } else if (category === "food") {
    cat = "Food & Cuisine";
  } else if (category === "culture") {
    cat = "Culture & Insights";
  }
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-12">
        <main className="mt-10 px-4">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div>
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                {name}
              </h2>
              <p>by {userName}</p>
              <a href="#" className="py-2 text-grn inline-flex items-center justify-center mb-2">
                {cat}
              </a>
            </div>

            <img
              src={photo}
              className="w-full rounded"
              alt=""
            />
          </div>

          <div>
            <div className="px-4 mt-12 text-gray-700 text-lg leading-relaxed w-full">
              <p className="pb-6"><span className='font-bold'>About this Blog:</span> {shortDis}</p>
              <p className="pb-6"><span className='font-bold'>Full Blog:</span> {longDis}</p>
            </div>

          </div>
        <div className='px-4 mt-10'>
            <h2 className='text-3xl font-semibold'>Post A Comment</h2>
            <div className='w-8/12'>
            <form className='flex flex-col'>
                <textarea className='border-2 border-gray-300 p-2 rounded-md mt-4 h-52' placeholder='Write Your Comment Here . . .'></textarea>
                <button className='bg-grn w-fit text-white rounded-md p-2 mt-4'>Post Comment</button>
            </form>
            <CommentCard></CommentCard>
            </div>
        </div>
        </main>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
