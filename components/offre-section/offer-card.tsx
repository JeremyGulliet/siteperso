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
    <Card className="mx-auto flex w-full max-w-[90%] flex-col bg-lightPurple pb-4 sm:max-w-lg">
      <CardHeader className="flex h-[150px] items-center justify-center gap-8 rounded-t-xl bg-gradient-to-t from-purple to-nebuleuse p-4 sm:h-[230px] sm:p-6">
        <CardTitle className="flex flex-col gap-4 text-center text-xl font-extrabold text-white sm:text-4xl">
          {title}
          {subtitle && (
            <p className="text-lg font-medium sm:text-2xl">{subtitle}</p>
          )}
        </CardTitle>
        <CardDescription className="text-lg font-bold text-white sm:text-5xl">
          {price}€
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-4 py-3 sm:px-6 sm:py-4">
        {features && (
          <div>
            <p className="py-2 text-lg font-bold text-black sm:py-3 sm:text-xl">
              Inclus:
            </p>
            <ul className="list-inside space-y-4 text-xl text-black">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="shrink-0">
                    <GiCheckMark className="size-5 text-nebuleuse" />
                  </span>
                  <li>{item}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      {/* <CardFooter className="mt-auto flex items-center justify-center p-4 sm:p-6">
        <ButtonCall />
      </CardFooter> */}
    </Card>
  );
}
