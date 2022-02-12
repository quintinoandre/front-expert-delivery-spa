import Image from 'next/image';
import React from 'react';

import { IconOptions } from '../icon-family';
import Styles from './styles.module.css';

function UserProfile() {
	return (
		<div className={Styles.userProfile}>
			<div>
				<Image src="/user-avatar.png" height={48} width={48} alt="User" />
			</div>
			<div className={Styles.userData}>
				<h3>Mark Clarke</h3>
				<p>markclarke@gmail.com</p>
			</div>
			<div className={Styles.button}>
				<IconOptions color="black" />
			</div>
		</div>
	);
}

export { UserProfile };
