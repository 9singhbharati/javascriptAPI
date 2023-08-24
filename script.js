fetch ("https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData)
    console.log(objectData.data[1].office);
    
    let text =" ";
    for (let i=0;i<objectData.data.length;i++){

        text+=`<tr>
             <td>${objectData.data[i].name} </td>
             <td>${objectData.data[i].office}</td>
             <td>${objectData.data[i].position}</td>
             <td>${objectData.data[i].salary}</td>         
     </tr>`;
    }

    document.getElementById("table_body").innerHTML=text;
})