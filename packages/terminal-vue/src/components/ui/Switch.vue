<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { SwitchClass, type SwitchClassProps } from "@/components/ui/cva"
import { useVModel } from "@vueuse/core";

type SwitchProps = InstanceType<typeof SwitchRoot>["$props"] & SwitchClassProps;

const props = withDefaults(defineProps<SwitchProps>(), {
  open: undefined,
});

const emit = defineEmits(["update:open"]);

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});
</script>

<template>
  <SwitchRoot v-model:open="open" :class="SwitchClass({ size, variant, component: 'root' })">
    <SwitchThumb :class="SwitchClass({ size, variant, component: 'thumb' })" />
  </SwitchRoot>
</template>
