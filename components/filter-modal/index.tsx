import { useFilter } from '../../stores';
import Styles from './styles.module.css';

function FilterModal() {
	const { isOpen } = useFilter((store) => store.state);
	const { toggleModal } = useFilter((store) => store);

	return (
		<>
			{isOpen && (
				<div className={Styles.modal}>
					<div className={Styles.content}>Content</div>
					<div
						className={Styles.overlay}
						onClick={(_event) => toggleModal()}
						role="button"
						tabIndex={0}
						aria-hidden="true"
					>
						Overlay
					</div>
				</div>
			)}
		</>
	);
}

export { FilterModal };
