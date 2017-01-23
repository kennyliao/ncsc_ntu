<?php
date_default_timezone_set('Asia/Taipei');
try{
      require_once("connect_DB.php");
    

      // $sql ="select * from `news`";
      $sql="SELECT * FROM news WHERE createdDate BETWEEN (NOW() - INTERVAL 14 DAY) AND NOW()";
      $products = $pdo->prepare( $sql );
      $products->execute();

      $emparray = array();
      while($row=$products->fetch(PDO::FETCH_ASSOC)){
       
          $titleZH_TW = $row['titleZH_TW'];
          $contentZH_TW = $row['contentZH_TW'];
          $date = $row['createdDate'];
          $links = $row['newsNo'];

          $tmp=array(
            'title' => $titleZH_TW,
            'content' => $contentZH_TW,
            'pubdate' =>  date(DATE_RSS, strtotime($date)),
            'links' =>  $links,
          );
        
          array_push($emparray,$tmp);
     }

  

  }catch(PDOException $e){
      echo "行號: ", $e->getLine();
      echo "錯誤訊息: ", $e->getMessage();
  }

     
//產生xml
header('Content-Type: text/xml');

$data_array=$emparray;
$title_size = 1;
 
$xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">\n";
$xml .= "<channel>
            <title>NCSC NTU</title>
            <link>http://". $_SERVER['SERVER_NAME']."</link>
            <description>NCSC NTU</description>

            ";
              
            foreach ($data_array as $data) {
                $xml .= create_item($data['title'], $title_size, $data['content'], $data['pubdate'],$data['links']);
                
            }
 
$xml .= "</channel>\n</rss>";
 
echo $xml;


 
//  創建選單
function create_item($title_data, $title_size, $content_data, $pubdate_data, $links) {
    
    $item = "<item>\n";
    $item .= "<title>" . $title_data . "</title>\n";
    $item .= "<description>" . $content_data . "</description>\n";
    $item .= " <link>http://". $_SERVER['SERVER_NAME']."/news/news_form/". $links . "</link>\n";
    $item .= " <pubDate>" . $pubdate_data . "</pubDate>\n";
    $item .= "</item>\n";
 
    return $item;
} 

?>