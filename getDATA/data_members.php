<?php
    try{
      require_once("connect_DB.php");
      $pageData = $_REQUEST['page'];
      if($pageData=='members'){
        if($_REQUEST['id']==NULL){
          $page = "`members`";
          $sql = "SELECT * FROM ".$page;
          $products = $pdo->prepare( $sql );
        }
        else{
            $page = "`members`";
            $sql = "SELECT * FROM `members` where memberNo=".$_REQUEST['id'];
            $products = $pdo->prepare( $sql );
          }        
      }else{
        echo 'error';
      }

      
      $products->execute();
      $emparray = array();
     while($row=$products->fetch(PDO::FETCH_ASSOC)){
     	$emparray[] = $row;
     }
  //印出json格式
		// echo json_encode($emparray);
     	echo '{"pagedata":'.json_encode($emparray).'}';

	//生成json檔
	    // $fp = fopen('empdata.json', 'w');
	    // fwrite($fp, json_encode($emparray));
	    // fclose($fp);

	}catch(PDOException $e){
			echo "行號: ", $e->getLine();
			echo "錯誤訊息: ", $e->getMessage();
        }
?>