import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { ReactDOM } from 'react';
import './Modal.scss';

const Modal = ({
	children,
	handleOnClose,
	isOpen,
	shoulbBeCloseOnOutsideClick,
}) => {
	console.log(children);
	const modalRef = useRef(null);
	const previousActiveElement = useRef(null);
	useEffect(() => {
		if (!modalRef.current) {
			return;
		}
		const { current: modal } = modalRef;

		if (isOpen) {
			previousActiveElement.current = document.activeElement;
			//showModal funkcja html
			modal.showModal();
		} else if (previousActiveElement.current) {
			//close() funkcja html
			modal.close();
			previousActiveElement.current.focus();
		}
	}, [isOpen]);
	useEffect(() => {
		const { current: modal } = modalRef;
		//reakcja na escape key
		const handleCancel = (e) => {
			e.preventDefault();
			handleOnClose();
		};
		modal.addEventListener('cancel', handleCancel);
		return () => {
			modal.removeEventListener('cancel', handleCancel);
		};
	}, [handleOnClose]);
	const handleOutsideClick = ({ target }) => {
		const { current } = modalRef;
		if (shoulbBeCloseOnOutsideClick && target === current) {
			//funkcja HTML do zamykania dialogu
			handleOnClose();
		}
	};
	return ReactDOM.createPortal(
		<dialog className='modal ' ref={modalRef} onClick={handleOutsideClick}>
			{children}
		</dialog>,
		document.body
	);
};

export default Modal;
