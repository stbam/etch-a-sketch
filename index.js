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
    let height= length;  //prompt("Enter the new height of sketchbox")
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }/*removes old container*/
       
//length=2 boxes
//height=2 boxes

//dimens=640px
 
     dim_count= ((320)/ ( (length)));//wrong divide 640 into equal length*height squares
   // console.log(dim_count)

        for (let i=0;i<height;i++){
            for(let j=0;j<length;j++){

                const node=document.createElement("grid-item");

                node.style.width=`${dim_count}px `;
                node.style.height=`${dim_count}px`;
               
                
                console.log(node.style.width)
                console.log(node.style.height)
              

                container.appendChild(node);
                node.addEventListener("mouseenter",(event)=>{
                    event.target.style.backgroundColor = "purple";
                });
        
            }}
        

}