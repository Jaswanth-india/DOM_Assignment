let userButtonClickCount=0;
document.querySelector("#userButton").addEventListener("click",()=>{
    if(userButtonClickCount%2==0){
        document.querySelector("#userButton").innerHTML='<img src="Assets/plus.png" width="50" height="50">';
        document.querySelector("main").style="transform:perspective(1000px) rotateY(-180deg)";
        document.querySelector("#userButton").style="bottom:10%; left:10%;";
    }else{
        document.querySelector("#userButton").innerHTML='<img src="Assets/user.png" width="50" height="50">';
        document.querySelector("main").style="transform:perspective(1000px) rotateY(0deg)";
        document.querySelector("#userButton").style="bottom:10%; right:10%;";
    }

    userButtonClickCount+=1;
});

let studentCounter=0;
let studentsArr=[];
const parent=document.querySelector("section:nth-of-type(2)>div");
document.querySelector("section article button").addEventListener("click",()=>{
    let newStudent=document.createElement("div");
    parent.appendChild(newStudent);
    let serialNo=document.createElement("div");
    newStudent.appendChild(serialNo);
    serialNo.innerText=studentCounter+1+".";
    let firstName=document.createElement("div");
    newStudent.appendChild(firstName);
    firstName.innerText=document.querySelector("article input:nth-of-type(1)").value;
    let lastName=document.createElement("div");
    lastName.innerText=document.querySelector("article input:nth-of-type(2)").value;
    newStudent.appendChild(lastName);
    let registrationNumber=document.createElement("div");
    newStudent.appendChild(registrationNumber);
    registrationNumber.innerText=document.querySelector("article input:nth-of-type(3)").value;
    let phoneNumber=document.createElement("div");
    newStudent.appendChild(phoneNumber);
    phoneNumber.innerText=document.querySelector("article input:nth-of-type(4)").value;
    let email=document.createElement("div");
    newStudent.appendChild(email);
    email.innerText=document.querySelector("article input:nth-of-type(5)").value;
    let modify=document.createElement("button");
    newStudent.appendChild(modify);
    modify.innerHTML='<img src="Assets/edit.png">';
    let deleteButton=document.createElement("button");
    newStudent.appendChild(deleteButton);
    deleteButton.innerHTML='<img src="Assets/delete.png">';
    studentsArr[studentCounter]={};
    studentsArr[studentCounter].Id=studentCounter;
    studentsArr[studentCounter].firstName=firstName.innerText;
    studentsArr[studentCounter].lastName=lastName.innerText;
    studentsArr[studentCounter].registrationNumber=registrationNumber.innerText;
    studentsArr[studentCounter].phoneNumber=phoneNumber.innerText;
    studentsArr[studentCounter].email=email.innerText;
    studentsArr[studentCounter].element1=newStudent;

    //Delete Functionality
    studentsArr[studentCounter].delete=function(){
        deleteButton.addEventListener("click",()=>{
            this.element1.remove();
        });
    }
    studentsArr[studentCounter].delete();
    
    //Edit Functionality
    studentsArr[studentCounter].edit=function(){
        modify.addEventListener("click",()=>{
            document.querySelector("article input:nth-of-type(1)").value=this.firstName;
            document.querySelector("article input:nth-of-type(2)").value=this.lastName;
            document.querySelector("article input:nth-of-type(3)").value=this.registrationNumber;
            document.querySelector("article input:nth-of-type(4)").value=this.phoneNumber;
            document.querySelector("article input:nth-of-type(5)").value=this.email;
        });
    }
    studentsArr[studentCounter].edit();

    //Clearing Inputs
    document.querySelector("article input:nth-of-type(1)").value="";
    document.querySelector("article input:nth-of-type(2)").value="";
    document.querySelector("article input:nth-of-type(3)").value="";
    document.querySelector("article input:nth-of-type(4)").value="";
    document.querySelector("article input:nth-of-type(5)").value="";
    
    studentCounter+=1;
});

// Logic for animation of input fields
const inputData=document.querySelectorAll("article input");
for(let i=0; i<document.querySelectorAll("article input").length; i++){
    inputData[i].addEventListener("input",()=>{
        let inputLength=inputData[i].value.length;
        if(inputLength<100){
            if(inputLength>0){
                document.querySelectorAll("article input")[i].style.width=inputLength+4+"ch";
            }
            else{
                document.querySelectorAll("article input")[i].style.width="90%";
            }
        }
    }
)}

for(let i=0;i<document.querySelectorAll("article input").length; i++){
    inputData[i].addEventListener("focusout",()=>{
        inputData[i].style.width="90%";
    });
}