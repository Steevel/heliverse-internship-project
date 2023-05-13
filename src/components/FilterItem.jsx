import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedFilters } from "../features/userSlice";

const FilterItem = ({ option, filterId }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  function handleChecked() {
    const checked = !isChecked;
    setIsChecked(checked);
    const filterValue = option.value;
    dispatch(setSelectedFilters({ filterId, filterValue }));
  }

  return (
    <li className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <input
          id={`${filterId}-${option.value}`}
          name={`${filterId}[]`}
          defaultValue={option.value}
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
        />
        <label
          htmlFor={`${filterId}-${option.value}`}
          className="ml-3 text-sm font-medium text-gray-900"
        >
          {option.label}
        </label>
      </div>
    </li>
  );
};

export default FilterItem;
