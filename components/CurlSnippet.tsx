import { useState } from "react";
import { generateCodeSnippets } from "../markdoc/functions";
import Highlight from "react-highlight";

export default function CurlSnippet({ command, lang }) {
    const snippets = generateCodeSnippets(command);
    const languages = Object.keys(snippets);
    const [activeLang, setActiveLang] = useState(languages[0]);

    return (
        <div style={styles.container}>
            {/* Tab Header */}
            <div style={styles.tabHeader}>
                {languages.map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        style={{
                            ...styles.tabButton,
                            ...(activeLang === lang ? styles.activeTab : {}),
                        }}
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Active Code Snippet */}
            <div style={styles.codeContainer}>
                <Highlight className={activeLang}>{snippets[activeLang]}</Highlight>
            </div>
        </div>
    );
}

// Styles
const styles = {
    container: {
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#f9fafb",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    tabHeader: {
        display: "flex",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
    },
    tabButton: {
        flex: 1,
        padding: "10px 15px",
        cursor: "pointer",
        textAlign: "center" as const,
        fontSize: "14px",
        fontWeight: "500",
        color: "#6b7280",
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "2px solid transparent",
        transition: "all 0.2s ease-in-out",
    },
    activeTab: {
        color: "#1f2937",
        borderBottom: "2px solid #ffe500",
        backgroundColor: "#04da8d",
    },
    codeContainer: {
        padding: "16px",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize: "14px",
        lineHeight: "1.5",
        overflowX: "auto" as React.CSSProperties["overflowX"],
    },
};
