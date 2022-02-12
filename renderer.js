class EraseFiles extends HTMLTableRowElement {

    constructor(path,method) {
    super();
    //sthis.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'
    this.path = path;//this.getAttribute('path');
    this.method = method;//"default";
    this.status = "TODO";
    this.actions = "start";
    this.setAttribute('path',this.path);
    this.setAttribute('method',this.method);
  }

  getHTML(){
    this.appendChild(this.getFileNameElement());
    this.appendChild(this.getStatus());
    this.appendChild(this.getMethod());
    this.appendChild(this.getAction());
  }

  getFileNameElement(){
    var td = document.createElement("td");
    td.setAttribute('class','file_name');
    td.innerHTML = this.path;
    return td;
  }

  getStatus(){
    var td = document.createElement("td");
    td.setAttribute('class','status');
    td.innerHTML = this.status;
    return td;
  }

  getMethod(){
      var td = document.createElement("td");
      td.setAttribute('class','method');
      td.innerHTML = this.method;
      return td;
  }

  getAction(){
    var td = document.createElement("td");
    td.setAttribute('class','action-section');
    switch (this.actions) {
      case "start":
        var span = document.createElement("img");
        span.setAttribute('class','start');
        span.setAttribute('onclick','startInfo(this);')
        span.setAttribute('src','./pictures/start.svg');
        td.appendChild(span);
        console.log("test");
        break;
      case "running":
        console.log("running");
        break;
      default:
        break;

    }
    /**

    if(this.actions.indexOf("start") != -1){
      var span = document.createElement("span");
      span.setAttribute('class','action');
      span.setAttribute('onclick','startInfo(this);')
      span.innerHTML = '🟦';
      td.appendChild(span);
    }
    if (this.actions.indexOf("pause") != -1){
      td.
      var span = document.createElement("span");
      span.setAttribute('class','action');
      span.setAttribute('onclick','startInfo(this);')
      span.innerHTML = '🟦';
      td.appendChild(span);
    }*/
    return td;
  }
}

customElements.define('erase-file', EraseFiles,{ extends: "tr" });
const deleteTable = document.getElementById("file_to_delete");

function addFile(){
  var path = "/home/augustin/Téléchargements/CV MORANGE Cécile_files";
  var newFileToDelete = new EraseFiles(path,"default");
  newFileToDelete.getHTML();
  deleteTable.appendChild(newFileToDelete);
}


function startInfo(element){
  console.log(element.parentNode.parentNode);
}
