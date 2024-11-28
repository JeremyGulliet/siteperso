import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonCall from "../ButtonCall";

interface OfferCardProps {
  title: string;
  subtitle?: string;
  features?: string[];
  option?: string;
}

export default function OfferCard({
  title,
  subtitle,
  features,
}: OfferCardProps) {
  return (
    <Card className="mx-auto flex h-[650px] w-full max-w-[90%] flex-col bg-white sm:max-w-lg">
      <CardHeader className="rounded-t-xl bg-nebuleuse h-[150px] sm:h-[180px] flex items-center justify-center p-4 sm:p-6">
        <CardTitle className="flex flex-col gap-4 text-center text-xl font-extrabold text-white sm:text-4xl">
          {title}
          {subtitle && (
            <p className="text-lg font-bold sm:text-2xl">{subtitle}</p>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-4 py-3 sm:px-6 sm:py-4">
        {features && (
          <div>
            <p className="py-2 text-lg font-bold text-black sm:py-3 sm:text-xl">
              Inclus:
            </p>
            <ul className="list-inside list-disc space-y-2 text-black text-xl">
              {features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className=" flex justify-center items-center mt-auto p-4 sm:p-6">
        <ButtonCall />
      </CardFooter>
    </Card>
  );
}
