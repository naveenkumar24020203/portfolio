"use client"

import { useSyncExternalStore } from "react"

const noop = () => () => {}
const onClient = () => true
const onServer = () => false

/**
 * False during SSR and the first render, true afterwards. Use it to gate
 * client-only output (theme icons, media queries) without a setState effect.
 */
export function useHydrated() {
  return useSyncExternalStore(noop, onClient, onServer)
}
