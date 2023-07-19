<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { SwitchClass, type SwitchClassProps } from "@/components/ui/cva"
import { useVModel } from "@vueuse/core";

interface SwitchProps {
  variant?: SwitchClassProps["variant"];
  size?: SwitchClassProps["size"];
  defaultOpen?: string;
  open: boolean;
}

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
  <SwitchRoot
    v-model:open="open"
    :class="SwitchClass({ ...props, component: 'root' })"
  >
    <SwitchThumb :class="SwitchClass({ ...props, component: 'thumb' })" />
  </SwitchRoot>
</template>
