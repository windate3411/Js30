# 學習重點

+ 複習change & mousemove事件的配合，兩者配合使用才能即時顯示變更
+ 複習mousedown,mouseup事件的用法，建立一個flag會好用很多
+ 了解如何運用event.offsetX/Y 以及 offsetWidth
+ 了解video的常用屬性與方法(currentTime,paused,pause,play,duration等)，特別注意video僅具有paused屬性
+ 了解 && 的進階用法 ，若運算子左方為true則回傳右方 反之回傳左方  ||運算子則相反
  i.e console.log(1 && 2) // 2  
      console.log(0 && 4) // 4
利用這樣的方法可以將函式簡寫
before
```
progress.addEventListener('mousemove',()=>{
  if (mouseDown) {
    scrub(e)
  }
})

```  
after
```
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
```