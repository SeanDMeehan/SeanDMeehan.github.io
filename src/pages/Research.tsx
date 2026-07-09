import { research } from "../content/research";
import  ResearchCard  from "../components/cards/ResearchCard";

export default function Research() {
    return (
        <section>
            <h1>Research</h1>

            {research.map((paper) => (
                <ResearchCard
                    key={paper.id}
                    research={paper}
                />
            ))}
        </section>
    );
}