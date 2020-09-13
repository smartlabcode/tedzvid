import reactStringReplace from 'react-string-replace';

export default function myReactStringReplace(str, regex, replacer) {
	if (Array.isArray(regex)) regex = new RegExp(`(${regex.join('|')})`, 'gi');
	return reactStringReplace(str, regex, replacer);
}
