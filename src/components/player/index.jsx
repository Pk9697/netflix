import { createContext, useContext, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Container, Overlay, Inner, Button, Close } from './styles/player'

export const PlayerContext = createContext(null)

function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false)
  const value = useMemo(
    () => ({
      showPlayer,
      setShowPlayer,
    }),
    [showPlayer]
  )
  return (
    <PlayerContext.Provider value={value}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return showPlayer
    ? createPortal(
        <Overlay {...restProps}>
          <Inner>
            <video id="netflix-player" controls>
              <track kind="captions" />
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <Close onClick={() => setShowPlayer(false)}>
              <img src="/images/icons/close.png" alt="Close" />
            </Close>
          </Inner>
        </Overlay>,
        document.body
      )
    : null
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext)
  return (
    <Button {...restProps} onClick={() => setShowPlayer((prev) => !prev)}>
      Play
    </Button>
  )
}

export default Player
