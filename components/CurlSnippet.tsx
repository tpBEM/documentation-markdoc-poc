import { generateCodeSnippets } from "../markdoc/functions";
import Highlight from "react-highlight";

export default function CurlSnippet({ command, lang }) {
    const snippets = generateCodeSnippets(command);

    // If a specific language is requested
    if (lang !== "all") {
        return (
            <div>
                <h4>{lang.toUpperCase()}</h4>
                <Highlight className={lang}>{snippets[lang]}</Highlight>
            </div>
        );
    }

    // Render all snippets
    return (
        <div>
            {Object.keys(snippets).map((key) => (
                <div key={key}>
                    <h4>{key.toUpperCase()}</h4>
                    <Highlight className={key}>{snippets[key]}</Highlight>
                </div>
            ))}
        </div>
    );
}