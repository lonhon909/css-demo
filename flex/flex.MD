# flex

`弹性流`

```css
/* flex-direction 和 flex-wrap 可以在一个属性当中声明：flex-flow:[direction][wrap] 。 */
.flex-container {
  flex-flow : column wrap;
}
/* 子元素使用 */
/* 如果有额外的空间，每个项目应该如何放大 */
.flex-items {
  flex-grow: 1;
}
/* 子元素使用 */
/* 如果没有足够的空间，应该如何缩小每个项目 */
.flex-items {
  flex-shrink: 1;
}

/* flex-basis 是在实际设置可用空间之前，检查每个项目本来应具有的大小的属性。 默认值为 auto */
.flex-items {
  flex-basis: 120px;
}

/* flex 属性是按顺序排列的 flex-grow、 flex-shrink 和 flex-basis 的简写 */
.flex-items {
  flex: 0, 1, auto;
}
/* align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性 */
.flex-items {
  align-self: flex-end;
}
```
