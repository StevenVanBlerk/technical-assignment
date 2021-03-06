import styled from "styled-components";

//This component is used as the foundation for all generic components to make all components quickly styleable
export const StyledComponent = styled.div`
  display: ${({ display }) => display};
  position: ${({ position }) => position};

  height: ${({ height }) => height};
  width: ${({ width }) => width};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};

  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};

  padding: ${({ padding }) => padding};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};

  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-top: ${({ borderTop }) => borderTop};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-left: ${({ borderLeft }) => borderLeft};

  vertical-align: ${({ verticalAlign }) => verticalAlign};

  box-shadow: ${({ boxShadow }) => boxShadow};
  grid-gap: ${({ gridGap }) => gridGap};
  justify-content: ${({ justifyContent }) => justifyContent};
  justify-self: ${({ justifySelf }) => justifySelf};
  place-content: ${({ placeContent }) => placeContent};
  place-self: ${({ placeSelf }) => placeSelf};
  background: ${({ background }) => background};
  opacity: ${({ opacity }) => opacity};

  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-overflow: ${({ textOverflow }) => textOverflow};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  word-wrap: ${({ wordWrap }) => wordWrap};

  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};

  transform: ${({ transform }) => transform};
`;
