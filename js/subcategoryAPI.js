 

function getAllSubCategory(){
    $.ajax({
        type: "POST",
        url : "DatabaseApi.php",
        dataType: "html",
        data : {getAllSubCategory : "getAllSubCategory"},
        success: function(data){
            data=JSON.parse(data);
            console.log(data);
             updateTable(data);
             
        }
    });
}  

function updateTable(displayRows){ 
    var tablehead=document.getElementById("subCategoryTableHead");
    tablehead.innerText="";
 
    var tableRowHeader=document.createElement("tr");
    tablehead.appendChild(tableRowHeader);     
    var columns=[{descriptionText:"Subcategory", isRequired:true, propertyName:"Name"} ];
    for(var i=0;i<columns.length;i++){
        var tableHeader=document.createElement("th");
        var columnLabel=document.createElement("label");
        var displayText=columns[i].descriptionText;
        if(columns[i].isRequired){
            displayText+="*";
        }
        columnLabel.innerText=displayText;
        tableHeader.appendChild(columnLabel);
        tableRowHeader.appendChild(tableHeader);
    } 



    
    var tablebody=document.getElementById("subCategoryTableBody");
    tablebody.innerText="";


    for(var i=0;i<displayRows.length;i++){
       var dataRow=document.createElement("tr");
       tablebody.appendChild(dataRow);

       var row=displayRows[i];
       for(var j=0;j<columns.length;j++){
            var column=columns[j];
            var tableData=document.createElement("td");
            dataRow.appendChild(tableData);
            if(column.propertyName == "actions"){
                var editButton=document.createElement("button");
                editButton.innerText="Edit";
                editButton.setAttribute("onclick","getEmployee('"+row.id+"')")
                var delButton=document.createElement("button");
                delButton.innerText="Delete";
                delButton.setAttribute("onclick","deleteEmployee('"+row.id +"')");

                tableData.appendChild(editButton);
                tableData.appendChild(delButton);

            }else{
                var txt=row[column.propertyName];
                if(!txt){
                    txt="";
                }
                
                tableData.innerText=txt;
            }
           
       }
    }
} 