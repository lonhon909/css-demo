# columns -- 多列布局

> 浏览器支持性好👌

```css
.container {
  /* 理想列数 */
  column-count: 4;
  /* 理想的列宽 */
  column-width: 100em;
  /* 列间距 */
  column-gap: 10px;
  /* 优雅降级请使用前缀 -moz -webkit */
}
```

> `column-width`会推算列数，与`column-count`列数对比，哪个列数多就以哪个为准

`简写`

```css
.container {
  /* 简写： column-count  column-width 书写顺序可以不固定 */
  columns: 4 100em;
  column-gap: 10px;
}
```