/**
 * @Description: Button 组件
 * @Author: QJL
 * @Date: 2023-03-19 16:36
 * @LastEdit:
 * @LastEditTime:
 */

import Componnet from '@/types/component';
import React from 'react';
import { ReactComponent as Loading } from '../icons/loading.svg';
import styles from './styles.module.scss';

const Button: React.FC<Componnet.Button> = props => {
	const defaultConfig = {
		type: 'primary',
		size: 'middle',
		children: '按钮',
		disabled: false,
		shape: 'default',
		loading: false,
		...props,
	};

	return (
		<React.Fragment>
			<button
				className={styles.button}
				data-type={defaultConfig.type}
				data-size={defaultConfig.size}
				data-disabled={defaultConfig.disabled}
				data-shape={defaultConfig.shape}
				disabled={defaultConfig.disabled}
				onClick={defaultConfig.onClick}
			>
				{defaultConfig.loading && <Loading className={styles.rotate} width={20} height={20} />}
				<span>{defaultConfig.children}</span>
			</button>
		</React.Fragment>
	);
};

export default Button;
