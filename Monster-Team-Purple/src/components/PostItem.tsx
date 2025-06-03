import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Post } from '../types/PostType';

import { useUserContext } from '../context/UserCOntext';
import { usePostContext } from '../context/PostContexts';
interface PostItemProps {
	post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
	const { currentUser } = useUserContext()
	const { toggleLike } = usePostContext()

	const hasLiked = currentUser ? post.likedBy.includes(currentUser.name) : false;
	const heartIcon = hasLiked ? '❤️' : '🩶';
	return (
		<View style={styles.postContainer}>

			<View style={styles.header}>
				<View style={styles.user}>
					<View style={styles.avatarPlaceholder}>
						<Text style={styles.avatarText}>{post.name[0].toUpperCase()}</Text>
					</View>
					<View style={{ maxWidth: '60%' }}>
						<Text style={styles.name}>{post.name}</Text>
					</View>
				</View>

				<Text style={styles.dateText}>{post.date}</Text>
			</View>


			<Text style={styles.content}>{post.content}</Text>

			<View style={styles.footer}>
				<TouchableOpacity
					onPress={() => {
						if (currentUser) {
							toggleLike(post.id, currentUser.name);
						}
					}}
					style={styles.button}
				>
					<Text style={styles.buttonText}>{heartIcon} {post.likedBy.length}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>💬 Comment</Text>
				</TouchableOpacity>
			</View>
			{post.likedBy.length > 0 && (
				<Text style={styles.likedByText}>
					{post.likedBy.slice(0, 3).join(', ')} <Text> {post.likedBy.length > 3 ? `+${post.likedBy.length - 3} more` : ""} </Text>
				</Text>
			)}

		</View>
	);
};

const styles = StyleSheet.create({
	dateText: {
		fontSize: 12,
		color: '#888',
		backgroundColor: '#f0f0f0',
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	likedByText: {
		color: '#666',
		fontSize: 12,
		marginTop: 4,
	},
	postContainer: {
		padding: 16,
		marginVertical: 8,
		marginHorizontal: 12,
		backgroundColor: '#fff',
		borderRadius: 12,
		elevation: 2,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 4,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 12,
	},
	user: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatarPlaceholder: {
		backgroundColor: '#ccc',
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
	},
	avatarText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	authorId: {
		fontSize: 12,
		color: '#888',
	},
	content: {
		fontSize: 15,
		color: '#333',
		marginBottom: 16,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		paddingVertical: 6,
		paddingHorizontal: 12,
		backgroundColor: '#f2f2f2',
		borderRadius: 20,
	},
	buttonText: {
		fontSize: 14,
		color: '#555',
	},
});

export default PostItem;
