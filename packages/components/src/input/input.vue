<template>
  <input :class="baseClassName" v-model="internalValue" />
</template>

<script setup lang="ts">
import { ref, toRaw, watch } from 'vue';
import { prefixName } from '../theme';
const baseClassName = `${prefixName}-input`;

const props = defineProps<{
  value: string;
  options: Array<{ name: string; value: string }>;
}>();
const emits = defineEmits<{
  (e: 'change', value: string): void;
}>();

// eslint-disable-next-line vue/no-setup-props-destructure
const internalValue = ref<string>(toRaw(props.value));

watch([() => internalValue.value], ([newValue]) => {
  const changedValue = toRaw(newValue);
  emits('change', changedValue);
});

watch([() => props.value], ([newValue]) => {
  internalValue.value = toRaw(newValue);
});
</script>
