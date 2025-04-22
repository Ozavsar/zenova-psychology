import { CalendarIcon, ClockIcon, UserIcon } from "@/components/icons";
import {
  Badge,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { ROUTES } from "@/config/routes";
import {
  calculateReadingTime,
  formatDate,
  formatName,
  generateDescription,
} from "@/lib/utils";
import { Post } from "@/types/strapi-types";
import Image from "next/image";
import Link from "next/link";

interface IPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: IPostCardProps) {
  return (
    <Card className="w-full overflow-hidden border p-0">
      <div className="relative aspect-[16/9] cursor-pointer overflow-hidden">
        <Link href={ROUTES.INTERNAL.BLOG.POST(post.slug)}>
          <Image
            src={post.coverImage.url || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {post.categories?.map((category) => (
            <Badge key={category.slug} variant="primary">
              <Link href={ROUTES.INTERNAL.BLOG.CATEGORY(category.slug)}>
                {category.name}
              </Link>
            </Badge>
          ))}
        </div>
      </div>
      <CardHeader>
        <CardTitle>
          <h3 className="mb-2 text-xl font-bold">
            <Link
              href={ROUTES.INTERNAL.BLOG.POST(post.slug)}
              className="hover:underline"
            >
              {post.title}
            </Link>
          </h3>
        </CardTitle>
        <CardDescription className="">
          <p className="text-muted-foreground line-clamp-4">
            {generateDescription(post.content)}
            ...
          </p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="*:text-muted-foreground mt-auto flex items-center justify-between gap-4 border-t p-4 *:text-xs">
        <div className="flex gap-1 2xl:gap-2">
          <UserIcon className="size-3 2xl:size-4" />
          <span className="whitespace-nowrap">
            {post.expert?.expertTitle} {formatName(post.expert?.name)}
          </span>
        </div>
        <div className="flex items-center gap-2 *:flex *:gap-1 *:2xl:gap-2">
          <div>
            <CalendarIcon className="size-3 2xl:size-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div>
            <ClockIcon className="size-3 2xl:size-4" />
            <span>{calculateReadingTime(post.content)}dk</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
