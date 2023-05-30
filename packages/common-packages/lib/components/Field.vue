<template>
  <div :class="['field', {'error': error, 'success': success}]">
    <strong :class="{'required': required}">
      <template v-if="label">{{ label }}</template>
      <slot v-else name="label" />
    </strong>
    <span class="input-wrap">
      <slot />
    </span>
    <p :class="['msg']">
      <slot name="validate" />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true
    },
    required: Boolean,
    error: Boolean,
    success: Boolean
})
</script>

<style lang="scss">
.field { padding:1rem;
  & > strong { display:block; font-weight:bold; margin-bottom:.4rem;
      &.required:before { content:'* '; color:var(--danger)}
  }
  .input-wrap { position:relative; display:flex; margin-bottom:.6rem;
    & > * { flex:auto;}
  }
  .msg { color:var(--danger); font-size:.9rem;}

  /* state */
  &.success {
    .msg { color:var(--success);}
  }
}
</style>
