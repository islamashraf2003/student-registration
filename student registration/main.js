var myInsert=document.getElementById("ins");
class Student{
    constructor(id,name,program){
        this.id=id;
        this.name=name;
        this.program=program;
    }
}
const students = [];

var inputId=document.getElementById("num");
var inputName=document.getElementById("name");
var inputProgeram=document.getElementById("select");

myInsert.onclick=function(){
    const id=inputId.value;
    const name=inputName.value;
    const program=inputProgeram.value;
   const student=new Student(id,name,program);
   students.push(student);

   const myConfirm=window.confirm("Do you want to insert another student??");// yes 1 || no 0
   if(myConfirm){
    inputId.value="";
    inputName.value="";
    inputProgeram.value="";
   }else{
    myInsert.remove();
   }
}

var myShow=document.getElementById("sho");
myShow.onclick = function() {
    var output = "";
    for (let i = 0; i < students.length; i++) {
      output += `ID: ${students[i].id}, Name: ${students[i].name}, Program: ${students[i].program}<br>`;
    }
    document.getElementById("out").innerHTML = output;
  }