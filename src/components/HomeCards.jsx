import React from "react";
import Cards from "./Cards";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

          <Cards
            title="For Developers"
            subtitle="Browse our React jobs and start your career today"
            button="Browse jobs"
            bg="bg-gray-100"
            buttonbg="bg-black hover:bg-gray-700"
            route="/jobs"
          />

          <Cards
            title="For Employers"
            subtitle="List your job to find the perfect developer for the role"
            button=" Add Job"
            bg="bg-indigo-100"
            buttonbg="bg-indigo-500 hover:bg-indigo-600"
            route="/add-job"
          />

        </div>
      </div>
    </section>
  );
};

export default HomeCards;
