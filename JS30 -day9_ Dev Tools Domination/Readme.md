# 學習重點

+ 了解不同種類的印出訊息方式(info,warn,error)
+ 了解如何用console.assert做測試(條件式,錯誤訊息)
+ 了解如何利用印出元素的完整資訊(console.dir(想要印的元素))
+ 了解如何分組印出的訊息
      dogs.forEach(item => {
      console.group(`${item.name}`)
      console.log(`the dog\'s name is ${item.name}`);
      console.log(`the dog\'s age is ${item.age}`);
      console.groupEnd(`${item.name}`)
    })
+ 了解如何利用console.count()計數
+ 了解如何裡用console.time()獲得擷取資料的時間
