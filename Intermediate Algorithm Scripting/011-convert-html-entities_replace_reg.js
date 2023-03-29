function convertHTML(str) {
  const html = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    // 留意此行，想要括單引號的話，要用雙引號
    "'":'&apos;'
  };
  return str.replace(/([&<>\"'])/g, i => html[i]);
}

convertHTML("Dolce & Gabbana");