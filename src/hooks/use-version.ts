export function useVersion() {
  const apiDocsVersions = import.meta.glob('@/assets/api-docs/**', { eager: true })

  const versions = [
    ...new Set(
      Object.keys(apiDocsVersions)
        .map((path) => {
          const match = path.match(/\/(\d+\.\d+)\//)
          return match ? match[1] : null
        })
        .filter(Boolean)
    )
  ]
    .filter(Boolean)
    .sort((a, b) => {
      const [aMajor, aMinor] = a?.split('.').map(Number) || []
      const [bMajor, bMinor] = b?.split('.').map(Number) || []
      return bMajor - aMajor || bMinor - aMinor
    }) as string[]
  return { versions }
}
