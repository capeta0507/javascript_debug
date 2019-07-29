# JavaScript 除錯 Source中斷點
###### tags: `JavaScript` `Source`
javascript在Chrome瀏覽器 F12除錯功能上，可以根據 Source來設定javasecipt執行的中斷點，Watch變數。

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
    <p id="myText">Source除錯</p>
</body>
</html>
```
### javascript
```javascript=
<script>
    // Chrome 斷點除錯技巧
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
    // 顯示 P 的內容
    let textStr = document.getElementById('myText').innerText;
    console.log('p : ' , textStr);
    
    console.group("myData...");
    for(y=0;y<myData.length;y++){
        console.log(myData[y]);
    }
    console.groupEnd(); // myData 結束

    // console.group()訊息群組
    console.group("數字累加");
    // 計算 1 + 2 + 3 ... + 10 = 55
    let xResult = 0
    for(x=1;x<=10;x++){
        xResult += x;
        console.log(x,xResult);
    }
    console.log("xResult : " , xResult);
    console.groupEnd(); // 訊息群組 結束
    
</script>
```

### 除錯
在除錯畫面上，可以設定 Source裡的程式中斷點，並且 Watch變數值得變化
![](https://i.imgur.com/fMKFuwZ.png)

#### 中斷點設定位置
滑鼠點一下 javascript行號，就可以設定中斷點
![](https://i.imgur.com/BsIoSTj.png)
#### 標示直行位置
![](https://i.imgur.com/V9bmN30.png)
#### Watch變數
按 + 就可以增加 Watch的變數，觀看程式執行如何影響變數內容
![](https://i.imgur.com/mNGznMR.png)
#### 除錯按鈕
![](https://i.imgur.com/AzGWSK1.png)

