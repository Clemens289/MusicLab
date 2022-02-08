 

function getDetail(instrumentId){
    $.ajax({
        type: "POST",
        url : "DatabaseApi.php",
        dataType: "html",
        data : {getDetail : "getDetail", instrumentId:instrumentId},
        success: function(data){
            data=JSON.parse(data);
            console.log(data);
             updateDetail(data[0]);
             
        }
    });
}  

function updateDetail(displayInstrument){ 
    instrumentTitle.innerText= displayInstrument.Name;
    instrumentBrand.innerText=displayInstrument.Brand;
    instrumentMaterial.innerText=displayInstrument.Material;
    instrumentColour.innerText=displayInstrument.Colour;
    instrumentPrice.innerText=displayInstrument.Price;
    instrumentQuantity.innerText=displayInstrument.Quantity;
    
    addToCartButton.setAttribute("onclick","addToCart('"+displayInstrument.Id +"')");

} 

function showInstruments(instrumentId){
    console.log(instrumentId);
    window.location.href = 'detail.php';

}


function addToCart(instrumentId){
    $.ajax({
        type: "POST",
        url : "DatabaseApi.php",
        dataType: "html",
        data : {addToCart : "addToCart", instrumentId:instrumentId},
        success: function(data){
            data=JSON.parse(data);
            console.log(data);
             
        }
    });

}