<script setup lang="ts" vapor>
import SwaggerUI from '@/components/SwaggerUI.vue'
import { useVersion } from '@/hooks/use-version'
import { useRouteQuery } from '@vueuse/router'

const { versions } = useVersion()

const currentVersion = useRouteQuery('version', versions[0])
</script>

<template>
  <div class="flex relative h-screen flex-col md:flex-row">
    <div class="w-full md:w-64 flex-none sticky top-0 p-2 md:border-r">
      <h2 class="font-semibold flex items-center gap-1.5">
        <div class="i-system-uicons:versions w-1em h-1em"></div>
        <div>版本</div>
      </h2>
      <select
        id="location"
        name="location"
        class="mt-2 md:hidden block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        v-model="currentVersion"
      >
        <option v-for="version in versions" :key="version" :value="version">{{ version }}</option>
      </select>
      <fieldset class="mt-4 hidden md:block" aria-label="Versions">
        <div class="space-y-4">
          <label
            v-for="version in versions"
            @click="currentVersion = version"
            :key="version"
            aria-label="Hobby"
            aria-description="8GB, 4 CPUs, 160 GB SSD disk, $40 per month"
            class="relative block border-gray-300 cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
            :class="{ '!border-indigo-600 ring-1 ring-indigo-600': currentVersion === version }"
          >
            <input type="radio" name="server-size" value="Hobby" class="sr-only" />
            <span class="flex items-center">
              <span class="flex flex-col text-sm">
                <span class="font-medium text-gray-900">Halo {{ version }}</span>
              </span>
            </span>
          </label>
        </div>
      </fieldset>
    </div>
    <div class="min-w-0 h-full flex-1 shrink overflow-auto">
      <SwaggerUI :version="currentVersion" />
    </div>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background: #fafafa;
}
</style>
