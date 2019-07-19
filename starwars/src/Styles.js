import styled from 'styled-components';

const colors = {
	grey : '#242424'
};

export const StyledH2 = styled.h2`
	margin-top: 0;
	padding-top: 25px;
	//color: ${colors.grey};
	color: ${(props) => props.color};
	background-color: linear-gradient(${colors.grey}, #ffffff);
`;

export const CardStyle = styled.div`
	background-color: white;
	height: auto;
`;

export const CardDisplay = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	width: 400px;
	background-color: white;
	margin: 15px;
	border: 1px solid black;
	border-radius: 10px;
`;
