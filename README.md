#wepy 踩坑日记

1. $apply 更新异步数据
   使用场景：
   A. 异步更新数据
   B. 手动刷新DOM
参考链接：link https://www.cnblogs.com/suihang/p/10470174.html
   

   
2. wepy 文件不能为空，必须带有script不然报错；



3. 滚动条出现
在当前页面加上一下css
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}