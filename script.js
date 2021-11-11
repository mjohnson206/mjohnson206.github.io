let input = document.getElementsByTagName("input")
let submit = document.getElementsByTagName("button")
let level = 0 
let gpa = 0.0
let underGrad = [5,4,5]
let Grad = [5,4,5]
let gradUnder = "UnderGrad"
let grades = []
let gradesAdded = false
window.onload = function()
{ 
    try 
    {
        
    document.getElementById("infoG").style.display = "none";
    
    document.getElementById("infoC").style.display = "block";
    } 
    catch (error) 
    {
        
    }
    try 
    {
         
    } 
    catch (error) 
    {
            
    }
} 
function getLevel()
{
    //let btnGrad = document.getElementsByTagName("getGrad")
    if(document.getElementById("infoG").style.display == "block")
    {
        document.getElementById("getGrad").value = "UnderGraduate"
        gradUnder = "UnderGrad"
        document.getElementById("infoG").style.display = "none"
    }
    else  if(document.getElementById("infoG").style.display == "none")
    {
        document.getElementById("getGrad").value = "Graduate"
        gradUnder = "Grad"
        document.getElementById("infoG").style.display = "block"
    }
    if(document.getElementById("infoC").style.display == "block")
    {
        document.getElementById("infoC").style.display = "none"
    }
    else  if(document.getElementById("infoC").style.display == "none")
    { 
        document.getElementById("infoC").style.display = "block"
    }
    input[0].value =gradUnder
}
function calc(grade, credit,grad)
{
    let creditsAttempted = 0;
    let value = 0
    for(let i= 0; i < grade.length; i++)
    {
        switch(grade[i])
        {
            case "A":
               value += credit * 4
                break;
            case "a":
                value += credit * 4
                break;
            case "B":
                value += credit * 3
                break;
            case "b":
                value += credit * 3
                break;
            case "C":
                value += credit * 2
                break;
            case "c":
                value += credit * 2
                break;
            case "D":
                if(grad==="UnderGrad")
                    value += credit * 1
                else  if(grad==="Grad")
                    value += 0
                break;
            case "d":
                if(grad==="UnderGrad")
                    value += credit * 1
                else  if(grad==="Grad")
                    value += 0
                break;
            case "F":
                if(grad==="UnderGrad")
                    value += credit * 1
                else  if(grad==="Grad")
                    value += 0
                break;
            case "f":
                if(grad==="UnderGrad")
                    value += credit * 1
                else  if(grad==="Grad")
                    value += 0
                break;
        }
    } 
    if(grad==="UnderGrad")
    {
        for(let i = 0; i < underGrad.length; i++)
            creditsAttempted+=underGrad[i];
    }
    else  if(grad==="Grad")
    {
        for(let i = 0; i < Grad.length; i++)
            creditsAttempted+=Grad[i];
    } 
    if(creditsAttempted <=0)
    {
        return -1
    }
    return value/creditsAttempted
}
function getGrades()
{
    for(let i = 0; i < input.length; i++)
    {
        if(input[i].value !="" && input[i].value !="Graduate" && input[i].value !="Submit")
        {
            grades.push(input[i].value) 
            input[i].value = ""
        }
    } 
    let getResult = calc(grades, 5,gradUnder) 
    if((gradUnder === "Grad" && getResult >= 3.5)  || (gradUnder === "UnderGrad" && getResult >= 3))
    {
        if(gradUnder === "Grad")
        {
            document.getElementById("gradTable").style.background = "black" 
            document.getElementById("underTable").style.background = "rgb(80, 112, 149) ";
        }
        else if(gradUnder === "UnderGrad")
        {
            document.getElementById("gradTable").style.background = "rgb(80, 112, 149)";
            document.getElementById("underTable").style.background = "black" 
        }
        document.getElementById("eligible").innerHTML = "Congratulations! You're eligible to be a Teacher Assistant! To continue, please message your school advisor.";
    }
    else if((gradUnder === "Grad" && getResult < 3.5)  || (gradUnder === "UnderGrad" && getResult < 3))
    {
        document.getElementById("Grad").style.color = "black" 
        document.getElementById("eligible").innerHTML = "Unfortunately, you're not eligible to be a Teacher Assistant.";
    }  
    grades = []
    
    input[0].value =gradUnder
    getResult = 0
}

/*<label>CSE 3203 Mobile System Overview</label>
<input for="Course" id="CSE"></input><br>
<label>IT 4213 Mobile Web Development</label>
<input for="Course" id="IT4213"></input><br> 
<label>IT 4312 Software Development</label>
<input for="Course" id="IT4312"></input><br>*/