import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonCall from "../ButtonCall";
import { GiCheckMark } from "react-icons/gi";

interface OfferCardProps {
  title: string;
  price: number | string;
  subtitle?: string;
  features?: string[];
  option?: string;
}

export default function OfferCard({
  title,
  subtitle,
  features,
  price,
}: OfferCardProps) {
  return (
    <Card className="xs:max-w-[90%] mx-auto flex w-full max-w-[95%] flex-col bg-lightPurple pb-4 sm:max-w-lg">
      <CardHeader className="xs:h-[200px] xs:gap-6 flex min-h-[180px] items-center justify-center gap-4 rounded-t-xl bg-gradient-to-t from-purple to-nebuleuse p-3 sm:h-[230px] sm:gap-8 sm:p-6">
        <CardTitle className=" flex flex-col gap-2 text-center text-2xl font-extrabold text-white sm:gap-4 sm:text-4xl">
          {title}
          {subtitle && (
            <p className="text-xl font-medium sm:text-2xl">
              {subtitle}
            </p>
          )}
        </CardTitle>
        <CardDescription className="text-3xl font-bold text-white sm:text-5xl">
          {price}€
        </CardDescription>
      </CardHeader>
      <CardContent className="xs:px-4 xs:py-3 flex-1 overflow-y-auto px-3 py-2 sm:px-6 sm:py-4">
        {features && (
          <div>
            <p className="xs:text-lg py-2 text-base font-bold text-black sm:py-3 sm:text-xl">
              Inclus:
            </p>
            <ul className="xs:space-y-4 xs:text-lg list-inside space-y-3 text-base text-black sm:text-xl">
              {features.map((item, index) => (
                <div key={index} className="xs:gap-4 flex items-center gap-3">
                  <span className="shrink-0">
                    <GiCheckMark className="xs:size-5 size-4 text-nebuleuse" />
                  </span>
                  <li>{item}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
