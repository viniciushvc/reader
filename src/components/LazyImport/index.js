import React, { Suspense, lazy } from 'react'

export default function LazyImport(Component) {
  const ComponentLoadable = lazy(Component)
  return props => (
    <Suspense fallback={<></>}>
      <ComponentLoadable {...props} />
    </Suspense>
  )
}
