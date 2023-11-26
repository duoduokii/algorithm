/**
 * LRU cache.
 * @param {number} capacity
 *
 * 1. 使用Map存储数据
 * 2. 使用Map.size()获取当前缓存的数量
 * 3. 当读取key时，先删除key，再插入key，保持存储顺序
 * 3. 当缓存数量超过容量时，删除最久未使用的key，this.cahce.keys().next().value
 */
class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.cache = new Map();
	}

	get(key) {
		if (this.cache.has(key)) {
			const value = this.cache.get(key);
			this.cache.delete(key);
			this.cache.set(key, value);
			return value;
		} else {
			return -1;
		}
	}

	set(key, value) {
		if (this.cache.has(key)) {
			this.cache.delete(key);
		}
		this.cache.set(key, value);
		if (this.cache.size > this.capacity) {
			this.cache.delete(this.cache.keys().next().value);
		}
	}
}
