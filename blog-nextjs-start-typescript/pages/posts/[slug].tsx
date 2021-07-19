import Container from 'components/container';
import Header from 'components/header';
import Layout from 'components/layout';
import PostBody from 'components/post-body';
import PostHeader from 'components/post-header';
import PostTitle from 'components/post-title';
import { getAllPosts, getPostBySlug } from 'lib/api';
import { CMS_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHml';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import type { PostType } from 'types/post';

type Props = {
	post: PostType;
	// morePosts: PostType[];
	preview?: boolean;
};

interface IAllPosts {
	props: {
		post: {
			content: string;
		};
	};
}

const Post = ({ post, preview }: Props): ReactElement => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article className="mb-32">
							<Head>
								<title>
									{post.title} | Next.js Blog Example with {CMS_NAME}
								</title>
								<meta property="og:image" content={post.ogImage.url} />
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
							/>
							<PostBody content={post.content} />
						</article>
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Post;

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params): Promise<IAllPosts> {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths(): Promise<{
	paths: Array<{ params: { slug: string } }>;
	fallback: boolean;
}> {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
