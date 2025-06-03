import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface Post {
	id: string;
	authorId: string;
	likedBy: string[];
	content: string;
	name: string;
}

interface PostItemProps {
	post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
	return (
		<View style={styles.postContainer}>
			<View style={styles.header}>
				<View style={styles.avatarPlaceholder}>
					<Text style={styles.avatarText}>{post.name[0].toUpperCase()}</Text>
				</View>
				<View>
					<Text style={styles.name}>{post.name}</Text>
					<Text style={styles.authorId}>@{post.authorId}</Text>
				</View>
			</View>

			<Text style={styles.content}>{post.content}</Text>

			<View style={styles.footer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>❤️ {post.likedBy.length}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>💬 Comment</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
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
		marginBottom: 12,
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
