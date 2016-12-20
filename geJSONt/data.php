<?php
    try{
      require_once("connect_DB.php");
      $pageData = $_REQUEST['page'];
      if($pageData=='news'){
        $page = "`news`";
      }else if($pageData=='instrument'){
        $page = "`instrument`";
      }else if($pageData=='members'){
        $page = "`members`";
      }else if($pageData=='course_downloads'){
        $page = "`course_downloads`";
      }else if($pageData=='course_graduate'){
        $page = "`course_graduate`";
      }else if($pageData=='course_rules'){
        $page = "`course_rules`";
      }else if($pageData=='home_news'){
        $page = "`news` left join news_type on news.newsType=news_type.typeNo";
      }else if($pageData=='home_hero'){
        $page = "`home_pictures`";
      }
      else{
        echo 'error';
      }

      $sql = "SELECT * FROM ".$page;
      $products = $pdo->prepare( $sql );
      // $products ->bindParam(1,$page);
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