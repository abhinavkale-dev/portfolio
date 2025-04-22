"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  title: string;
  href?: string;
  description: string;
  tags?: string[];
  link?: string;
  repoUrl?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  repoUrl,
  image,
  links,
  className,
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-zinc-700 bg-[#121212] text-[#E1E3E5] shadow-lg hover:shadow-xl transition-all duration-300 ease-out h-full relative">
      
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {image && (
          <div className="mt-4 h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}
      </Link>
      
      <CardHeader className="px-6 pt-4">
        <div className="space-y-2">
          <CardTitle className="text-xl font-bold text-[#E1E3E5]">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible text-[#E1E3E5]">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="text-sm text-zinc-200 leading-relaxed">
            {description}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="mt-auto px-6">
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1.5 py-0.5 text-[10px] bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#E1E3E5]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="px-6 pb-6 flex flex-col items-start">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-3">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank" rel="noopener noreferrer">
                <Badge key={idx} className="flex gap-2 px-1.5 py-0.5 text-[10px] bg-[#1F1F1F] hover:bg-[#2A2A2A] text-[#64FFDA]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
        
        {(link || repoUrl) && (
          <div className="!mt-2 flex items-center gap-4">
            {link && (
              <a 
                target="_blank" 
                rel="external" 
                className="!p-0 h-full hover:!text-[#64FFDA] !flex items-center gap-2 !text-sm !text-[#E1E3E5]" 
                aria-label={`visit ${title} live URL`} 
                href={link}
              >
                <FaExternalLinkAlt size={12} />
                <span> Live Preview</span>
              </a>
            )}
            {repoUrl && (
              <a 
                target="_blank" 
                rel="external" 
                className="!p-0 h-full hover:!text-[#64FFDA] !flex items-center gap-2 !text-sm !text-[#E1E3E5]" 
                aria-label={`visit ${title} Github Repo`} 
                href={repoUrl || "https://github.com/abhinavkale-dev/Cineverse"}
              >
                <FaGithub size={16} />
                <span> Repo Url</span>
              </a>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
} 