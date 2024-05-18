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
  setRepeat: React.Dispatch<React.SetStateAction<boolean>>
  shuffle: boolean
  setShuffle: React.Dispatch<React.SetStateAction<boolean>>
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
