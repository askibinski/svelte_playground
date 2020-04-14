import MyElement from './my-element.svelte';

const app = new MyElement({
	target: document.body,
	props: {
		title: 'Hello world!',
		body: 'Lorem ipsum.'
	}
});

export default app;