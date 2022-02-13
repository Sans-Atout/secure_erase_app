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
    this.setAttribute('action','start');
  }

  getHTML(){
    this.appendChild(this.getFileNameElement());
    this.appendChild(this.getStatus());
    this.appendChild(this.getMethod());
    this.appendChild(this.getAction());
  }

  getFileNameElement(){
    var td = document.createElement("td");
    if(this.actions == "start"){
      td.setAttribute('class','file_name');
      td.innerHTML = this.path;
    }else if(this.actions == "running"){
        let progressBar = document.createElement("div");
        progressBar.setAttribute("class","meter");
        let bar = document.createElement("span");
        this.avancement = 0;

        bar.setAttribute("style","width: "+this.avancement+"%");
        progressBar.appendChild(bar);
        td.appendChild(progressBar);

    }

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
    this.setAttribute('class',this.actions);
    var td = document.createElement("td");
    td.setAttribute('class','action-section');
    switch (this.actions) {
      case "start":

        var span = document.createElement("img");
        span.setAttribute('class','start');
        span.setAttribute('onclick','startInfo(this);')
        span.setAttribute('src','./pictures/start.svg');
        td.appendChild(span);
        break;
      case "running":
        var stop = document.createElement("img");
        var pause = document.createElement("img");
        pause.setAttribute('onclick','pauseDeletion(this);')
        pause.setAttribute('src','./pictures/pause.svg');
        stop.setAttribute('onclick','stopDeletion(this);')
        stop.setAttribute('src','./pictures/stop.svg');

        td.appendChild(pause);
        td.appendChild(stop);
        break;
      default:
        break;

    }
    return td;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "action")
    {
      if(oldValue == "start" && newValue == "running"){
        this.actions = newValue;
        this.status = "Progress";
        this.updateView();
      }
    }
  }

  static get observedAttributes(){
    return ["method", "action"];
  }

  updateView(){
    this.innerHTML = '';
    this.appendChild(this.getFileNameElement());
    this.appendChild(this.getStatus());
    this.appendChild(this.getMethod());
    this.appendChild(this.getAction());
  }

}

customElements.define('erase-file', EraseFiles,{ extends: "tr" });
