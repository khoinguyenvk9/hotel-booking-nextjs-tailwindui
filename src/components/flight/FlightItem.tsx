
import { FC } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

type ProdItemProps = {
  product: any;
};

export const FlightItem: FC<ProdItemProps> = ({ product }) => {
  return (
    <div className="my-3">
      <div className="rounded-xl">
        <img
          src={product?.image}
          width="100%"
          height="auto"
          className="aspect-video object-cover w-full overflow-hidden rounded-2xl"
        />
      </div>
      <div className="py-2">
        <div className="flex justify-between items-center">
          <h4>{product?.name}</h4>
          <h4>${product?.price}</h4>
        </div>
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">{product?.location}</span>
            <span className="inline-flex items-center text-orange-400">
              <StarIcon width="16" height="16" className="inline" />
              {product?.start}
            </span>
          </div>
          <h4 className="text-gray-400">Per night</h4>
        </div>
      </div>
    </div>
  );
};
