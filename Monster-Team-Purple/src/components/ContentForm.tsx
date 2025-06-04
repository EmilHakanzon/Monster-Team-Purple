import React, { useState } from 'react';
import { Post } from '../types/PostType';
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Text,
	Alert,
} from 'react-native';
import { usePostContext } from '../context/PostContext';
import { useUserContext } from '../context/UserCOntext';

const ContentForm: React.FC = () => {
	const [content, setContent] = useState('');
	const { addPost } = usePostContext();
	const { currentUser } = useUserContext();

	const handlePost = () => {
		if (!currentUser) return

		if (!content.trim()) {
			Alert.alert('Please enter some content before posting.');
			return;
		}
		const formattedDate = new Date().toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		const newPost: Post = {
			id: Date.now().toString(),
			authorId: currentUser.id,
			name: currentUser.name,
			date: formattedDate,
			content: content.trim(),
			likedBy: [],
		};

		addPost(newPost)
		setContent('');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Create Post</Text>
			<TextInput
				style={styles.input}
				placeholder="What's on your mind?"
				multiline
				value={content}
				onChangeText={setContent}
			/>
			<Button title="Post" onPress={handlePost} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		backgroundColor: '#fff',
		width: '100%'
	},
	header: {
		fontSize: 18,
		marginBottom: 12,
		fontWeight: 'bold',
	},
	input: {
		height: 100,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 8,
		marginBottom: 12,
		textAlignVertical: 'top',
	},
});

export default ContentForm;
