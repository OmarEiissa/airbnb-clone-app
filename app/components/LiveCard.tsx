import Image from "next/image";
import { LiveItem } from "../types/app";

type LiveCardProps = LiveItem;

const LiveCard = ({ img, title }: LiveCardProps) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative size-80">
        <Image src={img} alt="Live Card" fill />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default LiveCard;
