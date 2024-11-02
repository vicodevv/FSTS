import { atom } from 'jotai'

type AssetsLoadedType = {
  isAssetsLoaded: boolean
}

export const AssetsLoadedAtom = atom<AssetsLoadedType>({
  isAssetsLoaded: false,
})
