import type { FC } from 'react';

import type Author from '../types/author';
import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import PostTitle from './post-title';

interface Props {
	title: string;
	coverImage: string;
	date: string;
	author: Author;
}

const PostHeader: FC<Props> = ({ title, coverImage, date, author }) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="hidden md:block md:mb-12">
				<Avatar name={author.name} picture={author.picture} />
			</div>
			<div className="mb-8 md:mb-16 sm:mx-0">
				<CoverImage title={title} src={coverImage} />
			</div>
			<div className="max-w-2xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar name={author.name} picture={author.picture} />
				</div>
				<div className="mb-6 text-lg">
					<DateFormatter dateString={date} />
				</div>
			</div>
		</>
	);
};

export default PostHeader;
