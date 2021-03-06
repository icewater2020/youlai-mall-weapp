import request from '@/utils/request'


/**
 * 获取商品库存
 */
export function getInventory(skuId) {
	return request({
		url: '/mall-pms/api.app/v1/inventories/' + skuId + '/inventory',
		method: 'get'
	})

}
