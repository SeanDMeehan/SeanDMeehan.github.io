import type { PortfolioLink } from "../../types/portfolio";

type LinkListProps = {
    links: PortfolioLink[];
};

export function LinkList({ links }: LinkListProps) {
    return (
        <div>
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
}