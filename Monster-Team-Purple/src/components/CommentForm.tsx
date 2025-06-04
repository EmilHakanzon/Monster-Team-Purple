
import React, { useState } from 'react';
import {
	View,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Text,
	Alert,
} from 'react-native';

import { useUserContext } from '../context/UserCOntext';
import { PostComment } from '../types/PostComment';
import { usePostComments } from '../context/CommentsContexts';
interface CommentFormProps {
	postId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
	const [content, setContent] = useState('');
	const { currentUser } = useUserContext();
	const { push } = usePostComments();

	const handleSubmit = () => {
		if (!currentUser) return;

		if (!content.trim()) {
			Alert.alert('Please enter a comment before submitting.');
			return;
		}

		const newComment: PostComment = {
			id: Date.now().toString(),
			post: postId,
			author: currentUser.id,
			content: content.trim(),
			likes: [],
			createdAt: Date.now(),
		};

		push(newComment);
		setContent('');
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Write a comment..."
					placeholderTextColor="#65676B"
					multiline
					value={content}
					onChangeText={setContent}
				/>
				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.buttonText}>Post</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 12,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
	},
	avatar: {
		width: 36,
		height: 36,
		borderRadius: 18,
		backgroundColor: '#ccc',
		marginRight: 8,
	},
	inputContainer: {
		flex: 1,
		backgroundColor: '#f0f2f5',
		borderRadius: 20,
		paddingHorizontal: 12,
		paddingVertical: 6,
	},
	input: {
		fontSize: 16,
		color: '#050505',
		maxHeight: 100,
	},
	button: {
		alignSelf: 'flex-end',
		backgroundColor: '#1877f2',
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 16,
		marginTop: 6,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export default CommentForm;
