/**
 * @Description: sass 模块化类型定义
 * @Author: QJL
 * @Date: 2023-03-19 16:36
 * @LastEdit: QJL
 * @LastEditTime: 2023-03-19 19:15
 */

declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.sass' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}
