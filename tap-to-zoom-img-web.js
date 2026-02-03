function zoom_view_show(zoom_view_dom, img_url) {
  const window_width = document.documentElement.clientWidth;
  const window_height = document.documentElement.clientHeight;
  zoom_view_dom.src = img_url;
  zoom_view_dom.style.display = "hidden";
  zoom_view_dom.style.width = `${window_width}px`;
  zoom_view_dom.style.height = `${window_height}px`;
  zoom_view_dom.style.margin = "0px";
  // const zoom_view_size_x = parseInt(window_width * 0.8);
  // const zoom_view_size_y = parseInt(window_height * 0.8);
  // const zoom_view_padding_x = parseInt((window_width - zoom_view_size_x) / 2);
  const zoom_view_padding_x = 0;
  // const zoom_view_padding_y = parseInt((window_height - zoom_view_size_y) / 2);
  const zoom_view_padding_y = 0;
  zoom_view_dom.style.padding = `${zoom_view_padding_y}px ${zoom_view_padding_x}px`;
  zoom_view_dom.style.objectFit = "contain";
  zoom_view_dom.style.backdropFilter = "blur(5px)";
  zoom_view_dom.style.display = "block";
}

window.addEventListener("load", function(e=null) {
  const zoom_view_dom = document.createElement("img");
  zoom_view_dom.class = "zoom-view";
  zoom_view_dom.style.position = "fixed";
  zoom_view_dom.style.top = "0px";
  zoom_view_dom.style.left = "0px";
  zoom_view_dom.addEventListener("click", function (e=null) {
    zoom_view_dom.style.display = "none";
    zoom_view_dom.style.backdropFilter = "none";
  });
  document.body.appendChild(zoom_view_dom);
  [].slice.call(document.querySelectorAll('img:not(.zoom-view)')).forEach(img => {
    if (img.parentElement.tagName === "FIGURE") {
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
