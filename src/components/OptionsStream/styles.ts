import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
padding: 8px 0 24px;
`;

export const StreamContainer = styled.TouchableOpacity`
flex-direction: row;
flex: 1;

margin-bottom: 24px;
margin-right: 24px;

`;
export const StreamColum = styled.View`
margin-left: 11px;
margin-right: 11px;
justify-content: space-between;
flex: 1;
`;

export const StreamRow = styled.View`
height: 66px;
justify-content: space-between;
`;

export const StreamHeader = styled.View`
flex-direction: row;
align-items: center;
`;

export const StreamAvatar = styled.View`
width: 20px;
height: 20px;
border-radius: 10px;
background: ${colors.tag};
`;

export const StreamUserName = styled.Text`
color: ${colors.black};
margin-left: 5px;
font-family: roboto_700;
`;


export const StreamCategory = styled.Text`
color: ${colors.gray};
font-family: roboto_500;

`;

export const TagRow = styled.View`
margin-top: 8px;
flex-direction: row;
flex-wrap: wrap;
flex: 1;
`;

export const TagView = styled.TouchableOpacity`
background:  #7a00cc;
margin-top: 8px;
position: relative;
flex-direction: row;
padding: 2px 8px;
height: 36px;
width: 130px;
border-radius: 10px;
margin-right: auto ;
margin-bottom: auto;

`;

export const TagText = styled.Text`
color: ${colors.black};
font-family: roboto_500;
margin-right: auto;
font-size: 20px;

`;