# 學習重點

***
+ 練習初次接觸的fetch功能，注意fetch首先會回傳一個promise，資料可用.json、.text、.blob方法讀取
+ 由將數字加入千分位的函式(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')複習regrex
  positive lookahead & negative lookahead 以及\B的意義(找尋非邊界的位置)
+ 利用map&join將陣列內的內容轉為字串存放在li的結構裡面(實用)
+ 利用動態regrex配合css做出類似autocomplete的效果(一旦關鍵字match資料庫，在form內便新增對應的li)