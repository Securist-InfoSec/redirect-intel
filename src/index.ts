/** @securist/redirect-intel */
export const packageId = 'redirect-intel' as const
export const org = 'securist' as const
export function banner(): string {
  return `[Securist] ${org}/${packageId} · UNCLASSIFIED // PUBLIC SOURCE`
}
