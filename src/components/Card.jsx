export function Card() {
  return (
    <div className="flex flex-col items-center p-2 md:p-4 max-w-[200px] border rounded-md shadow-md  border-1">
      <img
        src="https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1"
        alt=""
        className="w-16 h-16 border-2 border-gray-400 rounded-full"
        // h-[200px] w-full rounded-t-md object-cover
      />
      <div className="flex flex-col items-center ">
        <h1 className="inline-flex items-center text-lg font-semibold">
          Anet Doe
          {/* <ArrowUpRight className="w-4 h-4 ml-2" /> */}
        </h1>
        <span className="mt-2 text-sm text-gray-600">cwaldocke9@gmpg.org</span>
        <span className="mt-2 text-sm text-gray-600">Genderfluid</span>
        <span className="mt-2 text-sm text-gray-600">Business Development</span>
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
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add to Team
        </button>
      </div>
    </div>
  );
}
