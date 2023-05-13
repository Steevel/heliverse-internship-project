import { useDispatch, useSelector } from "react-redux";
import { addToTeam } from "../features/teamSlice";

export function Card({ user }) {
  const team = useSelector((state) => state.team.members);
  const dispatch = useDispatch();

  function handleClick() {
    console.log("handleClick");

    const index = team.indexOf(user);
    console.log(index);
    if (index == -1) {
      // team.map((member) => )
      const i = team.find((member) => member.domain === user.domain);
      console.log("i", i);

      if (!i) {
        dispatch(addToTeam(user));
      }
    }
  }

  return (
    <div className="flex flex-col items-center p-2 md:p-4 max-w-[220px] border rounded-md shadow-md  border-1">
      <img
        src={user.avatar}
        alt=""
        className="w-16 h-16 border-2 border-gray-400 rounded-full"
        // h-[200px] w-full rounded-t-md object-cover
      />
      <div className="flex flex-col items-center ">
        <h1 className="inline-flex items-center text-sm font-semibold">
          {user.first_name} {user.last_name}
        </h1>
        <p className="mt-2 text-xs text-gray-600 ">{user.email}</p>
        <p className="mt-2 text-sm text-gray-600">{user.gender}</p>
        <p className="mt-2 text-sm text-gray-600">{user.domain}</p>
        {/* <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div> */}
        {user.available ? (
          <button
            type="button"
            // w-full
            className="w-28 md:w-full mt-4 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={handleClick}
          >
            Add to Team
          </button>
        ) : (
          <button
            type="button"
            // w-full
            className="w-28 md:w-full mt-4 cursor-not-allowed rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            I am Busy!
          </button>
        )}
      </div>
    </div>
  );
}
