import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export default function SolutionCard({
  title,
  description,
  icon,
  image,
}: SolutionCardProps) {
  return (
    <Card className="mx-auto w-full max-w-lg bg-white xl:max-w-2xl">
      <CardHeader className="relative h-48 overflow-hidden p-0 xl:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="size-full rounded-t-xl object-cover"
          priority
        />
      </CardHeader>

      <CardContent className="pt-6 xl:px-8 xl:pb-10 xl:pt-8">
        <div className="mb-4 flex items-center gap-2 xl:mb-6">
          <span className="text-2xl xl:text-3xl">{icon}</span>
          <h3 className="text-3xl font-bold xl:text-4xl">{title}</h3>
        </div>

        <div className="space-y-4 xl:space-y-6">
          {description.split("\n\n").map((text, index) => (
            <p
              key={index}
              className="text-justify text-lg font-medium xl:text-xl"
            >
              {text}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
