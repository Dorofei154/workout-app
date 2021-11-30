import styled from 'styled-components';

export const S = {
  Calendar: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    height: 100vh;
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `,
  ArrowButton: styled.button`
    border: 2px solid #aa00ff;
    box-sizing: border-box;
    border-radius: 8px;
    background: none;
    cursor: pointer;
    height: 48px;
    width: 74px;
  `,
  WrapperWorkoutHeader: styled.div`
    display: flex;
    width: 60vw;
    justify-content: space-around;
    align-items: baseline;
  `,
  WrapperGroup: styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
  `,
  WrapperLoader: styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  WrapperList: styled.div`
    display: flex;
    align-items: left;
    margin-left: 10px;
    flex-direction: column;
    justify-content: center;
  `,
  List: styled.li`
    display: flex;
  `,
  Section: styled.section`
    list-style-type: none;
  `,
  Ul: styled.ul`
    list-style-type: none;
    padding: 0;
  `,
  Div: styled.div`
    padding: 10px 20px;
  `,
  Label: styled.label`
    padding-left: 10px;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  `,
  ButtonStartWorkout: styled.button`
    position: sticky;
    width: 60vw;
    bottom: 2vh;
    background: #aa00ff;
    border: none;
    color: #ffffff;
    padding: 2vh 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 16px 32px rgba(170, 0, 255, 0.24);
    border-radius: 8px;
    margin-bottom: 2vh;
    cursor: pointer;
  `,
  Img: styled.img`
    height: 5vw;
    width: auto;
    margin-top: 1vh;
  `,
  ImgMain: styled.img`
    margin: 2vh 0;
    height: auto;
    width: 60vw;
  `,
  ImgWorkout: styled.img`
    margin: 2vh 0;
    height: 30vw;
    width: 40vw;
  `,
  VideoWorkout: styled.video``,
  ButtonStop: styled.button`
    border-radius: 1000px;
    border: none;
    background: none;
    cursor: pointer;
    width: 20px;
  `,
  H3: styled.h3`
    font-size: 20px;
    margin: 1vh 0;
    border-top: 1px solid #eeeeee;
  `,
  H2: styled.h2``,
  H1: styled.h1`
    margin: 1vh 0;
  `,
  Span: styled.span`
    font-size: 14px;
    line-height: 20px;
    color: #212121;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `
};
