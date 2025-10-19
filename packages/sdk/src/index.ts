const response = fetch('https://api.example.com/data');

export async function getData() {
	const res = await response;
	return res.json();
}