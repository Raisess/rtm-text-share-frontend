import React from 'react';
import styled from 'styled-components';

import { TopBar } from '../components/TopBar';
import { Input, SubmitFormButton } from '../components/FormItems';

const Container: any = styled.div`

`;

export default function MainPage() {
	return (
		<div>
			<TopBar />
			<div className='page'>
				<Container>
					<form>
						<Input id='username' type_='text' placeholder='Your username' />
						<SubmitFormButton id='submitUsername' value='Submit' />
					</form>
				</Container>
				<h1>Main Page</h1>
			</div>
		</div>
	);
}

