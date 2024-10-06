const init = async (src: String) => {
  const script = document.createElement("script");
  script.setAttribute("src", src);
  document.head.appendChild(script);
  
  script.addEventListener("load", () => {
    console.log(`${src} is successfully loaded!`);
  });
  
  script.addEventListener("error", (e) => {
    console.log(`error on loading ${src}`, e)
  })
}

export {init};