<?php
    # read in file
    $file = fopen("/home/pi/stockbot/transactions.txt", "r");
    
    # start table and write header
    $tablestr .= '<table style="width:100%" align="left" style="height:100px;overflow:auto;">';
    $tablestr .= "<tr>\n";
    $tablestr .= "<td><b>Date and Time Requested</b></td>\n";
    $tablestr .= "<td><b>Request Type</b></td>\n";
    $tablestr .= "<td><b>Symbol</b></td>\n";
    $tablestr .= "<td><b>Amount of Shares</b></td>\n";
    $tablestr .= "<td><b>Target Price</b></td>\n";
    $tablestr .= "<td><b>Completed Date (if applicable)</b></td>\n";
    $tablestr .= "<tr>\n";

    # start chart string (sits below table in html file)
    $chartstr = '<div class="row">';
    $chartstr .= '<div class="col-lg-12 text-center">';
    $chartstr .= "<h2>Charts of 5 most recent companies in Transanction File:</h2>\n";
    $chartstr .= "<br><br><br>\n";

    # loop through the lines of the transactions
    while(!feof($file)){
        $line = fgets($file);
        if (strpos($line, "#") !== false) {
            continue; # skip any comments that may be in the log table
        }
        # print row
        $newline = explode(' ', $line);
        $tablestr .= "<tr>\n";
        $tablestr .= "<td>\n";
        $tablestr .= $newline[0] . " " . $newline[1]; # date
        $tablestr .= "</td>\n";
        $tablestr .= "<td>\n";
        $tablestr .= $newline[2]; # action (buy or sell)
        $tablestr .= "</td>\n";
        $tablestr .= "<td>\n";
        $tablestr .= $newline[3]; # stock symbol
        $tablestr .= "</td>\n";
        $tablestr .= "<td>\n";
        $tablestr .= $newline[4]; # shares
        $tablestr .= "</td>\n";
        $tablestr .= "<td>\n";
        $tablestr .= $newline[5]; # target buy/sell price
        $tablestr .= "</td>\n";

        # if the transaction has been completed, we have the last column of the table filled with the following
        if (count($newline) > 6) {
            $tablestr .= "<td>\n";
            $tablestr .= '<span style="color:green">' . $newline[6] . " " . $newline[7] . " " . $newline[8] . '</span>';
            $tablestr .= "</td>\n";
        }
        else {
            $tablestr .= "<td>\n";
            $tablestr .= '<span style="color:red">STILL PENDING</span>';
            $tablestr .= "</td>\n";
        }
        $tablestr .= "</tr>\n";

        $chartstr .= '<div class="chart">';
        $chartstr .= '<script type="text/javascript" src="https://d33t3vvu2t2yu5.cloudfront.net/tv.js"></script>';
        $chartstr .= '<script> new TradingView.widget({';
        $chartstr .= '"autosize": true,';
        $chartstr .= '"symbol": "' . $newline[3] . '",'; # the single variable stock symbol
        $chartstr .= '"interval": "3",'; 
        $chartstr .= '"timezone": "Etc/UTC",';
        $chartstr .= '"theme": "White",';
        $chartstr .= '"style": "1",'; 
        $chartstr .= '"locale": "en",';
        $chartstr .= '"toolbar_bg": "#f1f3f6",';
        $chartstr .= '"hide_top_toolbar": true,';
        $chartstr .= '"save_image": false, ';
        $chartstr .= '"hideideas": true}); </script>';
        $chartstr .= '</div>';
    }
    # end the table, close the file, and send the html string to our php
    $tablestr .= "</table>\n";
    $chartstr .=  "</div>\n";
    $chartstr .=  "</div>\n";
    fclose($file);
    echo $tablestr;
    echo $chartstr;
?>