import styled from 'styled-components';
import { Button } from '../Button';

interface SpecialityItemProps {
  selected: boolean;
}

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 165px);
  gap: 20px;

  margin-top: 30px;
`;

export const SpecialityItem = styled.div<SpecialityItemProps>`
  width: 172px;
  height: 32px;
  border-radius: 50px;
  padding: 8px 12px 8px 4px;
  background-color: ${props =>
    props.selected ? props.theme.colors.blue[600] : '#CBCBCB'};
  color: ${props =>
    props.selected ? props.theme.colors.white : props.theme.colors.gray[700]};
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const StyledCount = styled.span`
  font-family: Radio Canada;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: right;
  width: 100%;
  color: green;
  margin-top: 15px;
`;

export const StyledSpan = styled.span`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

export const StyledTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 25px;

  .last {
    color: ${props => props.theme.colors.blue[600]};
  }
`;

export const StyledImportant = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
  color: ${props => props.theme.colors.black[200]};

  span {
    color: ${props => props.theme.colors.blue[600]};
  }
`;

export const StyledHR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.gray[700]};
  margin-top: 2.25rem;
`;

export const NextButton = styled(Button)`
  margin-top: 15px;
  align-self: flex-end;
`;
