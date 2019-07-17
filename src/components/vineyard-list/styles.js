import styled from 'styled-components';
import { Link } from '@reach/router';
import { breakpoint } from '../../styles/breakpoint';
import { ListReset } from '../../styles/utils';

export const Item = styled.li`
  ${ListReset}
`;
export const StyledLink = styled(Link)`
  position: relative;
`;

export const ImageHolder = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    height: 250px;

    ${breakpoint.tablet`
        400px;
    `}
  }
`;

export const Prices = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.medium};
  left: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontsize.small};
  color: ${({ theme }) => theme.palette.white};

  p {
    white-space: pre;
    margin-bottom: 0;
  }
`;

export const WineMaker = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.palette.primary};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.palette.white};
  width: 100px;
  margin-top: -50px;
`;
