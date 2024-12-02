import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function SolutionCard({ title, description, icon }: SolutionCardProps) {
  return (
    <Card className="mx-auto w-full max-w-lg bg-white">
      <CardHeader className="rounded-t-xl bg-nebuleuse">
        <CardTitle className=" flex flex-row justify-center items-center text-center text-3xl font-bold text-white gap-2">
          <span className="text-4xl">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-6 py-8">
        {description.split("\n\n").map((text, index) => (
          <div
            key={index}
            className="text-justify text-lg font-medium text-black"
          >
            {text}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}