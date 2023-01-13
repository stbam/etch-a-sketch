const container = document.getElementById("grids");
 


for (let i=0;i<256;i++){
        var node=document.createElement("grid-item"); //made things global as opposed to const or let
       // node.innerHTML=i;
        container.appendChild(node);


        node.addEventListener("mouseenter",(event)=>{
            event.target.style.backgroundColor = "purple";
        });
}





function buttonFunction(){
   let length= prompt("Enter new length of sketchbox");
    let height=prompt("Enter the new height of sketchbox")
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }/*removes old container*/
       
      
      dim_count= (336)/(length*height);//wrong
    
 
       
  

     // grid_cont.style.width= `${length*20}px`;  
      

        for (let i=0;i<length*height;i++){
            
                const node=document.createElement("grid-item");
                node.style.width=`${dim_count}px `;
                node.style.height=`${dim_count}px `;
                console.log(node.style.width)
                console.log(node.style.height)
              //  node.innerHTML="x";
                container.appendChild(node);
                node.addEventListener("mouseenter",(event)=>{
                    event.target.style.backgroundColor = "purple";
                });
        
            }
        

}