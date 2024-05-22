import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent } from 'react'

type Song1 = {
  id: string
  title: string
  artist: string
  duration: number
}

export type Song = {
  track?: any
}

export type RootState = {
  player: PlayerState
}

export type ControlsProps = {
  isPlaying: boolean
  isActive: boolean
  repeat: boolean
  setRepeat: Dispatch<SetStateAction<boolean>>
  shuffle: boolean
  setShuffle: Dispatch<SetStateAction<boolean>>
  currentSongs: Song1[]
  handlePlayPause: () => void
  handlePrevSong: () => void
  handleNextSong: () => void
}

export type PlayerState = {
  activeSong: ActiveSong | null
  currentSongs: ActiveSong[]
  currentIndex: number
  isActive: boolean
  isPlaying: boolean
}

export type PlayerProps = {
  activeSong: ActiveSong | null
  isPlaying: boolean
  volume: number
  seekTime: number
  onEnded: () => void
  onTimeUpdate: (event: SyntheticEvent<HTMLMediaElement, Event>) => void
  onLoadedData: (event: SyntheticEvent<HTMLMediaElement, Event>) => void
  repeat: boolean
  currentIndex: number
}

export type SeekBarProps = {
  value: number
  min: string
  max: number
  onInput: (event: ChangeEvent<HTMLInputElement>) => void
  setSeekTime: (time: number) => void
  appTime: number
}

type ActiveSong = {
  id: string
  title: string
  artist: string
  duration: number
  images: {
    coverart: string
  }
  subtitle: string
  hub: {
    actions: {
      uri: string
    }[]
  }
}

export type TrackProps = {
  isPlaying: boolean
  isActive: boolean
  activeSong: ActiveSong | null
}

export type VolumeBarProps = {
  value: number
  min: string
  max: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  setVolume: (volume: number) => void
}
