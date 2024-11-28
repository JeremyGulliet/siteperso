import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link} target="_blank">
      <Card className="group mx-auto h-[500px] w-full bg-white transition-all duration-300 hover:scale-105">
        <CardHeader className="relative h-48 rounded-t-xl bg-nebuleuse p-0">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-t-xl object-cover"
          />
        </CardHeader>
        <CardContent className="flex h-[calc(500px-192px)] flex-col space-y-4 px-6 py-8">
          <CardTitle className="text-center text-xl font-bold text-nebuleuse">
            {title}
          </CardTitle>
          <div className="line-clamp-5 overflow-hidden text-justify text-base font-medium text-black group-hover:line-clamp-none group-hover:overflow-y-auto">
            {description.split("\n\n").map((text, index) => (
              <p key={index} className="mb-2">
                {text}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
