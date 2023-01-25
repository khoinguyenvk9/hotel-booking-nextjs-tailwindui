import { FC } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

type ProdItemProps = {
  product: any;
};

export const HotelItem: FC<ProdItemProps> = ({ product }) => {
  return (
    <div className="my-3">
      <div className="rounded-xl relative">
        <img
          src={product?.image}
          width="100%"
          height="auto"
          className="aspect-video object-cover w-full overflow-hidden rounded-2xl"
        />
        <div className="absolute right-2 top-2 backdrop-sepia-0 bg-white/20 rounded-full text-[10px] text-white px-2 py-[2px]">
          45%
        </div>
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
