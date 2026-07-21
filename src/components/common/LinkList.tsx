import type { PortfolioLink } from "../../types/portfolio";
import  { CommonButton } from "./CommonButton";

type LinkListProps = {
    links: PortfolioLink[];
};

export function LinkList({ links }: LinkListProps) {
    return (
        <div>
            {links.map((link) => (
                <a
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <CommonButton
                        onClick={()=>{}}
                    >
                        {link.label}
                    </CommonButton>
                </a>
            ))}
        </div>
    );
}