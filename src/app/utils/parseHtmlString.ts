export function parseHtmlString(string: string) {
  if (typeof window !== "undefined" && window.DOMParser) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(string, "text/html");

    const result: any = [];

    const tagToType: any = {
      H1: "header",
      P: "paragraph",
    };

    doc.body.childNodes.forEach((node: any) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const type = tagToType[node.tagName];
        if (type) {
          result.push({
            type: type,
            value: node.textContent,
          });
        }
      }
    });

    return result;
  }
}
