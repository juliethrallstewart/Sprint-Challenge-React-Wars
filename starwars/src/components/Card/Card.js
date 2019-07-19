import React from 'react';
import { Card } from 'semantic-ui-react';
import { StyledH2, CardStyle, CardDisplay } from '../../Styles.js';

export default function Character (props) {
	console.log(props);
	return (
		<CardDisplay className="photo-card">
			<CardStyle className="content-wrapper">
				<StyledH2 color="brown">{props.name}</StyledH2>
				<Card.Content>
					<p>Birth year: {props.birthyear}</p>
				</Card.Content>
			</CardStyle>
		</CardDisplay>
	);
}
