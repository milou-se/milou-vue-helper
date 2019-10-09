[@milou.se/vue-helper](../README.md) › [Globals](../globals.md) › ["helpers/scrolling/scrolling"](../modules/_helpers_scrolling_scrolling_.md) › [Scrolling](_helpers_scrolling_scrolling_.scrolling.md)

# Class: Scrolling

## Hierarchy

* **Scrolling**

## Index

### Methods

* [Exist](_helpers_scrolling_scrolling_.scrolling.md#static-exist)
* [GoTo](_helpers_scrolling_scrolling_.scrolling.md#static-goto)
* [IsBottom](_helpers_scrolling_scrolling_.scrolling.md#static-isbottom)

## Methods

### `Static` Exist

▸ **Exist**(`el`: HTMLElement): *boolean*

*Defined in [helpers/scrolling/scrolling.ts:14](https://github.com/milou-se/milou-vue-helper/blob/ff1ebdd/src/helpers/scrolling/scrolling.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`el` | HTMLElement |

**Returns:** *boolean*

___

### `Static` GoTo

▸ **GoTo**(`element`: JQuery‹Element› | JQuery‹HTMLElement›, `onlyUp`: boolean, `speed`: number, `offset`: number, `scrollElement`: string): *void*

*Defined in [helpers/scrolling/scrolling.ts:18](https://github.com/milou-se/milou-vue-helper/blob/ff1ebdd/src/helpers/scrolling/scrolling.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | JQuery‹Element› &#124; JQuery‹HTMLElement› | - |
`onlyUp` | boolean | false |
`speed` | number | 300 |
`offset` | number | 50 |
`scrollElement` | string | "html, body" |

**Returns:** *void*

___

### `Static` IsBottom

▸ **IsBottom**(`e`: Event): *boolean*

*Defined in [helpers/scrolling/scrolling.ts:2](https://github.com/milou-se/milou-vue-helper/blob/ff1ebdd/src/helpers/scrolling/scrolling.ts#L2)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | Event |

**Returns:** *boolean*
