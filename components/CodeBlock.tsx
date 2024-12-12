import Prism from 'prismjs';
import * as React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  'data-language'?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = React.memo(({ children, 'data-language': language = 'javascript' }) => {
  const ref = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current, false);
    }
  }, [children]);

  return (
    <div className="code" aria-live="polite">
      <pre ref={ref} className={`language-${language}`}>
        {children}
      </pre>
      <style jsx>
        {`
          .code {
            position: relative;
          }

          /* Override Prism styles */
          .code :global(pre[class*='language-']) {
            text-shadow: none;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
});