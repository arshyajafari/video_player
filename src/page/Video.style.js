// material style
import { Grid, IconButton, Slider } from "@mui/material";

// styled components
import styled from "styled-components";

export const GridVideoPlayerBox = styled(Grid)`
  height: 100vh !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0px !important;
  padding: 0px !important;
  z-index: 1 !important;
`;

export const GridVideoPlayerStyled = styled(Grid)`
  min-width: ${(props) => (props.fullscreen ? "99%" : "79%")} !important;
  max-width: ${(props) => (props.fullscreen ? "100%" : "80%")} !important;
  max-height: 100vh !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  position: relative;

  @media (max-width: 1024px) {
    display: none !important;
  }

  @media (max-height: 600px) {
    display: none !important;
  }
`;

export const VideoPlayerStyled = styled.video`
  width: 100% !important;
  max-height: ${(props) => (props.fullscreen ? "100vh" : "auto")} !important;
  border-radius: ${(props) => (props.fullscreen ? "0px" : "12px")};
  cursor: pointer;
`;

export const IconButtonCenterStyled = styled(IconButton)`
  display: none;
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2 !important;

  & svg {
    color: rgba(25, 118, 210, 0.7);
    font-size: 70px;
    border: 2px solid rgba(25, 118, 210, 0.7);
    border-radius: 100%;
    padding: 5px;
  }

  & :hover {
    color: rgb(25, 118, 210);
    border-color: rgb(25, 118, 210);
  }
`;

export const ControllerGridBox = styled(Grid)`
  width: 100% !important;
  background: linear-gradient(
    0deg,
    #111 0%,
    rgba(0, 0, 0, 0.1) 100%
  ) !important;
  border-bottom-right-radius: ${(props) => (props.fullscreen ? "0px" : "12px")};
  border-bottom-left-radius: ${(props) => (props.fullscreen ? "0px" : "12px")};
  position: absolute;
  bottom: 0px !important;
  padding: 5px 20px 10px !important;
  z-index: 2 !important;
`;

export const VideoTimelineStyled = styled.div`
  color: #ddd;
  margin: 0px;
  padding: 0px;
`;

export const GridLeftItemStyled = styled(Grid)`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const VolumeSliderStyled = styled(Slider)`
  width: 45% !important;
  margin: 0px 0px 0px 12px !important;
`;

export const GridCenterItemStyled = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridRightItemStyled = styled(Grid)`
  display: flex;
  justify-content: right;
  align-items: flex-start;
  position: relative;
`;

export const SpeedVideoListBox = styled.div`
  position: absolute;
  bottom: 50px;
  right: 90px;
  opacity: ${(props) => (props.displaySpeedBox ? "1" : "0")};
  z-index: 2;

  & ul {
    background-color: rgba(98, 98, 98, 0.55);
    text-align: left;
    list-style: none;
    border-radius: 12px;
    margin: 0px;
    padding: 0px;
    box-shadow: -2px -1px 7px rgba(255, 255, 255, 0.6);

    & li {
      border-bottom: 1px solid #333;
      padding: 5px 35px 5px 15px;
      cursor: pointer;

      :first-child {
        :hover {
          border-top-right-radius: 12px;
          border-top-left-radius: 12px;
        }
      }

      :last-child {
        border-bottom: none;

        :hover {
          border-bottom-right-radius: 12px;
          border-bottom-left-radius: 12px;
        }
      }

      :hover {
        background-color: #eee;
      }
    }
  }
`;

export const ErrorMessageBox = styled.div`
  width: 500px;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 5;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 700px) {
    width: 95%;
  }

  @media (max-height: 600px) {
    display: block;
  }

  &::before {
    max-width: 100%;
    background: linear-gradient(
      to right,
      rgb(227, 48, 7),
      rgb(25, 118, 210, 0.3)
    );
    color: #fff;
    content: "Error Message";
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: left;
    align-items: center;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 10px 20px 5px;
  }
`;

export const ErrorMessageText = styled.span`
  max-width: 100%;
  height: 7rem;
  background-color: #4141419c;
  color: #ffffffda;
  font-size: 1.2rem;
  text-align: left;
  line-height: 1.9rem;
  white-space: break-spaces;
  display: block;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 15px 20px;
`;
