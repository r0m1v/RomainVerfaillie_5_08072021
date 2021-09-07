const testTest = () =>{
  const recupDataLocalStorage = JSON.parse(localStorage.getItem("test"));
document.getElementById("aaaa").innerHTML = send(recupDataLocalStorage);
}
testTest();

