# JavaScript 除錯 Console
###### tags: `JavaScript` `Console`

參考 : 
https://developers.google.com/web/tools/chrome-devtools/console/console-write?hl=zh-tw 
https://ithelp.ithome.com.tw/articles/10209871
https://ithelp.ithome.com.tw/articles/10157957

撰寫javascript時最常使用的除錯技巧就是用 concole 相關指令來把所需要的訊息顯示在除錯的console畫面上，來檢視所需要的結果。

### HTML
```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Javascript除錯</title>
</head>
<body>
    <h1>用Chrome除錯</h1>
    <p id="myText">Console除錯</p>

</body>
</html>
```
### javascipt程式碼
```javascript=
<script>
    // console 除錯技巧
    // https://developers.google.com/web/tools/chrome-devtools/console/console-write?hl=zh-tw 

    // 開始計算 'thisTEST' 時段
    console.time('thisTEST');

    // 顯示 P 的內容
    let textStr = document.getElementById('myText').innerText;
    console.log('p .log : ' , textStr);
    console.info('p .info : ' , textStr);
    console.error('p .error : ' , textStr);    
    console.warn('p .warn : ' , textStr);

    // myData Class陣列
    let myData = [
        {   title:'Father',
            name:'David',
            age:57
        },
        {   title:'Mother',
            name:'Sandy',
            age:56
        },
        {   title:'Son',
            name:'Johnny',
            age:25
        },
        {   title:'daughter',
            name:'Rebecca',
            age:15
        }
    ];
    // Console.log 傳統顯示 
    console.log(myData);
    // Console.table 傳統顯示 
    console.table(myData);

    // console.group()訊息群組
    console.group("數字累加");
    // 計算 1 + 2 + 3 ... + 10 = 55
    let xResult = 0
    for(x=1;x<=10;x++){
        xResult += x;
        console.log(x,xResult);
        // console.assert 斷言：第一參數的條件 = True 時跳過，第一參數的條件 = False 顯示第二參數的訊息
        console.assert(xResult < 40,'超過40囉！');
    }
    console.log("xResult : " , xResult);
    console.groupEnd(); // 訊息群組 結束

    // 顯示 'thisTEST' 執行時間
    console.timeEnd('thisTEST');

</script>
```

### 執行結果
![](https://i.imgur.com/gM3srgx.png)
