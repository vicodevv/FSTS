import React, { useState, useEffect } from 'react'
import { AssetsLoadedAtom } from '@/app/store'
import { useSetAtom } from 'jotai'

const Loader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const setIsAssetsLoaded = useSetAtom(AssetsLoadedAtom)

  useEffect(() => {
    const assets = ['/images/band.svg', '/images/culture.svg', 'Logo.svg']

    const totalAssets = assets.length - 1
    let loadedAssets = 0

    const checkAssetsLoaded = () => {
      loadedAssets += 1
      if (loadedAssets === totalAssets) {
        setTimeout(() => {
          setIsAssetsLoaded({ isAssetsLoaded: true })
        }, 1000)
      }
    }

    const updateLoadingProgress = () => {
      const progress = (loadedAssets / totalAssets) * 100
      setLoadingProgress(progress)
    }

    const loadAssets = () => {
      assets.forEach((path) => {
        const img = new Image()
        img.onload = () => {
          updateLoadingProgress()
          checkAssetsLoaded()
        }
        img.onerror = (error) => {
          console.error(`Error loading asset: ${path}`, error)
          checkAssetsLoaded()
        }
        img.src = path
      })
    }

    loadAssets()
  }, [setIsAssetsLoaded])

  return (
    <div className="h-screen">
      <p className="absolute bottom-0 text-[100px] pl-2">
        {Math.min(loadingProgress, 100).toFixed(0).padStart(3, '0')}%
      </p>
    </div>
  )
}

export default Loader
