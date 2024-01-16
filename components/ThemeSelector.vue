<script setup lang="ts">
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/vue/24/outline";
import { capitalize } from "~/composables/useString";

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const themes = ["system", "light", "dark"];

</script>

<template>
  <div>
    <div class="flex items-center gap-2 w-4 h-4 cursor-pointer">
      <component
          :is="$colorMode.value === 'light' ? SunIcon : MoonIcon"
          :class="$colorMode.value === 'light' ? 'text-yellow-500' : 'text-gray-500'"
          @click="$colorMode.value === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
      />
      <span class="text-m font-bold" v-if="isText">{{ capitalize($colorMode.preference) }}</span>
    </div>
  </div>
</template>
