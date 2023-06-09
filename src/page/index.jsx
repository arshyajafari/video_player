// hooks
import { Fragment, useState } from "react";

// material style
import { Grid, Slider } from "@mui/material";

// react icons
import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerStopFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
  TbVolumeOff,
  TbVolume3,
  TbVolume2,
  TbVolume,
  TbDashboard,
  TbPictureInPictureOn,
  TbMaximizeOff,
  TbMaximize,
} from "react-icons/tb";

// components
import IconButtonCM from "../components/IconButton";

// styled components
import {
  GridVideoPlayerBox,
  GridVideoPlayerStyled,
  VideoPlayerStyled,
  IconButtonCenterStyled,
  ControllerGridBox,
  VideoTimelineStyled,
  GridLeftItemStyled,
  VolumeSliderStyled,
  GridCenterItemStyled,
  GridRightItemStyled,
  SpeedVideoListBox,
  ErrorMessageBox,
  ErrorMessageText,
} from "./Video.style";

// import video
import src from "../assets/20220824_204325.mp4";

export default function VideoPlayer() {
  // duration video state
  const [durationVideo, setDurationVideo] = useState("");

  // icons changing state
  const [muteVideoIcon, setMuteVideoIcon] = useState(false);
  const [volumeIcon, setVolumeIcon] = useState("low");
  const [pauseVideoIcon, setPauseVideoIcon] = useState(false);
  const [speedVideoIcon, setSpeedVideoIcon] = useState(false);
  const [fullscreenIcon, setFullscreenIcon] = useState(false);

  // slider value state
  const [progressPosition, setProgressPosition] = useState(0);
  const [volumePosition, setVolumePosition] = useState(30);

  // mute video icon handler
  const handlerVideoMuted = () => {
    setMuteVideoIcon((state) => !state);
    if (muteVideoIcon) setVolumePosition(30);
    else setVolumePosition(0);
  };

  // playback video handler
  const handlerVideoSpeed = () => setSpeedVideoIcon((state) => !state);

  // fullscreen video handler
  const handlerVideoFullscreen = () => setFullscreenIcon((state) => !state);

  // select video player
  const videoObject = () =>
    document.querySelector("#video") ? document.querySelector("#video") : 0;

  // play video function
  const playedVideo = () => {
    const video = videoObject();
    const centerPlayButton = document.querySelector("#playIcon");

    setPauseVideoIcon((state) => !state);
    setProgressPosition(video.currentTime);

    if (video.paused) {
      video.play();
      centerPlayButton.style.display = "none";
    } else {
      video.pause();
      centerPlayButton.style.display = "block";
    }
  };

  // progress bar handler
  const progressHandler = (value) => {
    const video = videoObject();
    video.currentTime = value;
    setProgressPosition(value);
  };

  // volume bar handler
  const volumeHandler = (value) => {
    const video = videoObject();
    setVolumePosition(value);
    video.volume = value / 100;
    if (value === 0) setVolumeIcon("off");
    else if (value >= 50) setVolumeIcon("high");
    else setVolumeIcon("low");
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
    const video = videoObject();
    video.pause();
    video.currentTime = 0;
    setPauseVideoIcon(false);
  };

  // backward video function
  const backwardVideo = () => {
    const video = videoObject();
    video.currentTime -= 5;
    setProgressPosition(video.currentTime);
  };

  // forward video function
  const forwardVideo = () => {
    const video = videoObject();
    video.currentTime += 5;
    setProgressPosition(video.currentTime);
  };

  // speed video function
  const playBackVideo = (value) => {
    const video = videoObject();
    video.playbackRate = value;
    setSpeedVideoIcon(false);
  };

  // picture in picture function
  const picInPicVideo = async () => {
    const video = videoObject();
    if (document.pictureInPictureEnabled && !video.disablePictureInPicture) {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await video.requestPictureInPicture();
        }
      } catch (err) {
        return err;
      }
    }
  };

  setTimeout(() => {
    const video = videoObject();
    const centerPlayButton = document.querySelector("#playIcon");

    setDurationVideo(video.duration);

    formatDuration();

    if (video.currentTime === video.duration) {
      stoppedVideo();
      centerPlayButton.style.display = "block";
    }

    setProgressPosition(video.currentTime);
  }, 500);

  return (
    <Fragment>
      <GridVideoPlayerBox container>
        <GridVideoPlayerStyled
          item
          xs={12}
          fullscreen={fullscreenIcon ? fullscreenIcon : null}
        >
          {/* video src */}
          <VideoPlayerStyled
            src={src}
            id="video"
            type="video/*"
            onClick={() => playedVideo()}
            fullscreen={fullscreenIcon ? fullscreenIcon : null}
          />

          {/* center icon */}
          <IconButtonCenterStyled id="playIcon" onClick={() => playedVideo()}>
            {pauseVideoIcon ? <TbPlayerPauseFilled /> : <TbPlayerPlayFilled />}
          </IconButtonCenterStyled>

          {/* video controllers */}
          <ControllerGridBox
            container
            fullscreen={fullscreenIcon ? fullscreenIcon : null}
          >
            <Grid item xs={12}>
              <Slider
                size="small"
                value={progressPosition}
                min={0}
                step={1}
                max={+durationVideo}
                onChange={(_, value) => progressHandler(value)}
              />
              <VideoTimelineStyled>
                <span className="current-time">
                  {formatDuration(progressPosition)}
                </span>
                <span className="separator"> / </span>
                <span className="time-duration">
                  {formatDuration(durationVideo - progressPosition)}
                </span>
              </VideoTimelineStyled>
            </Grid>
            <GridLeftItemStyled item xs={4}>
              <IconButtonCM onClick={handlerVideoMuted}>
                {muteVideoIcon ? (
                  <TbVolume3 />
                ) : volumeIcon === "off" ? (
                  <TbVolumeOff />
                ) : volumeIcon === "high" ? (
                  <TbVolume />
                ) : (
                  <TbVolume2 />
                )}
              </IconButtonCM>
              <VolumeSliderStyled
                value={volumePosition}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                step={1}
                onChange={(_, value) => volumeHandler(value)}
              />
            </GridLeftItemStyled>
            <GridCenterItemStyled item xs={4}>
              <IconButtonCM onClick={stoppedVideo}>
                <TbPlayerStopFilled />
              </IconButtonCM>
              <IconButtonCM onClick={backwardVideo}>
                <TbPlayerTrackPrevFilled />
              </IconButtonCM>
              <IconButtonCM onClick={() => playedVideo()}>
                {pauseVideoIcon ? (
                  <TbPlayerPauseFilled size={35} />
                ) : (
                  <TbPlayerPlayFilled size={35} />
                )}
              </IconButtonCM>
              <IconButtonCM onClick={forwardVideo}>
                <TbPlayerTrackNextFilled />
              </IconButtonCM>
            </GridCenterItemStyled>
            <GridRightItemStyled item xs={4}>
              <IconButtonCM onClick={handlerVideoSpeed}>
                <TbDashboard />
              </IconButtonCM>
              <SpeedVideoListBox displaySpeedBox={speedVideoIcon}>
                <ul>
                  <li onClick={() => playBackVideo("3.0")}>x3</li>
                  <li onClick={() => playBackVideo("2.0")}>x2</li>
                  <li onClick={() => playBackVideo("1.0")}>normal</li>
                  <li onClick={() => playBackVideo("0.5")}>x0.5</li>
                </ul>
              </SpeedVideoListBox>
              <IconButtonCM onClick={picInPicVideo}>
                <TbPictureInPictureOn />
              </IconButtonCM>
              <IconButtonCM onClick={handlerVideoFullscreen}>
                {fullscreenIcon ? <TbMaximizeOff /> : <TbMaximize />}
              </IconButtonCM>
            </GridRightItemStyled>
          </ControllerGridBox>
        </GridVideoPlayerStyled>

        {/* error message */}
        <ErrorMessageBox>
          <ErrorMessageText>
            This video player is not designed for this device.
          </ErrorMessageText>
        </ErrorMessageBox>
      </GridVideoPlayerBox>

      {/* <Grid container>
        <div className="controllers">
          <div className="video-timeline">
            <div className="progress-area">
              <span>00:00</span>
              <div className="progress-bar"></div>
            </div>
          </div>
        </div> */}
      {/* <StyledPlayerBox item xs={12}>
          <StyledVideo
            src={src}
            type="video/*"
            id="video-player"
            onClick={() => playedVideo()}
          />
          <StyledCenterButton id="play-button" onClick={() => playedVideo()}>
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
        </StyledPlayerBox> */}
      {/* </Grid> */}
      {/* </ModalContainer>
      </Backdrop> */}
    </Fragment>
  );
}
