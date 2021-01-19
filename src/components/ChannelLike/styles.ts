import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
padding: 8px 0 24px;
`;

export const ChannelContainer = styled.TouchableOpacity`
flex-direction: column;
flex: 1;

margin-bottom: 24px;
margin-right: 24px;

`;
export const ChannelColum = styled.View`
margin-left: 11px;
flex: 1;
`;

export const ChannelThumbnail = styled.Image`
width: 280px;
height: 160px;
`;

export const ChannelRow = styled.View`
height: 66px;
justify-content: space-between;
`;

export const ChannelHeader = styled.View`
flex-direction: row;
align-items: center;
`;

export const ChannelAvatar = styled.View`
width: 20px;
height: 20px;
border-radius: 10px;
background: ${colors.tag};
`;

export const ChannelUserName = styled.Text`
color: ${colors.black};
margin-left: 5px;
font-family: roboto_700;
`;

export const ChannelDescription = styled.Text`
color: ${colors.black};

`;

export const ChannelCategory = styled.Text`
color: ${colors.gray};
font-family: roboto_500;

`;

export const TagRow = styled.View`
margin-top: 8px;
flex-direction: row;
`;

export const TagView = styled.View`
background: ${colors.tag};
padding: 2px 8px;
border-radius: 10px;
margin-right: 5px ;

`;

export const TagText = styled.Text`
color: ${colors.black};
font-family: roboto_500;
font-size: 13px;

`;