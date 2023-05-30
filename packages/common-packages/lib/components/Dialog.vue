<template>
  <div class="dimmed" v-if="dialog.param">
    <div class="dialog">
      <p class="title">{{ dialog.param?.title }}</p>
      <p class="message">{{ dialog.param?.msg }}</p>
      <div class="btns">
        <button type="button" v-if="dialog.param.type==='confirm'" @click="close(false)">Cancel</button>
        <button type="button" @click="close(true)">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useDialogStore} from "../store/dialog";

const dialog = useDialogStore()
function close (result) {
    if (dialog.param.type === 'confirm') {
        dialog.param.close(result)
    } else {
        dialog.param.close(result)
    }
}
</script>

<!--<style scoped lang="scss">-->
<!--.dimmed { position:fixed; top:0; bottom:0; left:0; right:0; display:flex; justify-content:center; align-items:center; background-color:var(&#45;&#45;overlay-color);-->
<!--  .dialog { max-height:calc(100% - 60px); background-color:var(&#45;&#45;background-normal); color:var(&#45;&#45;foreground-normal); overflow:auto;}-->
<!--}-->
<!--</style>-->
