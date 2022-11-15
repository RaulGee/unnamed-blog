import formatDatetime from "@utils/formatDatetime";

export interface Props {
  datetime: string;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
    <div className={`opacity-80 flex items-center space-x-2 ${className}`}>

      <span className={`italic ${size === "sm" ? "text-sm" : "text-base"} opacity-80`}>
        {formatDatetime(datetime)}
      </span>
    </div>
  );
}
