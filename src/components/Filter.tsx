import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  BuildingOfficeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

export const Filter = () => {
  return (
    <div className="bg-white w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-1 items-center text-sm">
          Sylhet <ChevronDownIcon width="16" height="16" />
        </div>
        <EllipsisVerticalIcon width="24" height="24" />
      </div>
      <div className="flex gap-4 items-center my-5">
        <div className="px-4 py-[6px] flex gap-1 items-center justify-center bg-indigo-500 rounded-full text-white text-sm">
          <BuildingOfficeIcon width="16" height="16" />
          Hotels
        </div>
        <div className="px-4 py-[6px] flex gap-1 items-center justify-center rounded-full text-sm border-gray-100 border-solid border">
          <RocketLaunchIcon width="16" height="16"  />
          Flight
        </div>
      </div>
    </div>
  );
};
