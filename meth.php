<?php
    $keys = array('q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','firstname','email','phone','policy','submit_btn');
    $csv_line = array();
    foreach($keys as $key){
        array_push($csv_line,'' . $_GET[$key]);
    }
    $fname = 'Host.csv';
    $csv_line = implode(',',$csv_line);
    if(!file_exists($fname)){$csv_line = "\r\n" . $csv_line;}
    $fcon = fopen($fname,'a');
    $fcontent = $csv_line;
    fwrite($fcon,$csv_line);
    fclose($fcon);
?>