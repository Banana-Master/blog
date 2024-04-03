'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

const style = `
.giscus, .giscus-frame {
  width: 100%;
  min-height: 150px;
}

.giscus-frame {
  border: none;
  color-scheme: light dark;
}

.giscus-frame--loading {
  opacity: 0;
}
`

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  // https://github.com/giscus/giscus/tree/main/styles/themes

  const theme = resolvedTheme === 'light' ? 'light' : 'dark'

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const styleElem = document.createElement('style')
    styleElem.textContent = style
    ref.current.appendChild(styleElem)

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    scriptElem.setAttribute('data-repo', 'Banana-Master/blog-comment')
    scriptElem.setAttribute('data-repo-id', 'R_kgDOLoGaqQ')
    scriptElem.setAttribute('data-category', 'Comments')
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOLoGaqc4CeXoU')
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'top')
    scriptElem.setAttribute('data-theme', theme)
    scriptElem.setAttribute('data-lang', 'ko')
    scriptElem.setAttribute('data-loading', 'lazy')

    ref.current.appendChild(scriptElem)
  }, [theme])

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app')
  }, [theme])

  return <section ref={ref} />
}
