export function arrayToHtmlString(array: any) {
  let htmlString = "";

  const typeToTag: any = {
    header: "h1",
    paragraph: "p",
  };

  array.forEach((item: any) => {
    const tag = typeToTag[item.type];
    if (tag) {
      htmlString += `<${tag}>${item.value}</${tag}>`;
    }
  });

  return htmlString;
}
