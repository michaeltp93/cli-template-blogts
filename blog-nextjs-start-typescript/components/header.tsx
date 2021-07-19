/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import type { ReactElement } from 'react';

const Header = (): ReactElement => {
	return (
		<h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
			<Link href="/">
				<a className="hover:underline">Blog</a>
			</Link>
			.
		</h2>
	);
};

export default Header;
