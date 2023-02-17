import { GithubLogo, LinkSimple } from "phosphor-react";

interface CardPortfolioProps {
  title: string;
  description: string;
  tags: string;
  links: {
    github: string;
    site?: string;
  };
}

export function CardPortfolio({
  title,
  description,
  tags,
  links,
}: CardPortfolioProps) {
  return (
    <div className="dark:bg-zinc-800 rounded-lg p-4 shadow-md transform transition-all hover:scale-105 lg:hover:scale-110">
      <strong className="dark:text-zinc-100">{title}</strong>
      <p className="text-sm dark:text-zinc-100">{description}</p>
      <div className="flex flex-row justify-between items-end mt-4">
        <span className="text-xs font-medium">{tags}</span>
        <div className="flex flex-row gap-4">
          <a
            href={links.github}
            target="_blank"
            className="hover:text-zinc-200 transition-colors"
          >
            <GithubLogo size={32} />
          </a>
          {links.site && (
            <a
              href={links.site}
              target="_blank"
              className="hover:text-zinc-200 transition-colors"
            >
              <LinkSimple size={32} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
