export type VersionType = 'free' | 'paid'

export interface VersionInfo {
  version: string
  type: VersionType
  displayName: string
}

export function useVersion() {
  const apiDocsVersions = import.meta.glob('@/assets/api-docs/**', { eager: true })
  const apiDocsPaidVersions = import.meta.glob('@/assets/api-docs-paid/**', { eager: true })

  const freeVersions = [
    ...new Set(
      Object.keys(apiDocsVersions)
        .map((path) => {
          const match = path.match(/\/(\d+\.\d+)\//)
          return match ? match[1] : null
        })
        .filter(Boolean)
    )
  ] as string[]

  const paidVersions = [
    ...new Set(
      Object.keys(apiDocsPaidVersions)
        .map((path) => {
          const match = path.match(/\/(\d+\.\d+)\//)
          return match ? match[1] : null
        })
        .filter(Boolean)
    )
  ] as string[]

  const allVersions: VersionInfo[] = [
    ...freeVersions.map((v) => ({
      version: v,
      type: 'free' as VersionType,
      displayName: v
    })),
    ...paidVersions.map((v) => ({
      version: v,
      type: 'paid' as VersionType,
      displayName: `${v} (Paid)`
    }))
  ]

  const versions = allVersions.sort((a, b) => {
    const [aMajor, aMinor] = a.version.split('.').map(Number)
    const [bMajor, bMinor] = b.version.split('.').map(Number)
    const versionCompare = bMajor - aMajor || bMinor - aMinor
    if (versionCompare !== 0) return versionCompare
    return a.type === 'free' ? -1 : 1
  })

  return { versions }
}
