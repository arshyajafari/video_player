// hooks
import { Fragment, useState } from "react";

// material style
import { Tooltip, IconButton, Grid } from "@mui/material";

// react icons
import {
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineFullscreen,
} from "react-icons/md";

// styled components
import {
  Backdrop,
  ModalContainer,
  StyledPlayerBox,
  StyledVideo,
  StyledCenterButton,
  StyledControlsBar,
  StyledProgressContainer,
  StyledVideoCounterTime,
  StyledProgressBar,
  StyledSubCounterDash,
  StyledVideoTimes,
  StyledPlayerIconBox,
  StyledPlayButton,
  StyledPreviousButton,
  StyledNextButton,
  StyledVolumeContainer,
  StyledVolumeBar,
  StyledPlayerVolumeDown,
  StyledPlayerVolumeUp,
  StyledPlayerVolumeMute,
  StyledFullScreen,
} from "./VideoPlayer.style";

// import video
import src from "../../assets/20220824_204325.mp4";

export const VideoPlayer = () => {
  // state player box
  const [showPlayer, setShowPlayer] = useState(false);

  // video player position
  const [progressPosition, setProgressPosition] = useState(0);
  const [volumePosition, setVolumePosition] = useState(30);

  // passed and volumed state
  const [paused, setPaused] = useState(false);
  const [volumed, setVolumed] = useState("");

  // show player box function
  const handleShowPlayer = () => {
    setShowPlayer((state) => !state);
    stoppedVideo();
  };

  // select video player
  const videoPlayerObject = () =>
    document.querySelector("#video-player")
      ? document.querySelector("#video-player")
      : 0;

  // play video function
  const playedVideo = () => {
    const videoPlayer = videoPlayerObject();
    const centerPlayButton = document.querySelector("#play-button");
    const controlsBar = document.querySelector("#controls-bar");

    setPaused((state) => !state);
    setProgressPosition(videoPlayer.currentTime);

    if (videoPlayer.paused) {
      videoPlayer.play();
      centerPlayButton.style.display = "none";
      controlsBar.style.display = "block";
      setTimeout(() => {
        controlsBar.style.display = "none";
      }, 2000);
    } else {
      videoPlayer.pause();
      centerPlayButton.style.display = "block";
      controlsBar.style.display = "none";
    }
  };

  // duration time function
  const formatDuration = (value) => {
    const hrs = Math.floor(value / 3600);
    const min = Math.floor((value % 3600) / 60);
    const sec = Math.floor((value % 3600) % 60);

    return `${hrs < 10 ? `0${hrs}` : hrs}:${min < 10 ? `0${min}` : min}:${
      sec < 10 ? `0${sec}` : sec
    }`;
  };

  // stop video function
  const stoppedVideo = () => {
    const videoPlayer = videoPlayerObject();
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    setPaused(false);
  };

  // backward video function
  const backWardVideo = () => {
    const videoPlayer = videoPlayerObject();
    videoPlayer.currentTime -= 5;
    setProgressPosition(videoPlayer.currentTime);
  };

  // forward video function
  const forWardVideo = () => {
    const videoPlayer = videoPlayerObject();
    videoPlayer.currentTime += 5;
    setProgressPosition(videoPlayer.currentTime);
  };

  // progress bar handler
  const progressHandler = (value) => {
    const videoPlayer = videoPlayerObject();
    videoPlayer.currentTime = value;
    setProgressPosition(value);
  };

  // volume bar handler
  const volumeHandler = (value) => {
    const videoPlayer = videoPlayerObject();
    setVolumePosition(value);
    videoPlayer.volume = value / 100;
    if (value === 0) setVolumed("mute");
    else if (value >= 50) setVolumed("up");
    else setVolumed("down");
  };

  // keyboard event function
  const keyHandler = (e) => {
    const videoPlayer = videoPlayerObject();
    switch (e.keyCode) {
      case 37:
        videoPlayer.currentTime -= 5;
        setProgressPosition(videoPlayer.currentTime);
        break;
      case 39:
        videoPlayer.currentTime += 5;
        setProgressPosition(videoPlayer.currentTime);
        break;
      case 38:
        videoPlayer.volume += 5;
        videoPlayer.volume /= 100;
        setVolumePosition(videoPlayer.volume);
        break;
      case 40:
        videoPlayer.volume -= 5;
        videoPlayer.volume /= 100;
        setVolumePosition(videoPlayer.volume);
        break;
      default:
        break;
    }
  };

  // fullscreen video function
  const fullScreenHandler = () => {
    const videoModal = document.querySelector("#video-modal");

    var isInFullScreen =
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null);

    if (!isInFullScreen) {
      if (videoModal.requestFullscreen) {
        videoModal.requestFullscreen();
      } else if (videoModal.mozRequestFullScreen) {
        videoModal.mozRequestFullScreen();
      } else if (videoModal.webkitRequestFullScreen) {
        videoModal.webkitRequestFullScreen();
      } else if (videoModal.msRequestFullscreen) {
        videoModal.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  setInterval(() => {
    const videoPlayer = videoPlayerObject();
    const centerPlayButton = document.querySelector("#play-button");
    formatDuration();
    if (videoPlayer.currentTime === videoPlayer.duration) {
      stoppedVideo();
      centerPlayButton.style.display = "block";
    }
    setProgressPosition(videoPlayer.currentTime);
  }, 500);

  return (
    <Fragment>
      <Tooltip title="پخش ویدیو">
        <IconButton onClick={handleShowPlayer} onKeyDown={(e) => keyHandler(e)}>
          <MdOutlinePlayCircleFilled />
        </IconButton>
      </Tooltip>
      <Backdrop isShown={showPlayer} onClick={handleShowPlayer}>
        <ModalContainer
          isShown={showPlayer}
          id="video-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <Grid container justifyContent={"center"}>
            <StyledPlayerBox item xs={12}>
              <StyledVideo
                src={src}
                type="video/*"
                id="video-player"
                onClick={() => playedVideo()}
              />
              <StyledCenterButton
                id="play-button"
                onClick={() => playedVideo()}
              >
                {paused ? (
                  <MdOutlinePauseCircleFilled />
                ) : (
                  <MdOutlinePlayCircleFilled />
                )}
              </StyledCenterButton>
              <StyledControlsBar id="controls-bar">
                <StyledProgressContainer>
                  <StyledVideoCounterTime>
                    {formatDuration(progressPosition)}
                  </StyledVideoCounterTime>
                  <StyledProgressBar
                    value={progressPosition}
                    min={0}
                    step={1}
                    max={videoPlayerObject().duration}
                    onChange={(_, value) => progressHandler(value)}
                  />
                  <StyledVideoTimes>
                    <StyledSubCounterDash>-</StyledSubCounterDash>
                    {formatDuration(
                      videoPlayerObject().duration - progressPosition
                    )}
                  </StyledVideoTimes>
                </StyledProgressContainer>
                <StyledPlayerIconBox id="player-icon-box">
                  <StyledPreviousButton onClick={backWardVideo} />
                  <StyledPlayButton onClick={() => playedVideo()}>
                    {paused ? (
                      <MdOutlinePauseCircleFilled />
                    ) : (
                      <MdOutlinePlayCircleFilled />
                    )}
                  </StyledPlayButton>
                  <StyledNextButton onClick={forWardVideo} />
                </StyledPlayerIconBox>
                <StyledVolumeContainer id="volume-box">
                  <StyledVolumeBar
                    value={volumePosition}
                    valueLabelDisplay="auto"
                    orientation="vertical"
                    min={0}
                    max={100}
                    step={1}
                    onChange={(_, value) => volumeHandler(value)}
                  />
                  {volumed === "mute" ? (
                    <StyledPlayerVolumeMute />
                  ) : volumed === "up" ? (
                    <StyledPlayerVolumeUp />
                  ) : (
                    <StyledPlayerVolumeDown />
                  )}
                </StyledVolumeContainer>
                <StyledFullScreen
                  id="fullscreen-icon"
                  onClick={() => fullScreenHandler()}
                >
                  <MdOutlineFullscreen />
                </StyledFullScreen>
              </StyledControlsBar>
            </StyledPlayerBox>
          </Grid>
        </ModalContainer>
      </Backdrop>
    </Fragment>
  );
};
