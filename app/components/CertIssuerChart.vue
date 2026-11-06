<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { LegendComponent, TooltipComponent, TitleComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import { PhChartPieSlice } from '@phosphor-icons/vue'

use([CanvasRenderer, PieChart, LegendComponent, TooltipComponent, TitleComponent])

const issuers = [
  { name: 'Microsoft', value: 2 },
  { name: 'Certiport (IT Specialist)', value: 1 },
]

// Shades for the pie chart segments
const shades = ['#7d6a82', '#9a849f', '#b5a1ba', '#d3c6d6', '#e8dfea']

const total = issuers.reduce((sum, item) => sum + item.value, 0)

const option = computed(() => ({
  tooltip: {
    trigger: 'item',
    formatter: (p: { name: string; value: number }) =>
      p.name ? `${p.name}: ${p.value} certificate${p.value > 1 ? 's' : ''}` : '',
  },
  legend: {
    bottom: 0,
    data: issuers.map((i) => i.name),
    textStyle: { color: '#333', fontStyle: 'italic' },
  },
  title: {
    text: String(total),
    subtext: 'Certificates',
    left: 'center',
    top: '52%',
    textStyle: { fontSize: 32, fontWeight: 'bold', color: '#333' },
    subtextStyle: { fontStyle: 'italic', color: '#555' },
  },
  series: [
    {
      type: 'pie',
      radius: ['55%', '85%'],
      center: ['50%', '70%'],
      startAngle: 180,
      avoidLabelOverlap: true,
      itemStyle: { borderRadius: 8, borderColor: '#fdf8e1', borderWidth: 3 },
      label: { show: true, formatter: '{c}', color: '#333', fontSize: 14 },
      labelLine: { lineStyle: { color: '#9a849f' } },
      emphasis: { scale: true, scaleSize: 6 },
      data: [
        ...issuers.map((item, index) => ({
          ...item,
          itemStyle: { color: shades[index % shades.length] },
        })),
        // Half Donut segment to create the semi-circle effect (matching sum for 180 deg layout)
        {
          value: total,
          name: '',
          itemStyle: { color: 'transparent' },
          label: { show: false },
          labelLine: { show: false },
          tooltip: { show: false },
          emphasis: { disabled: true },
        },
      ],
    },
  ],
}))
</script>

<template>
  <section class="mt-12 w-full">
    <h2
      class="mb-8 flex w-full items-center justify-center gap-2 text-center font-serif text-3xl font-bold italic md:text-4xl"
    >
      <PhChartPieSlice size="1em" />
      Certificates by Issuer
    </h2>
    <ClientOnly>
      <div class="h-80 w-full">
        <VChart :option="option" autoresize class="h-full w-full" />
      </div>
      <template #fallback>
        <div class="flex h-80 items-center justify-center">
          <span class="loading loading-spinner text-primary" />
        </div>
      </template>
    </ClientOnly>
  </section>
</template>