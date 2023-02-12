import styled from "styled-components/native";

const Heading = styled.Text`
  color: ${(props) => props.theme.colors.dark[200]};
`;

export const Heading1 = styled(Heading)`
  font-size: ${({ theme }) => theme.typography.heading[1].fontSize};
  font-weight: ${({ theme }) => theme.typography.heading[1].fontWeight};
  line-height: ${({ theme }) => theme.typography.heading[1].lineHeight};
`;

export const Heading2 = styled(Heading)`
  font-size: ${({ theme }) => theme.typography.heading[2].fontSize};
  font-weight: ${({ theme }) => theme.typography.heading[2].fontWeight};
  line-height: ${({ theme }) => theme.typography.heading[2].lineHeight};
`;

export const Heading3 = styled(Heading)`
  font-size: ${({ theme }) => theme.typography.heading[3].fontSize};
  font-weight: ${({ theme }) => theme.typography.heading[3].fontWeight};
  line-height: ${({ theme }) => theme.typography.heading[3].lineHeight};
`;

export const Heading4 = styled(Heading)`
  font-size: ${({ theme }) => theme.typography.heading[4].fontSize};
  font-weight: ${({ theme }) => theme.typography.heading[4].fontWeight};
  line-height: ${({ theme }) => theme.typography.heading[4].lineHeight};
`;

export const Heading5 = styled(Heading)`
  font-size: ${({ theme }) => theme.typography.heading[5].fontSize};
  font-weight: ${({ theme }) => theme.typography.heading[5].fontWeight};
  line-height: ${({ theme }) => theme.typography.heading[5].lineHeight};
`;

export const SubHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.typography.heading[6].fontSize};
  font-weight: ${({ theme }) => theme.typography.heading[6].fontWeight};
  line-height: ${({ theme }) => theme.typography.heading[6].lineHeight};
`;
