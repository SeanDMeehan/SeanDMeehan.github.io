type TagListProps = {
    tags: string[];
};

export function TagList({ tags }: TagListProps) {
    return (
        <div>
            {tags.map((tag) => (
                <span key={tag}>{tag}, </span>
            ))}
        </div>
    );
}