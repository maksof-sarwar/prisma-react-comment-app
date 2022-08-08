import prisma from './dbInstance';

async function seed() {
	await prisma.post.deleteMany();
	await prisma.user.deleteMany();

	const sarwar = await prisma.user.create({
		data: {
			email: 'rrsarwar109@gmail.com',
			name: 'Sarwar',
			password: '123',
		},
	});
	const hamza = await prisma.user.create({
		data: {
			name: 'Hamza',
			email: 'hamza.nh.32.mm@gmail.com',
			password: '123',
		},
	});

	const post1 = await prisma.post.create({
		data: {
			title: '1st Post',
			body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nesciunt molestias aliquam voluptates veritatis illum tempora sed velit repellat accusantium, non quaerat, exercitationem aspernatur optio porro deserunt corporis. At, officia?',
			userId: sarwar.id,
		},
	});
	const post2 = await prisma.post.create({
		data: {
			title: '2nd Post',
			body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nesciunt molestias aliquam voluptates veritatis illum tempora sed velit repellat accusantium, non quaerat, exercitationem aspernatur optio porro deserunt corporis. At, officia?',
			userId: sarwar.id,
		},
	});
	const post3 = await prisma.post.create({
		data: {
			title: '3rd Post',
			body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nesciunt molestias aliquam voluptates veritatis illum tempora sed velit repellat accusantium, non quaerat, exercitationem aspernatur optio porro deserunt corporis. At, officia?',
			userId: hamza.id,
		},
	});
	const post4 = await prisma.post.create({
		data: {
			title: '4th Post',
			body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nesciunt molestias aliquam voluptates veritatis illum tempora sed velit repellat accusantium, non quaerat, exercitationem aspernatur optio porro deserunt corporis. At, officia?',
			userId: hamza.id,
		},
	});

	const comment1 = await prisma.comment.create({
		data: {
			message: '1st post comment',
			userId: hamza.id,
			postId: post1.id,
		},
	});
	const comment2 = await prisma.comment.create({
		data: {
			parentId: comment1.id,
			message: '1st post nested comment',
			userId: hamza.id,
			postId: post1.id,
		},
	});
	const comment3 = await prisma.comment.create({
		data: {
			message: '3rd post comment',
			userId: sarwar.id,
			postId: post3.id,
		},
	});
	const like1 = await prisma.like.create({
		data: {
			userId: sarwar.id,
			postId: post3.id,
		},
	});
	const like2 = await prisma.like.create({
		data: {
			userId: sarwar.id,
			commentId: comment3.id,
		},
	});
}

seed()
	.then(() => {
		console.log('successfully seed');
	})
	.catch((err) => console.log(err.message));
