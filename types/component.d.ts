/* eslint-disable no-unused-vars */

declare module Componnet {
	/** 按钮类型声明 */
	type Button = {
		children?: string;
		type?: 'primary' | 'danger' | 'warning' | 'info' | 'success';
		size?: 'large' | 'middle' | 'small';
		disabled?: boolean;
		shape?: 'default' | 'circle' | 'round';
		loading?: boolean;
		onClick?: () => void;
	};
}

export default Componnet;
