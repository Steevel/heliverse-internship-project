import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    page: 1,
    searchQuery: "",
    userData: [],
    filters: {
      domain: [],
      gender: [],
    },
    selectedFilters: {
      domain: [],
      gender: [],
      available: [],
    },
  },
  reducers: {
    searchQuery: (prevState, action) => {
      prevState.searchQuery = action.payload;
      const filteredRes = data.filter(
        (item) => item.first_name === prevState.searchQuery
      );
      prevState.userData = filteredRes;
    },
    getFilters: (prevState) => {
      const domains = [...new Set(data.map((user) => user.domain))];
      const genders = [...new Set(data.map((user) => user.gender))];
      prevState.filters.domain = domains;
      prevState.filters.gender = genders;
    },
    getUsers: (prevState, action) => {
      prevState.page = action.payload;

      // If there are no filters
      if (
        [...prevState.selectedFilters.domain].length === 0 &&
        [...prevState.selectedFilters.gender].length === 0
      ) {
        // console.log("domain and gender is not selected");
        const userarr = data.slice(
          prevState.page * 20 - 20,
          prevState.page * 20
        );
        prevState.userData = userarr;
      } else {
        const result = data.filter((item) => {
          if (
            [...prevState.selectedFilters.domain].includes(item.domain) ||
            [...prevState.selectedFilters.gender].includes(item.gender)
          ) {
            return item;
          }
        });

        prevState.userData = result;
      }

      const userarr = data.slice(prevState.page * 20 - 20, prevState.page * 20);
      prevState.userData = userarr;
    },
    setSelectedFilters: (prevState, action) => {
      switch (action.payload.filterId) {
        case "domain":
          {
            // get the current filter from payload
            const incomingFilter = action.payload.filterValue;

            // get the previous filters
            let domainArr = [
              ...prevState.selectedFilters.domain.map((item) => item),
            ];

            // Add/remove the current filter
            const index = domainArr.indexOf(incomingFilter);

            if (index !== -1) {
              domainArr.splice(index, 1);
              prevState.selectedFilters.domain = domainArr;
            } else {
              domainArr = [...domainArr, incomingFilter];
              prevState.selectedFilters.domain = domainArr;
            }

            const res = prevState.userData.filter((item) => {
              if (prevState.selectedFilters.domain.includes(item.domain)) {
                return item;
              }
            });

            prevState.userData = res;

            // console.log("Domain filter after", [
            //   ...prevState.selectedFilters.domain.map((item) => item),
            // ]);
          }

          break;
        case "gender":
          {
            const incomingFilter = action.payload.filterValue;

            // get the previous filters
            let genderArr = [
              ...prevState.selectedFilters.gender.map((item) => item),
            ];

            // Add/remove the current filter
            const index = genderArr.indexOf(incomingFilter);

            if (index !== -1) {
              genderArr.splice(index, 1);
              prevState.selectedFilters.gender = genderArr;
            } else {
              genderArr = [...genderArr, incomingFilter];
              prevState.selectedFilters.gender = genderArr;
            }

            const res = prevState.userData.filter((item) => {
              if (prevState.selectedFilters.gender.includes(item.gender)) {
                return item;
              }
            });

            prevState.userData = res;

            // console.log("gender filter after", [
            //   ...prevState.selectedFilters.gender.map((item) => item),
            // ]);
          }
          break;
        case "availability":
          {
            const incomingFilter = action.payload.filterValue;

            // if (prevState.selectedFilters.available !== incomingFilter) {
            //   prevState.selectedFilters.available = incomingFilter;
            // } else {
            //   prevState.selectedFilters.available = !incomingFilter;
            // }
            prevState.selectedFilters.available = incomingFilter;

            const res = prevState.userData.filter((item) => {
              if (prevState.selectedFilters.available === item.available) {
                return item;
              }
            });

            // console.log("available results:", res);

            prevState.userData = res;

            // console.log(
            //   "available filter after",
            //   prevState.selectedFilters.available
            // );
          }
          break;
        default:
          break;
      }
    },
  },
});

export const { getUsers, getFilters, searchQuery, setSelectedFilters } =
  userSlice.actions;
export default userSlice.reducer;
