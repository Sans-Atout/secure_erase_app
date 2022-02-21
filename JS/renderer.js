
const deleteTable = document.getElementById("file_to_delete");
const {secure_erase,file_exist,dir_exist } = require('./NapiModules/secure-erase.node');
//const fs = require('fs').promises;

function addTrash(){
  let username = require("os").userInfo().username ;
  var path = "/home/"+username+"/.local/share/Trash/";
  initFile(path);
}

function addFile(path, method){
  //var path = "/home/augustin/Téléchargements/CV MORANGE Cécile_files";
  var newFileToDelete = new EraseFiles(path,method);
  newFileToDelete.getHTML();
  deleteTable.appendChild(newFileToDelete);

}

function initFile(path){
  addFile(path,"default");
  return;
}

function addFiles(element){
  files_array = element.files;
  if (files_array.length <= 0) return;
  for (var i =0; i < files_array.length; i++) initFile(files_array[i].path);
  return;
}


async function startInfo(element){
  var elementToDelete = element.parentNode.parentNode;
  //element.removeAttribute('action');
  elementToDelete.setAttribute('action','running');
  elementToDelete.setAttribute('avancement',0);
  path = elementToDelete.path;
  let isFile = file_exist(path);
  let isDir = dir_exist(path);
  if (isFile && isDir){
    //TODO launch asynchrone deletetion of file
  }else if(isFile && !isDir){
    //Improve this part
    secure_erase(elementToDelete.path);
  }else{
    //Raise Error
  }
  console.log(path);
  console.log(isFile);
  console.log(isDir);
  //
    elementToDelete.setAttribute('avancement',100);
  //}
  //console.log(elementToDelete);
}

function stopDeletion(element){
  var elementToDelete = element.parentNode.parentNode;
  element.removeAttribute('action');
  elementToDelete.setAttribute('action','stop');
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {}
}


