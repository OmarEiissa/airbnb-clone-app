"use client";

import { SearchIcon, UsersIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SearchBar = ({ placeholder }: { placeholder?: string }) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {input && (
        <div className="absolute top-full left-1/2 flex flex-col col-span-3 mx-auto -translate-x-1/2">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />

          <div className="flex items-center border-b p-16 bg-white">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              aria-label="number of guests"
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
              min={1}
            />
          </div>

          <div className="flex items-center bg-white p-5">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={() => setInput("")}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
              }}
              className="flex-grow text-red-400"
              onClick={() => setInput("")}
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
