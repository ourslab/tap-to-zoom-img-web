function zoom_view_show(zoom_view_dom, img_url) {
  const window_width = document.documentElement.clientWidth;
  const window_height = document.documentElement.clientHeight;
  if (window_width > window_height) {
    zoom_view_dom.img.style.width = `${window_width}px`;
    zoom_view_dom.img.style.height = `${window_width}px`;
  } else {
    zoom_view_dom.img.style.width = `${window_height}px`;
    zoom_view_dom.img.style.height = `${window_height}px`;
  }
  zoom_view_dom.img.src = img_url;
  zoom_view_dom.style.width = `${window_width}px`;
  zoom_view_dom.style.height = `${window_height}px`;
  zoom_view_dom.style.display = "block";
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
  zoom_view_dom.style.overflowX = "hidden";
  zoom_view_dom.style.overflowY = "scroll";
  zoom_view_dom.img = document.createElement("img");
  zoom_view_dom.img.className = "zoom-view";
  zoom_view_dom.img.style.backgroundFilter = "blur(5px)";
  zoom_view_dom.img.addEventListener("click", function (e=null) {
    zoom_view_dom.style.display = "none";
  });
  zoom_view_dom.appendChild(zoom_view_dom.img);
  document.body.appendChild(zoom_view_dom);
  [].slice.call(document.querySelectorAll('img')).forEach(img => {
    if (img.className == "zoom-view") {
      continue;
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
