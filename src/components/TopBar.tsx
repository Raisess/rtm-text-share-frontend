import React from 'react';
import styled from 'styled-components';

import { SessionButton } from './SessionButton';

const TopBarDiv = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 65px;
	background-color: #111;
	box-shadow: 0 0 3px #222;
`;

const Wrap = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 13px;
	display: flex;
	flex-direction: row;
`;

const Title = styled.h1`
	cursor: pointer;
	width: 220px;
`;

const Options = styled.div`
	padding-top: 10px;
	margin-left: 30px;
	display: flex;
	flex-direction: row;
`;

const Option = styled.h3`
	cursor: pointer;
	margin-left: 20px;
	&:hover {
		text-decoration: underline;
	}
`;

const ButtonWrap = styled.div`
	position: fixed;
	right: 20px;
	display: grid;
	grid-auto-flow: column;
	grid-gap: 20px;
`;

export function TopBar() {
	return (
		<TopBarDiv>
			<Wrap>
				<Title onClick={() => window.location.href = '/'}>
					RTM Text Share
				</Title>
				<Options>
					<Option onClick={() => window.location.href = '/docs'}>
						API - Documentation
					</Option>
					<Option onClick={() => window.location.href = '/contributors'}>
						Contributors
					</Option>
					<Option onClick={() => window.location.href = '/about'}>
						About the project
					</Option>
					<Option onClick={() => window.open('https://github.com/Raisess/rtm-text-share-backend')}>
						GitHub
					</Option>
				</Options>
				<ButtonWrap>
					<SessionButton text="Create a session" />
					<SessionButton text="Join a session" />
				</ButtonWrap>
			</Wrap>
		</TopBarDiv>
	);
}

