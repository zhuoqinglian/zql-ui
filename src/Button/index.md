---
title: button
order: 1
nav:
  title: component
---

| 属性     | 说明         | 类型                                            | 默认值  |
| :------- | ------------ | ----------------------------------------------- | ------- |
| type     | 按钮类型     | primary \| success \| warning \| danger \| info | primary |
| size     | 按钮大小     | large \| middle \| small                        | middle  |
| onClick  | 点击按钮事件 | (event) => void                                 | -       |
| shape    | 设置按钮形状 | default \| circle \| round                      | default |
| loading  | 加载状态     | boolean                                         | false   |
| disabled | 是否禁用     | boolean                                         | false   |

```tsx
import { Button } from 'zql-ui';

const add = () => {
	console.log(321);
};

export default () => (
	<Button type="success" size="middle" onClick={add} shape="default" loading={true} disabled={false}>
		点击事件
	</Button>
);
```

<!-- <code src='./index.tsx'></code> -->
<!-- <embed src="../Foo/index.md"></embed> -->
