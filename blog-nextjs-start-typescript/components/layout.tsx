import type { FC } from 'react';

import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

interface Props {
	preview?: boolean;
	children: React.ReactNode;
}

const Layout: FC<Props> = ({ preview, children }) => {
	return (
		<>
			<Meta />
			<div className="min-h-screen">
				<Alert preview={preview} />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
