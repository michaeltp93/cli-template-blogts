import type { FC, ReactElement, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

const Container: FC<Props> = ({ children }): ReactElement => {
	return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
