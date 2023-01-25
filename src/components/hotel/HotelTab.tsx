import { FC } from "react";
import { HotelItem } from "./HotelItem";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const HotelTab: FC<{ data: any[] }> = ({ data }) => {
  return (
    <div>
      <div className="my-4 w-full relative">
        <input
          className="bg-gray-100 p-4 rounded-2xl w-full indent-5"
          placeholder="New york city"
        />
        <div className="absolute left-3 top-5">
          <MagnifyingGlassIcon className="text-gray-400" width="16" height="16" />
        </div>
      </div>
      <div>
        <h6 className="text-sm">Recently Checked</h6>
        <div>
          {data.map((prod: any, index: number) => (
            <HotelItem key={index} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};
