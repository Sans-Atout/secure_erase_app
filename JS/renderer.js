
const deleteTable = document.getElementById("file_to_delete");

function addFile(){
  var path = "/home/augustin/Téléchargements/CV MORANGE Cécile_files";
  var newFileToDelete = new EraseFiles(path,"default");
  newFileToDelete.getHTML();
  deleteTable.appendChild(newFileToDelete);
}


function startInfo(element){
  var elementToDelete = element.parentNode.parentNode;
  element.removeAttribute('action');
  elementToDelete.setAttribute('action','running');
  console.log(elementToDelete);
}
