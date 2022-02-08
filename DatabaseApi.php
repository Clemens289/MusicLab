<?php 


require_once("DatabaseQueries.php");
$DBQ= new DatabaseQueries();
 
 
if(isset($_POST['getAllCategory'])){
	echo json_encode($DBQ->getAllCategory()); 
}

if(isset($_POST['getAllSubCategory'])){
	echo json_encode($DBQ->getAllSubCategory()); 
}
 
if(isset($_POST['getAllInstrumentType'])){
	echo json_encode($DBQ->getAllInstrumentType()); 
}

if(isset($_POST['getAllInstruments']) && isset($_POST['instrumentTypeId'])  ){
	echo json_encode($DBQ->getAllInstruments($_POST['instrumentTypeId'])); 
}


if(isset($_POST['getDetail']) && isset($_POST['instrumentId'])  ){
	echo json_encode($DBQ->getDetail($_POST['instrumentId'])); 
}

if(isset($_POST['addToCart']) && isset($_POST['instrumentId'])  ){
	echo json_encode($DBQ->addToCart($_POST['instrumentId'])); 
}

?>