<?php
class DatabaseQueries{
	protected $dbConn;	
	public function __construct() {
        $this->getConnected();
    }
    public function getConnected(){
    	$dbName = "musikinstrumente"; 
	    $dbHost = "127.0.0.1";
	    $dbUser = "root";
	    $dbPass = "pass123";
        $this->dbConn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
        $this->dbConn->set_charset("utf8mb4");
		if ($this->dbConn->connect_error) {
		  die("Connection failed: " . $this->dbConn->connect_error);
		}
        return $this->dbConn;
    }
  

	function getAllCategory(){
		$query = "SELECT * FROM category";
	 	$queryResult= mysqli_query($this->getConnected(), $query);
		$result = array();
	 	while($row = $queryResult->fetch_assoc()){
			array_push($result, $row);
	 	} 
		return  $result;
	} 

	function getAllSubCategory(){
		$query = "SELECT * FROM subcategory";
	 	$queryResult= mysqli_query($this->getConnected(), $query);
		$result = array();
	 	while($row = $queryResult->fetch_assoc()){
			array_push($result, $row);
	 	} 
		return  $result;
	} 

	function getAllInstrumentType(){
		$query = "Select a.id 'Id' ,a.name 'Name',b.name 'SubCategoryName', c.name 'CategoryName' from instrumenttype as a left JOIN subcategory as b ON a.SubCategoryId=b.Id left JOIN category as c ON b.CategoryId=c.Id;";
	 	$queryResult= mysqli_query($this->getConnected(), $query);
		$result = array();
	 	while($row = $queryResult->fetch_assoc()){
			array_push($result, $row);
	 	} 
		return  $result;
	} 

	function getAllInstruments($instrumentTypeId){
		$query = "Select * from instruments where instrumentTypeId = '".$instrumentTypeId."' ";
	 	$queryResult= mysqli_query($this->getConnected(), $query);
		$result = array();
	 	while($row = $queryResult->fetch_assoc()){
			array_push($result, $row);
	 	} 
		return  $result;
	} 

	function getDetail($instrumentId){
		$query = "Select * from instruments where Id = '".$instrumentId."' ";
	 	$queryResult= mysqli_query($this->getConnected(), $query);
		$result = array();
	 	while($row = $queryResult->fetch_assoc()){
			array_push($result, $row);
	 	} 
		return  $result;
	} 
	
	function addToCart22($instrumentId){
		$query = "INSERT INTO cart ( InstrumentId, Quantity) VALUES (".$instrumentId.", 1);";
	 	$queryResult= mysqli_query($this->getConnected(), $query);
		 $result = array();
	 	while($row = $queryResult->fetch_assoc()){
			array_push($result, $row);
	 	} 
		return  $result;
	} 


	function addToCart($instrumentId){
		## check if instrumentId already exist in Cart table
		$query = "Select count(*) as Count from Cart where InstrumentId = '".$instrumentId."' ";
		$queryResult= mysqli_query($this->getConnected(), $query);
		$countResult = $queryResult->fetch_assoc();
		##  if yes then increament the Quantity with 1
		if($countResult['Count']>0){
			$query = "UPDATE  cart set   Quantity = Quantity+1  where instrumentId = ".$instrumentId." ;";
			$queryResult= mysqli_query($this->getConnected(), $query);
		}else {
		## else insert new line with instrumentId and quantity as 1
			$query = "INSERT INTO cart ( InstrumentId, Quantity) VALUES (".$instrumentId.", 1);";
			$queryResult= mysqli_query($this->getConnected(), $query);
		}
		return $queryResult; 
	} 

} ?>