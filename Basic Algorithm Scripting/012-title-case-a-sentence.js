function titleCase(str) {
  return str.toLowerCase().split(" ").map(i => i.replace(i.charAt(0), i.charAt(0).toUpperCase())).join(" ");
}

titleCase("I'm a little tea pot");