// Узнаёт слово в тексте в разных формах: wait → waits/waited/waiting, plate → plates, try → tried, knife / knives.
window.wforms = function (key) {
  const out = new Set();
  key.toLowerCase().split(' / ').forEach(v => v.replace(/\(.*?\)|\+ ?-ing/g, '').replace(/[^a-z' ]/g, ' ').trim().split(/\s+/).forEach(w => { if (w) out.add(w); }));
  return [...out];
};
window.wmatch = function (tok, key) {
  if (!tok) return false;
  return window.wforms(key).some(k => {
    if (k.length < 3) return tok === k;
    if (tok === k) return true;
    const st = k.replace(/e$/, ''), sy = k.replace(/y$/, 'i');
    return [k + 's', k + 'es', k + 'ed', k + 'd', k + 'ing', st + 'ing', k + k.slice(-1) + 'ing', k + k.slice(-1) + 'ed', sy + 'es', sy + 'ed', k + "'s", k + 'er', k + 'est', k + 'r', sy + 'er', sy + 'est', k + 'ly', k.replace(/fe?$/, 'ves')].includes(tok);
  });
};
