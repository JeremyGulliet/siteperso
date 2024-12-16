import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

interface AvisCardProps {
  texte: string;
  auteurNom: string;
  auteurImage?: string;
  auteurFunction: string;
}

export default function AvisCard({
  texte,
  auteurNom,
  auteurFunction,
}: AvisCardProps) {
  return (
    <Card className="group mx-auto w-full max-w-md bg-white">
      <CardContent className="px-4 py-8 md:px-6 md:py-12">
        <div className="relative">
          <ImQuotesLeft className="absolute -left-2 -top-6 size-6 text-purple md:-top-10 md:size-8" />
          <p className="px-2 text-sm font-medium italic text-black md:text-base">
            {texte}
          </p>
          <ImQuotesRight className="absolute -bottom-6 -right-2 size-6 text-purple md:-bottom-10 md:size-8" />
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-2 rounded-b-xl border-t border-purple bg-nebuleuse p-3 pt-2 md:gap-4 md:p-4">
        <div>
          <p className="md:text-md text-sm font-semibold text-white">
            {auteurNom}
          </p>
          <p className="text-xs font-medium text-white md:text-sm">
            {auteurFunction}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
