import { ChevronDown } from "lucide-react";
import data from "../data/data";
import { Card } from "./Card";

const filters = [
  {
    id: "domain",
    name: "Domain",
    options: [
      { value: "Sales", label: "Sales" },
      { value: "Finance", label: "Finance" },
      { value: "Marketing", label: "Marketing" },
      { value: "IT", label: "IT" },
      { value: "Management", label: "Management" },
      { value: "UI Designing", label: "UI Designing" },
      { value: "Business Development", label: "Business Development" },
    ],
  },
  {
    id: "gender",
    name: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
  },
  {
    id: "availability",
    name: "Availability",
    options: [
      { value: "true", label: "Available" },
      { value: "false", label: "Not Available" },
    ],
  },
];

export function UserList() {
  const domains = [...new Set(data.map((user) => user.domain))];
  console.log(domains);
  const gender = [...new Set(data.map((user) => user.gender))];
  console.log(gender);
  const availability = [...new Set(data.map((user) => user.available))];
  console.log(availability);

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
                    <li
                      key={option.value}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center">
                        <input
                          id={`${filter.id}-${option.value}`}
                          name={`${filter.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <label
                          htmlFor={`${filter.id}-${option.value}`}
                          className="ml-3 text-sm font-medium text-gray-900"
                        >
                          {option.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* h-[400px] */}
          <div className="w-full border-2 border-dashed rounded-lg md:p-2 lg:col-span-9 lg:h-full">
            <div className="grid justify-center grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5">
              {/* <div className="flex flex-wrap justify-center gap-4"> */}
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div>pagination</div>
          </div>
        </div>
      </div>
    </section>
  );
}
