/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import React from 'react'
import Cursor from '@/app/components/Elements/Cursor'
import { useAtomValue } from 'jotai'
import { AssetsLoadedAtom } from '@/app/store'
import Loader from '@/app/components/Loader'

interface WebsiteLayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  const isAssetsLoaded = useAtomValue(AssetsLoadedAtom)

  React.useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
      locomotiveScroll
    })()
  }, [])

  return (
    <div className="bg-black-state root-container">
      <Cursor />
      {!isAssetsLoaded.isAssetsLoaded && <Loader />}
      {isAssetsLoaded.isAssetsLoaded && <div className="">{children}</div>}
    </div>
  )
}

export default Layout
