import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, newCases, total }) {
	return (
		<Card className="infoBox">
			<CardContent>
				<Typography className="infoBox__title" color="textSecondary">
					{title}
				</Typography>
				<h2 className="infoBox__cases">{newCases}</h2>
				<Typography className="infoBox__total" color="textSecondary">
					{total}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default InfoBox;
