import React from 'react';
import styled from 'styled-components';

const ButtonStyle: any = styled.button`
	border: none;
	background-color: #b51b32;
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
		background-color: #1bbf83;
		color: black;
	}
`;

interface IButtonProps {
	text:        string;
	redirectTo?: string;
}

export function Button(props: IButtonProps) {
	const { redirectTo, text } = props;

	return (
		<ButtonStyle onClick={() => window.location.href = redirectTo ? redirectTo : '/'}>
			{text}
		</ButtonStyle>
	);
}

