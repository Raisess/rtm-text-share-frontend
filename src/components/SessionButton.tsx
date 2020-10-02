import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	border: none;
	background-color: red;
	color: #fff;
	height: 40px;
	font-size: 20px;
	font-weight: bold;
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		transition: 0.2s;
		background-color: #00ff00;
		color: black;
	}
`;

interface ISessionButton {
	text:        string;
	redirectTo?: string;
}

export function SessionButton(props: ISessionButton) {
	return (
		<Button onClick={() => window.location.href = props.redirectTo ? props.redirectTo : '/'}>
			{props.text}
		</Button>
	);
}

