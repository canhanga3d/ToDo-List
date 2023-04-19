import { format, formatDistanceToNow } from "date-fns";
import pt from "date-fns/locale/pt";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}
interface Content {
	type: "paragraph" | "link" | "linkInline";
	content: string;
	contentOne: string;
	contentTwo: string;
	contentTree: string;
}
export interface PostType {
	id: number;
	author: Author;
	publishedAt: Date;
	content: Content[];
}
interface PostProps {
	Post: PostType;
}
export function Post({ Post }: PostProps) {
	const publishedAtFormatted = format(
		Post.publishedAt,
		"d 'de' LLLL 'ás' HH:mm'h'",
		{ locale: pt }
	);

	const publishedAtRelativeToNow = formatDistanceToNow(Post.publishedAt, {
		locale: pt,
		addSuffix: true,
	});

	const [newCommentText, setNewCommentText] = useState("");
	const [comments, setComments] = useState([""]);

	function handleCreateNewComment(event: FormEvent) {
		event.preventDefault();
		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.preventDefault();
		event.target.setCustomValidity("");
		setNewCommentText(event.target.value);
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeleteOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});
		setComments(commentsWithoutDeleteOne);
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity(
			"Não podes adicionar um comentário em braco"
		);
	}
	const isValidComment = newCommentText.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={Post.author.avatarUrl} alt="" />

					<div className={styles.authorInfo}>
						<strong>{Post.author.name}</strong>
						<span>{Post.author.role}</span>
					</div>
				</div>

				<div>
					<time
						title={publishedAtFormatted}
						dateTime={Post.publishedAt.toISOString()}>
						{publishedAtRelativeToNow}
					</time>
				</div>
			</header>

			<div className={styles.content}>
				{Post.content.map((line) => {
					if (line.type === "paragraph") {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === "link") {
						return (
							<p key={line.content}>
								<a href="#">{line.content}</a>
							</p>
						);
					} else if (line.type === "linkInline") {
						return (
							<p key={line.contentOne}>
								<a href="#">{line.contentOne}</a>{" "}
								<a href="#">{line.contentTwo}</a>{" "}
								<a href="#">{line.contentTree}</a>
							</p>
						);
					}
				})}
			</div>
			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu comentário</strong>
				<textarea
					placeholder="Deixe um comentário"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>
				<footer>
					<button type="submit" disabled={isValidComment}>
						Comentar
					</button>
					<div className={styles.commentList}></div>
				</footer>
			</form>
			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
