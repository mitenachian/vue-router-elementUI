<template>
<div>
    <div class="flex">
      <div class="item">item</div>
      <div class="item">item</div>
      <div class="item flex-3">item flex-3</div>
      <div class="item flex-2">item flex-2</div>
    </div>
    <div class="flex">
      <div class="item">item</div>
    </div>
</div>
</template>
<style scoped>

.flex {
  display: flex;
  height: 200px;
  padding: 5px;
  background-color:aliceblue;
  flex-direction: row;
}

.item {
  flex: 1;
  background-color: #eecedf;
  margin: 5px;
  display: flex;
  /*justify-content: center;
  align-items: center;*/
  color: white;
  font-size: 2rem;
}

.flex-2 {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 0%;
  background-color: #f08bc3;
}
.flex-3 {
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: 0%;
  background-color:antiquewhite;
}
.flex-3 .box {
  display:block;
  min-width:200px;
  height:200px;
  background-color:darkslategray;
}

</style>
