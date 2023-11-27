var one = 1
function  handleClick(event){
    if(one === 1){
        event.srcElement.innerHTML = "X"
        one = 2

    }
    else if(one === 2){
        event.srcElement.innerHTML = "O"
        one = 1
    }

var aa = document.getElementById("a").innerHTML
var bb = document.getElementById("b").innerHTML
var cc = document.getElementById("c").innerHTML
var dd = document.getElementById("d").innerHTML
var ee = document.getElementById("e").innerHTML
var ff = document.getElementById("f").innerHTML
var gg = document.getElementById("g").innerHTML
var hh = document.getElementById("h").innerHTML
var ii = document.getElementById("i").innerHTML

// ROW

if (aa === 'X' && bb === 'X' && cc === 'X'){
    document.getElementById("display").value= document.getElementById("name1").value + " "  + "YOU WON"
}

else if (aa === 'O' && bb === 'O' && cc === 'O'){
    document.getElementById("display").value=document.getElementById("name2").value + " " + "YOU WON"
}

else if (dd === 'X' && ee === 'X' && ff === 'X'){
    document.getElementById("display").value=  document.getElementById("name1").value + " " + "YOU WON"
}

else if (dd === 'O' && ee === 'O' && ff === 'O'){
    document.getElementById("display").value= document.getElementById("name2").value + " " + "YOU WON"
}

else if (gg === 'X' && hh === 'X' && ii === 'X'){
    document.getElementById("display").value=  document.getElementById("name1").value + " " + "YOU WON"
}

else if (gg === 'O' && hh === 'O' && ii === 'O'){
    document.getElementById("display").value= document.getElementById("name2").value + " " + "YOU WON"
}
//  COLUMN
if (aa === 'X' && dd === 'X' && gg === 'X'){
    document.getElementById("display").value=  document.getElementById("name1").value + " " + "YOU WON"
}

else if (aa === 'O' && dd === 'O' && gg === 'O'){
    document.getElementById("display").value= document.getElementById("name2").value + " " + "YOU WON"
}

else if (bb === 'X' && ee === 'X' && hh === 'X'){
    document.getElementById("display").value=  document.getElementById("name1").value + " " + "YOU WON"
}

else if (bb === 'O' && ee === 'O' && hh === 'O'){
    document.getElementById("display").value= document.getElementById("name2").value + " " + "YOU WON"
}

else if (cc === 'X' && ff === 'X' && ii === 'X'){
    document.getElementById("display").value=  document.getElementById("name1").value + " " + "YOU WON"
}
    
else if (cc === 'O' && ff === 'O' && ii === 'O'){
    document.getElementById("display").value= document.getElementById("name2").value + " " + "YOU WON"
}

// DIAGONAL
if (aa === 'X' && ee === 'X' && ii === 'X'){
document.getElementById("display").value =  document.getElementById("name1").value + " " + "YOU WON"
}

else if (aa === 'O' && ee === 'O' && ii === 'O'){
    document.getElementById("display").value = document.getElementById("name2").value + " " + "YOU WON"

}

if (cc === 'X' && ee === 'X' && gg === 'X'){
    document.getElementById("display").value =  document.getElementById("name1").value + " " + "YOU WON"
}

if (cc === 'O' && ee === 'O' && gg === 'O'){
    document.getElementById("display").value = document.getElementById("name2").value + " " + "YOU WON"
}

}

function resetGame(){
location.reload()
aa=bb=cc=dd=ee=ff=gg=hh=ii=""
}





















