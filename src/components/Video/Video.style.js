// material style
import { Grid, IconButton, Slider } from "@mui/material";

// react icons
import {
  MdNextPlan,
  MdVolumeMute,
  MdVolumeDown,
  MdVolumeUp,
} from "react-icons/md";

// styled components
import styled, { css, keyframes } from "styled-components";

const containerCss = ({ isShown }) => {
  if (isShown) {
    return css`
      opacity: 1;
      pointer-events: visible;
    `;
  }
};

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 110000;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none;
  ${containerCss}
`;

const slideScale = keyframes`
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  width: 70%;
  height: fit-content !important;
  background-color: transparent !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  transform: scale(1);
  transition: 0.3s;
  margin: 0px !important;
  padding: 0px !important;
  animation: ${(props) =>
    props.isShown
      ? css`
          ${slideScale} 0.5s ease
        `
      : ""};

  &:fullscreen {
    width: 100vw !important;
    height: 100vh !important;
    background-color: rgba(200, 200, 200, 0.4) !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;

    & #video-player {
      width: 100vw;
      position: relative;
    }
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 95%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const StyledPlayerBox = styled(Grid)`
  position: relative !important;

  &:hover #controls-bar {
    display: block !important;
  }

  @media (max-width: 1000px) {
    &:active,
    &:focus #controls-bar {
      display: block !important;
    }
  }
`;

export const StyledVideo = styled.video`
  width: 100%;
  border-radius: 5px;
  margin: 0px;
  padding: 0px;
`;

export const StyledCenterButton = styled(IconButton)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  & svg {
    color: #de0021da;
    font-size: 80px;
    cursor: pointer;

    @media (max-width: 900px) {
      font-size: 70px;
    }

    @media (max-width: 700px) {
      font-size: 60px;
    }

    @media (max-width: 400px) {
      font-size: 50px;
    }
  }
`;

export const StyledControlsBar = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(
    0deg,
    #000000 0%,
    rgba(0, 0, 0, 0) 100%
  ) !important;
  position: absolute;
  bottom: 8px;
  border-radius: 0px 0px 5px 5px;
  direction: ltr !important;
  display: none;

  @media (max-width: 900px) {
    height: 90px;
  }

  @media (max-width: 700px) {
    height: 80px;
  }

  @media (max-width: 400px) {
    height: 70px;
  }
`;

export const StyledProgressContainer = styled.div`
  width: 100%;
  height: 5px;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  position: absolute;
  top: 25px;
  margin: 0px;
  padding: 0px 18px;
`;

