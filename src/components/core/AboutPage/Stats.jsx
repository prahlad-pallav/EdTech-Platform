import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-richblue-800">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col sm:py-10 py-8" key={index}>
                <h1 className="sm:text-[30px] text-[16px] font-bold text-richblack-5">
                  {data.count}
                </h1>
                <h2 className="font-semibold sm:text-[14px] text-[10px] text-yellow-50">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;
