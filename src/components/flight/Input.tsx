import { FC } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

type InputProps = {
  label: string;
  seleted: string;
  hasIcon?: boolean;
};

export const Input: FC<InputProps> = ({ label, seleted, hasIcon = false }) => {
  return (
    <div className="flex justify-between items-center w-full bg-gray-100 p-4 rounded-2xl">
      <div className="text-xs">
        <span className="text-gray-400">{label}</span>
        <h6 className="text-sm">{seleted}</h6>
      </div>
      {hasIcon && (
        <div>
          <MapPinIcon className="text-gray-400" width="24" height="24" />
        </div>
      )}
    </div>
  );
};
