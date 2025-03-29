
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export default function BlogCard({ title, description, date, readTime, imageUrl }: BlogCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Read More</Button>
      </CardFooter>
    </Card>
  );
}
