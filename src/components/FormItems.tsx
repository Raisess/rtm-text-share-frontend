import React from 'react';
import styled from 'styled-components';

const InputStyle: any = styled.input`
	border: 1px solid;
	border-radius: 5px;
	width: 300px;
	padding: 10px;
	font-size: 18px;
	font-weight: bold;
`;

const SubmitFormButtonStyle: any = styled.input`
	border: none;
	border-radius: 5px;
	width: 250px;
	padding: 10px;
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;
	background-color: #b51b32;
	color: #fff;

	&:hover {
		transition: 0.2s;
		background-color: #1b86bf;
		color: #fff;
	}
`;

interface IInputProps {
	id:           string;
	type_?:       string;
	value?:       string;
	placeholder?: string;
}

export function Input(props: IInputProps) {
	const { id, type_, placeholder } = props;

	return <InputStyle id={id} type={type_} placeholder={placeholder ? placeholder : ''} />
}

export function SubmitFormButton(props: IInputProps) {
	const { id, value } = props;

	return <SubmitFormButtonStyle type='submit' id={id} value={value} />
}

