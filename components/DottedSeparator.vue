<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: string
  height?: string
  dotSize?: string
  gapSize?: string
  direction?: 'horizontal' | 'vertical'
}>(), {
  color: '#d4d4d8',
  height: '2px',
  dotSize: '2px',
  gapSize: '6px',
  direction: 'horizontal',
})

const isHorizontal = computed(() => props.direction === 'horizontal')
</script>

<template>
  <div :class="isHorizontal ? 'w-full flex items-center' : 'h-full flex flex-col items-center'">
    <div
      :class="isHorizontal ? 'grow' : 'grow-0'"
      :style="{
        width: isHorizontal ? '100%' : height,
        height: isHorizontal ? height : '100%',
        backgroundImage: `radial-gradient(circle, ${color} 24%, transparent 25%)`,
        backgroundSize: isHorizontal ? `${Number.parseInt(dotSize) + Number.parseInt(gapSize)}px ${height}` : `${height} ${Number.parseInt(dotSize) + Number.parseInt(gapSize)}px`,
        backgroundRepeat: isHorizontal ? 'repeat-x' : 'repeat-y',
        backgroundPosition: 'center',
      }"
    />
  </div>
</template>
