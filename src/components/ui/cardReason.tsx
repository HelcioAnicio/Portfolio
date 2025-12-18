import { Card, CardContent, CardTitle } from "./card";
import type { ReactNode } from "react";

type CardReasonProps = {
  icon: ReactNode;
  title: string;
  text: string;
  newClassName?: string;
};

export const CardReason = ({
  icon,
  title,
  text,
  newClassName,
}: CardReasonProps) => {
  return (
    <Card
      className={`flex w-max max-w-sm flex-col items-start gap-5 px-4 py-8 ${newClassName}`}
    >
      <CardTitle className="flex items-center gap-2 md:text-lg">
        {icon} {title}
      </CardTitle>
      <CardContent className="pr-13 p-0 text-xs font-extralight">
        {text}
      </CardContent>
    </Card>
  );
};
