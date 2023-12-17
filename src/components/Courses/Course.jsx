import React from "react";
import favsimple from "../../assets/courses/Bookmark.svg";
import favfilled from "../../assets/courses/BookmarkFilled.svg";

import Rating from '@mui/material/Rating';
// eslint-disable-next-line react/prop-types
const Course = ({ pic, title, author }) => {
  const [isFav, setIsFav] = React.useState(false);
  const [value, setValue] = React.useState(0);
  return (
    <div className="">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className=" w-2/5 pl-2 py-2 md:pr-2 relative ">
          {isFav ? (
            <img
              src={favfilled}
              alt=""
              className="absolute p-1 md:pr-3 right-0 cursor-pointer "
              onClick={() => setIsFav(!isFav)}
            />
          ) : (
            <img
              src={favsimple}
              alt=""
              className="absolute p-1 md:pr-3 right-0 cursor-pointer"
              onClick={() => setIsFav(!isFav)}
            />
          )}

          <img
            src={pic}
            alt="image"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="w-3/5 p-4">
          <div >
            <h3 className="text-[#252B42] font-bold text-lg font-[Montserrat]">
              {title}
            </h3>
            <p className="mt-1 text-[#737373]  text-sm font-semibold font-[Montserrat]">
              {author}
            </p>
          </div> 
          <div className="flex flex-col  item-center mt-3">
             <Rating className="self-start"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
            <p className="text-[#BDBDBD] font-[Montserrat] text-[12px] font-normal">
              1200 comment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
