 

function getAllInstrumentType(){
    $.ajax({
        type: "POST",
        url : "DatabaseApi.php",
        dataType: "html",
        data : {getAllInstrumentType : "getAllInstrumentType"},
        success: function(data){
            data=JSON.parse(data);
            console.log(data);
             updateTable(data);
             
        }
    });
}  

function updateTable(displayRows){ 
    var tablehead=document.getElementById("instrumentTableHead");
    tablehead.innerText="";
 
    var tableRowHeader=document.createElement("tr");
    tablehead.appendChild(tableRowHeader);     
    var columns=[{descriptionText:"Instrument Type", isRequired:true, propertyName:"Name"},
                {descriptionText:"Subcategory", isRequired:false, propertyName:"SubCategoryName"},
                {descriptionText:"Category", isRequired:false, propertyName:"CategoryName"},
                {descriptionText:"", isRequired:false, propertyName:"actions"} ];
    for(var i=0;i<columns.length;i++){
        var tableHeader=document.createElement("th");
        var columnLabel=document.createElement("label");
        var displayText=columns[i].descriptionText;
        columnLabel.innerText=displayText;
        tableHeader.appendChild(columnLabel);
        tableRowHeader.appendChild(tableHeader);
    } 



    
    var tablebody=document.getElementById("instrumentTableBody");
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
                var showBtn=document.createElement("button");
                showBtn.innerText="Show";
                showBtn.setAttribute("onclick","showInstruments('"+row.Id+"')")

                tableData.appendChild(showBtn);
                showBtn.className="btn btn-primary btn-sm";

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

function showInstruments(instrumentTypeId){
    console.log(instrumentTypeId); 
    window.location.href = 'instruments.php?instrumentTypeId='+instrumentTypeId;

}