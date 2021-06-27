import styled from "styled-components";
import { colors } from "config";
import { Container, MinimalButton } from "components";
import Image from "next/image";
export const Header = () => {
  return (
    <>
      <Container width="100%" height="60px" background={colors.OXFORD_BLUE}>
        <Container maxWidth="1140px" height="100%" margin="auto">
          <MinimalButton height="100%">
            <Image
              src="/images/logo-white.svg"
              alt="offerzen-logo"
              height="28px"
              width="223px"
            />
          </MinimalButton>
        </Container>
      </Container>
    </>
  );
};
