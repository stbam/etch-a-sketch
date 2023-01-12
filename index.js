const container = document.getElementById("grids");
 grid_cont=document.getElementById("grid-container");



for (let i=0;i<256;i++){
        const node=document.createElement("grid-item");
        node.innerHTML=i;
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
      }

      grid_cont.style.width= `${length*20}px`;
      

        for (let i=0;i<length;i++){
            for(let j=0;j<height;j++){
                const node=document.createElement("grid-item");
                node.innerHTML="x";
                container.appendChild(node);
                node.addEventListener("mouseenter",(event)=>{
                    event.target.style.backgroundColor = "purple";
                });
        }
            }
        

}