export const StyledVideoCounterTime = styled.div`
  font-size: 18px;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin: 0px;
  padding: 0px 15px 0px 0px;

  @media (max-width: 700px) {
    font-size: 15px;
    padding: 0px 8px 0px 0px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const StyledVideoTimes = styled.div`
  font-size: 18px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0px;
  padding: 0px 0px 0px 15px;

  @media (max-width: 700px) {
    font-size: 15px;
    padding: 0px 0px 0px 8px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

export const StyledSubCounterDash = styled.span`
  padding: 0px 2px 0px 0px;
`;

export const StyledProgressBar = styled(Slider)`
  width: 100%;
  height: 100%;
  color: #de0021;

  & .MuiSlider-thumb {
    width: 8px;
    height: 8px;

    &::before {
      box-shadow: none;
    }

    &:hover,
    &.Mui-focusVisible,
    &.Mui-active {
      width: 14px;
      height: 14px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4) !important;

      @media (max-width: 400px) {
        width: 9px;
        height: 9px;
      }
    }

    @media (max-width: 400px) {
      width: 6px;
      height: 6px;
    }
  }

  & .MuiSlider-rail {
    background-color: #ddd;
    opacity: 0.48;
  }
`;

export const StyledPlayerIconBox = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  position: absolute !important;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  direction: ltr !important;

  & svg {
    color: #de00219c;
    cursor: pointer;
  }
`;

export const StyledPlayButton = styled(IconButton)`
  & svg {
    font-size: 48px;
    margin: 0px;

    @media (max-width: 700px) {
      font-size: 40px;
    }

    @media (max-width: 400px) {
      font-size: 30px;
    }
  }
`;

export const StyledPreviousButton = styled(MdNextPlan)`
  font-size: 38px;
  transform: scaleX(-1) rotate(-5deg) !important;

  @media (max-width: 700px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export const StyledNextButton = styled(MdNextPlan)`
  font-size: 38px;
  transform: rotate(-5deg);

  @media (max-width: 700px) {
    font-size: 30px;
  }

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export const StyledVolumeContainer = styled.div`
  width: 40px !important;
  height: 150px !important;
  background-color: #de00219c;
  backdrop-filter: blur(1px) !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  flex-direction: column !important;
  position: absolute;
  top: -180px;
  right: 20px;
  border-radius: 5px;
  margin: 0px;
  padding: 10px 15px;
  direction: ltr !important;

  @media (max-width: 900px) {
    width: 30px !important;
    height: 120px !important;
    top: -130px;
    right: 15px;
  }

  @media (max-width: 700px) {
    width: 20px !important;
    height: 85px !important;
    top: -80px;
    right: 15px;
    padding: 7px 11px;
  }

  @media (max-width: 350px) {
    width: 18px !important;
    height: 70px !important;
    top: -55px;
    right: 15px;
    padding: 5px 9px;
  }
`;

export const StyledVolumeBar = styled(Slider)`
  width: 10px !important;
  height: 100%;
  color: #de0021;

  @media (max-width: 900px) {
    width: 8px !important;
  }

  @media (max-width: 700px) {
    width: 5px !important;
  }

  & .MuiSlider-track {
    border: none;
  }

  & .MuiSlider-thumb {
    width: 10px;
    height: 10px;
    background-color: #de0021;
    border-radius: 2px 2px 0px 0px;

    &:before {
      box-shadow: none !important;
    }

    &:hover,
    &.Mui-focusVisible,
    &.Mui-active {
      width: 14px !important;
      height: 14px !important;
      border-radius: 100%;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4) !important;

      @media (max-width: 900px) {
        width: 12px !important;
        height: 12px !important;
      }

      @media (max-width: 700px) {
        width: 9px !important;
        height: 9px !important;
      }
    }

    @media (max-width: 900px) {
      width: 8px !important;
      height: 8px !important;
    }

    @media (max-width: 700px) {
      width: 5px !important;
      height: 5px !important;
    }
  }

  & .MuiSlider-rail {
    background-color: #ddd;
  }
`;

export const StyledPlayerVolumeDown = styled(MdVolumeDown)`
  color: #fff;
  font-size: 25px;
  margin: 5px 0px 0px 0px;
  padding: 0px;

  @media (max-width: 700px) {
    font-size: 20px;
    margin: 0px;
  }
`;

export const StyledPlayerVolumeUp = styled(MdVolumeUp)`
  color: #fff;
  font-size: 25px;
  margin: 5px 0px 0px 0px;
  padding: 0px;

  @media (max-width: 700px) {
    font-size: 20px;
    margin: 0px;
  }
`;

export const StyledPlayerVolumeMute = styled(MdVolumeMute)`
  color: #fff;
  font-size: 25px;
  margin: 5px 0px 0px 0px;
  padding: 0px;

  @media (max-width: 700px) {
    font-size: 20px;
    margin: 0px;
  }
`;

export const StyledFullScreen = styled(IconButton)`
  position: absolute !important;
  bottom: 10%;
  right: 2%;

  @media (max-width: 400px) {
    bottom: 7%;
    right: 1%;
  }

  & svg {
    color: #de0021da;
    font-size: 30px;
    cursor: pointer;

    @media (max-width: 900px) {
      font-size: 27px;
    }

    @media (max-width: 700px) {
      font-size: 22px;
    }

    @media (max-width: 400px) {
      font-size: 20px;
    }
  }
`;
