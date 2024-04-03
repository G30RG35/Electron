import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className="fixed top-0 w-full bg-[var(--color-white)] min-h-[var(--header-height)] py-2 border-b border-gray-200 shadow">
			<div className="flex flex-row justify-between w-[var(--layout-width)] max-w-[var(--layout-max-width)] m-auto items-center gap-4">

				<div className="font-semibold text-base text-gray-700 cursor-pointer select-none p-2 flex items-center gap-2">
					<i className="bi bi-journal-code font-extrabold text-2xl"></i> Error logger
				</div>

				<div className="flex gap-2 cursor-pointer items-center p-2">
					<span>
						<i className="bi bi-person-circle text-3xl text-gray-700"></i>
					</span>
				</div>

			</div>
		</header>
	)
}
