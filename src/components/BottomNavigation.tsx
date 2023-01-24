import { HomeIcon } from "@heroicons/react/24/solid";

import { HeartIcon, TagIcon, BellIcon } from "@heroicons/react/24/outline";
export const BottomNavigation = () => {
  return (
    <div className="flex bg-white justify-between w-full p-3 pb-0 sticky bottom-0">
      <div className="flex flex-col items-center gap-1">
        <HomeIcon className="text-green-500" width="24" height="24" />
        <span className="text-green-500 text-[10px] leading-none">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <HeartIcon className="text-gray-400" width="24" height="24" />
        <span className="text-gray-400 text-[10px] leading-none">
          Watchlist
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TagIcon className="text-gray-400" width="24" height="24" />
        <span className="text-gray-400 text-[10px] leading-none">Deals</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <BellIcon className="text-gray-400" width="24" height="24" />
        <span className="text-gray-400 text-[10px] leading-none">
          Notification
        </span>
      </div>
    </div>
  );
};
