function pairElement(str) {
  // nucleobase 核鹼基
  const nucleobase = {
    A: 'T',
    C: 'G',
    G: 'C',
    T: 'A'
  }
  return str.split('').map(d => [d,nucleobase[d]]);
}

pairElement("GCG");