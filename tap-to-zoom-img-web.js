function zoom_view_show(zoom_view_dom, img_url) {
  const window_width = window.innerWidth;
  const window_height = window.innerHeight;
  zoom_view_dom.style.width = `${window_width}px`;
  zoom_view_dom.style.maxWidth = `${window_width}px`;
  zoom_view_dom.style.height = `${window_height}px`;
  zoom_view_dom.style.maxHeight = `${window_height}px`;
  zoom_view_dom.img.src = img_url;
  zoom_view_dom.style.display = "block";
  document.body.style.overflow = "hidden";
  if (window_width > window_height) {
    zoom_view_dom.img.style.width = `${window_width}px`;
    zoom_view_dom.img.style.height = `${window_width}px`;
    zoom_view_dom.scrollTo(0, (window_width - window_height) / 2);
  } else {
    zoom_view_dom.img.style.width = `${window_height}px`;
    zoom_view_dom.img.style.height = `${window_height}px`;
    zoom_view_dom.scrollTo((window_height - window_width) / 2, 0);
  }
}

window.addEventListener("load", function(e=null) {
  const zoom_view_dom = document.createElement("div");
  zoom_view_dom.style.display = "none";
  zoom_view_dom.style.position = "fixed";
  zoom_view_dom.style.top = "0px";
  zoom_view_dom.style.left = "0px";
  zoom_view_dom.style.margin = "0px";
  // zoom_view_dom.style.padding = "1vh 1vw";
  zoom_view_dom.style.padding = "0px";
  zoom_view_dom.style.overflow = "scroll";
  zoom_view_dom.img = document.createElement("img");
  zoom_view_dom.img.className = "zoom-view";
  zoom_view_dom.img.style.objectFit = "contain";
  zoom_view_dom.img.style.backdropFilter = "blur(5px)";
  zoom_view_dom.img.addEventListener("click", function (e=null) {
    zoom_view_dom.style.display = "none";
    document.body.style.overflow = "unset";
  });
  zoom_view_dom.appendChild(zoom_view_dom.img);
  document.body.appendChild(zoom_view_dom);
  [].slice.call(document.querySelectorAll('img')).forEach(img => {
    if (img.className == "zoom-view") {
    } else if (img.parentElement.tagName === "FIGURE") {
      img.parentElement.addEventListener("click", function (e=null) {
        zoom_view_show(zoom_view_dom, img.src);
      });
    } else {
      img.addEventListener("click", function(e=null) {
        zoom_view_show(zoom_view_dom, img.src);
      });
    }
  });
});
