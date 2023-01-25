import { FC } from "react";
import { FlightItem } from "./FlightItem";
import { Input } from "./Input";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";

export const FlightTab: FC<{ data: any[] }> = ({ data }) => {
  return (
    <div>
      <div className="my-4 w-full">
        <div className="relative">
          <Input label="From" seleted="New York(JFK)" hasIcon />
          <div className="my-2"></div>
          <Input label="To" seleted="Sylhet(SYL)" hasIcon />
          <div className="absolute top-[3.2rem] right-10 bg-white p-2 border border-gray-100 border-solid rounded-full">
            <ArrowsUpDownIcon
              width="24"
              height="24"
              className="relative bg-white  "
            />
          </div>
        </div>
        <div className="flex justify-between gap-2 my-2">
          <Input label="Departure" seleted="Sep 10" />
          <Input label="Return" seleted="Sep 12" />
        </div>
        <button className="rounded-2xl bg-green-600 w-full p-5 text-white text-sm mt-2">
          Search Flight
        </button>
      </div>
      <div>
        <h6 className="text-sm">Recently Checked</h6>
        <div></div>
      </div>
    </div>
  );
};
