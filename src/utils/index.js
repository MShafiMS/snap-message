export function renderClickableLinks(content) {
  if (!content) {
    return [];
  }

  const words = content.split(' ');
  const renderedContent = words.map((word, index) => {
    // Check if the word is a URL
    const isURL = /^https?:\/\//i.test(word);

    if (isURL) {
      return (
        <a
          key={index}
          href={word}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          {word}
        </a>
      );
    }

    return <span key={index}>{word}</span>;
  });

  return renderedContent;
}