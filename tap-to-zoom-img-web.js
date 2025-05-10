let window_width = 0;
let window_height = 0;
let img_list = [];
let zoom_view_dom = null;

function zoom_view_show(img_url) {
  let zoom_view_size_x = 0;
  let zoom_view_size_y = 0;
  let zoom_view_padding_x = 0;
  let zoom_view_padding_y = 0;
  window_width = document.documentElement.clientWidth;
  window_height = document.documentElement.clientHeight;
  zoom_view_dom.src = img_url;
  zoom_view_dom.style.display = "hidden";
  zoom_view_dom.style.width = `${window_width}px`;
  zoom_view_dom.style.height = `${window_height}px`;
  zoom_view_dom.style.margin = "0px";
  zoom_view_size_x = parseInt(window_width * 0.8);
  zoom_view_size_y = parseInt(window_height * 0.8);
  zoom_view_padding_x = parseInt((window_width - zoom_view_size_x) / 2);
  zoom_view_padding_y = parseInt((window_height - zoom_view_size_y) / 2);
  zoom_view_dom.style.padding = `${zoom_view_padding_y}px ${zoom_view_padding_x}px`;
  zoom_view_dom.style.objectFit = "contain";
  zoom_view_dom.style.backdropFilter = "blur(5px)";
  zoom_view_dom.style.display = "block";
}

window.addEventListener("load", function(e=null) {
  img_list = document.body.querySelectorAll("img");
  for (let a = 0; a < img_list.length; a++) {
    if (img_list[a].parentElement.tagName === "FIGURE") {
      img_list[a].parentElement.addEventListener("click", function(e=null) {
        zoom_view_show(img_list[a].src);
      });
    } else {
      img_list[a].addEventListener("click", function(e=null) {
        zoom_view_show(img_list[a].src);
      });
    }
  }
  zoom_view_dom = document.createElement("img");
  zoom_view_dom.style.position = "fixed";
  zoom_view_dom.style.top = "0px";
  zoom_view_dom.style.left = "0px";
  zoom_view_dom.addEventListener("click", function(e=null) {
    zoom_view_dom.style.display = "none";
    zoom_view_dom.style.backdropFilter = "none";
  });
  document.body.appendChild(zoom_view_dom);
});
