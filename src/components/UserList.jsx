import { ChevronDown } from "lucide-react";
import { Card } from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, getFilters } from "../features/userSlice";
import FilterItem from "./FilterItem";

export function UserList() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.userData);
  const filterData = useSelector((state) => state.users.filters);
  const { domain, gender } = useSelector(
    (state) => state.users.selectedFilters
  );
  // console.log("res", domain.length, gender.length);
  // console.log("userData", userData);

  if (userData.length === 0) {
    if (domain.length === 0 && gender.length === 0) {
      dispatch(getUsers(page));
    }
  }

  const filters = [
    {
      id: "domain",
      name: "Domain",
      options: [
        ...filterData.domain.map((item) => ({ value: item, label: item })),
      ],
    },
    {
      id: "gender",
      name: "Gender",
      options: [
        ...filterData.gender.map((item) => ({ value: item, label: item })),
      ],
    },
    {
      id: "availability",
      name: "Availability",
      options: [
        { value: "true", label: "Available" },
        // { value: "false", label: "Not Available" },
      ],
    },
  ];

  useEffect(() => {
    dispatch(getFilters());
    dispatch(getUsers(page));
  }, [page, dispatch]);

  return (
    <section className="w-full">
      {/* px-2 */}
      <div className="py-5 mx-auto md:px-2 lg:px-10">
        {/* Top */}
        <div className="md:flex md:flex-row md:items-start md:justify-between">
          <div className="flex items-center pt-2 mt-6 md:mt-0 md:space-x-4 md:pt-0">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-black rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Domain <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-black rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Gender <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-black rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Availability <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        {/* Bottom */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-3">
          <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
            {filters.map((filter) => (
              <div key={filter.id} className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {filter.name}
                </h3>
                <ul className="mt-2">
                  {filter.options.map((option) => (
                    <FilterItem
                      key={option.value}
                      option={option}
                      filterId={filter.id}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center w-full border-2 border-dashed rounded-lg md:p-2 lg:col-span-9 lg:h-full">
            <div className="grid justify-center grid-cols-2 gap-2 md:grid-cols-4 ">
              {/* <div className="flex flex-wrap justify-center gap-4"> */}
              {userData.map((user) => (
                <Card key={user.id} user={user} />
              ))}
            </div>

            <div className="flex items-center my-2">
              <a
                href="#"
                className="mx-1 text-sm font-semibold text-gray-900"
                onClick={() => (page >= 2 ? setPage(page - 1) : page)}
              >
                &larr; Previous
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-1 mx-1 text-gray-900 border border-gray-400 rounded-md hover:scale-105"
              >
                {page}
              </a>
              <a
                href="#"
                className="mx-2 text-sm font-semibold text-gray-900"
                onClick={() => (page <= 49 ? setPage(page + 1) : page)}
              >
                Next &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const domains = [...new Set(data.map((user) => user.domain))];
// console.log(domains);
// const gender = [...new Set(data.map((user) => user.gender))];
// console.log(gender);
// const availability = [...new Set(data.map((user) => user.available))];
// console.log(availability);
