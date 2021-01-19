import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.ScrollView.attrs({
    horizontal: true,

})`
padding:  8px 0 24px;
`;

export const LiveContainer = styled.TouchableOpacity`
    margin-right: 10px;
`;

export const LiveImage = styled.Image`
width: 280px;
height: 130px;
`;

export const CatagoryName = styled.Text`
    margin-top: 5px;
    max-width: 280px;
    color: ${colors.black};
    font-size: 13.5px;
    font-family: roboto_700;
`;

export const CatagoryStatus = styled.View`
flex-direction: row;
align-items: center;

`;

export const RedCircle = styled.View`
background: ${colors.red};
width: 9px;
height: 9px;
border-radius: 4.5px;


`;

export const Info = styled.Text`
margin-left: 4px;
padding-bottom: 1px;
color: ${colors.gray};
font-family: roboto_500;

`;

