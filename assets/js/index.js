let lastContext;
let remove;
let arr = [
  "<i class='fa-solid fa-eye ' style='margin-right:20px;'></i>   Preview",
  "<i class='fa-solid fa-up-down-left-right'style='margin-right:20px;'></i> Open with",
  "<i class='fa-solid fa-user-plus'style='margin-right:20px;'></i> Share",
  "<i class='fa-solid fa-link' style='margin-right:20px;'></i>Get link",
  "<i class='fa-solid fa-plus'style='margin-right:20px;'></i> Add to workspace",
  "<i class='fa-regular fa-folder'style='margin-right:20px;'></i> Show file location",
  "<i class='fa-brands fa-google-drive'style='margin-right:20px;'></i> Add shortcut to Drive",
  "<i class='fa-solid fa-folder-plus'style='margin-right:20px;'></i> Move to",
  "<i class='fa-solid fa-star'style='margin-right:20px;'></i> Add to Starred",
  "<i class='fa-solid fa-pen'style='margin-right:20px;'></i> Rename",
  "<i class='fa-solid fa-closed-captioning'style='margin-right:20px;'></i> View caption tracks",
  "<i class='fa-regular fa-clock'style='margin-right:20px;'></i> Manage versions",
  "<i class='fa-regular fa-copy'style='margin-right:20px;'></i> Make a copy",
  "<i class='fa-solid fa-circle-exclamation'style='margin-right:20px;'></i> Report  abuse",
  "<i class='fa-solid fa-download'style='margin-right:20px;'></i> Download",
  "<i class='fa-regular fa-trash-can'style='margin-right:20px;'></i> Move to trans",
  " <i class='fa-solid fa-thumbs-down'style='margin-right:20px;'></i>Not ahelpful suggestion"
];
window.oncontextmenu = function (event) {
  event.preventDefault();
  let div = document.createElement("div");

  lastContext ? lastContext.remove() : "null";
  div.className = "context";
  div.style.width = "300px";
  div.style.height = "600px";
  div.style.backgroundColor="#EFEFEF"

  div.style.borderRadius = "8px"
  div.style.boxShadow = "0px 0px 10px -5px";
  div.style.position = "fixed";
  div.style.top = `${event.clientY}px`;
  div.style.left = `${event.clientX}px`;
  document.body.prepend(div);
  lastContext = div;
  let ul = document.createElement("ul")
  ul.style.listStyle = "none"

  div.append(ul);


  for (i = 0; i <= arr.length - 1; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i]
    ul.appendChild(li);
    li.style.height = "35px";
    li.style.fontFamily = "bolder";
    li.style.fontSize = "17px";

    li.style.width = "200px";

  };
  let lastCont;
  event.preventDefault();
  ul.firstChild.onclick = function () {
    let menu = document.createElement("div");
    let input = document.createElement("input");
    lastCont ? lastCont.remove() : "null";
    menu.append(input);
    menu.style.display = "flex";
    menu.style.justifyContent = "center";
    menu.style.alignItems = "center";
    input.style.boxShadow = "0px 0px 10px -5px";


    menu.className = "lastcont"
    menu.style.boxShadow = "0px 0px 10px -5px";
    menu.style.position = "fixed";
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    menu.style.width = "250px";
    menu.style.height = "300px";
    menu.style.backgroundColor = "#EFEFEF";

    lastCont = menu;
    document.body.append(menu);


    input.onkeydown = function (e) {
      if (e.keyCode == 13) {

        document.body.style.backgroundColor = input.value;

        menu.remove() = "null";
      };
    }
    // window.oncontextmenu = function (even){
    //   event.preventDefault();
    // document.body.remove()="null";

    // }

  }



};


window.onclick = function () {
  lastContext ? lastContext.remove() : "null";
};








