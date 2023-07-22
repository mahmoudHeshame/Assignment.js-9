var sitenameinp =document.getElementById('sitenameinp');
var sitUrlinp = document.getElementById('sitUrlinp');


var sitecontainer;
if(localStorage.getItem('list') !=null){
    sitecontainer =JSON.parse(localStorage.getItem('list'))
displaysite()
}
else{
    sitecontainer=[]
}

function Addsite(){
    var site ={
        name:sitenameinp.value,
        url:sitUrlinp.value

    }
console.log(Addsite);
    sitecontainer.push(site);
    localStorage.setItem('list', JSON.stringify(sitecontainer))
    console.log(sitecontainer);
    displaysite()
} 

function delet(){
    sitenameinp.value="",
    sitUrlinp.value="";
}
function deletsite(index){
    console.log(index);
    sitecontainer.splice(index,1);
    localStorage.setItem('list', JSON.stringify(sitecontainer))
    displaysite()
}


function displaysite(){
    var list=``;
    for (var i=0; i < sitecontainer.length; i++)

   list+=`<tr>
   <td>${sitecontainer[i].name}</td>
   <td>${sitecontainer[i].url}</td>
   <td>
    
       <button class="btn btn-warning" >
           <i class="fa-solid fa-eye pe-2"></i>Visit
         </button>
   </td>
   <td> <button class="btn btn-danger btn-sm" onclick="deletsite(${i})">
       <i class="fa-solid fa-trash "> </i>Delete
       </button>
   </td>
  </tr>` 
            document.getElementById('tablelist').innerHTML=list    
 }















