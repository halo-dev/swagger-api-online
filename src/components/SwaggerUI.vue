<script setup lang="ts" vapor>
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist'
import 'swagger-ui-dist/swagger-ui.css'
import { watch } from 'vue'
import type { VersionInfo } from '@/hooks/use-version'

const { versionInfo } = defineProps<{ versionInfo: VersionInfo }>()

watch(
  () => versionInfo,
  () => {
    if (versionInfo) {
      handleRender()
    }
  },
  {
    immediate: true
  }
)

async function handleRender() {
  const baseDir = versionInfo.type === 'paid' ? 'api-docs-paid' : 'api-docs'
  const version = versionInfo.version

  const urls = [
    {
      url: (await import(`@/assets/${baseDir}/${version}/aggregated.json?url`)).default,
      name: 'Aggregated API V1alpha1'
    },
    {
      url: (await import(`@/assets/${baseDir}/${version}/apis_console.api_v1alpha1.json?url`))
        .default,
      name: 'Console API V1alpha1'
    },
    {
      url: (await import(`@/assets/${baseDir}/${version}/apis_extension.api_v1alpha1.json?url`))
        .default,
      name: 'Extension API V1alpha1'
    },
    {
      url: (await import(`@/assets/${baseDir}/${version}/apis_public.api_v1alpha1.json?url`))
        .default,
      name: 'Public API V1alpha1'
    },
    {
      url: (await import(`@/assets/${baseDir}/${version}/apis_uc.api_v1alpha1.json?url`)).default,
      name: 'User-center API V1alpha1'
    }
  ]

  SwaggerUIBundle({
    urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: 'StandaloneLayout',
    validatorUrl: ''
  })
}
</script>

<template>
  <main id="swagger-ui"></main>
</template>
