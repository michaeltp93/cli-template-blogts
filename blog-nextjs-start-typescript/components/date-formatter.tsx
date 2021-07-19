import { format, parseISO } from 'date-fns';
import type { FC, ReactElement } from 'react';

interface Props {
	dateString: string;
}

const DateFormatter: FC<Props> = ({ dateString }): ReactElement => {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateFormatter;
