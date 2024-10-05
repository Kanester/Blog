function init(src) {
  const script = document.createElement("script");
  script.setAttribute("src", src);
  document.head.appendChild(script);
}

export {init};