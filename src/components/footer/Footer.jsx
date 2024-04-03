import styles from './Footer.module.css';
import CompliseLogo from '../../assets/complise-logo.png';

export const Footer = () => {
	return (
		<footer className="mt-auto flex justify-center py-2 border-t border-gray-200 dark:bg-gray-900 shadow">
			<span className="flex items-center gap-2">Powered by <img src={CompliseLogo} width="48px" /></span>
		</footer>
	)
}