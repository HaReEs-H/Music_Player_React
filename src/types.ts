import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type Song = {
  id: string
  title: string
  artist: string
  duration: number
}

export type ControlsProps = {
  isPlaying: boolean
  isActive: boolean
  repeat: boolean
  setRepeat: Dispatch<SetStateAction<boolean>>
  shuffle: boolean
  setShuffle: Dispatch<SetStateAction<boolean>>
  currentSongs: Song[]
  handlePlayPause: () => void
  handlePrevSong: () => void
  handleNextSong: () => void
}

export type PlayerState = {
  activeSong: Song | null
  currentSongs: Song[]
  currentIndex: number
  isActive: boolean
  isPlaying: boolean
}

export type PlayerProps = {
  activeSong: {
    hub?: {
      actions?: {
        uri?: string
      }[]
    }
  }
  isPlaying: boolean
  volume: number
  seekTime: number
  onEnded: () => void
  onTimeUpdate: () => void
  onLoadedData: () => void
  repeat: boolean
}

export type SeekBarProps = {
  value: number
  min: number
  max: number
  onInput: (event: ChangeEvent<HTMLInputElement>) => void
  setSeekTime: (time: number) => void
  appTime: number
}

type ActiveSong = {
  images: {
    converart: string
  }
  title: string
  subtitle: string
}

export type TrackProps = {
  isPlaying: boolean
  isActive: boolean
  activeSong: ActiveSong | null
}

export type VolumeBarProps = {
  value: number
  min: number
  max: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  setVolume: (volume: number) => void
}
