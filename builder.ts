/**
 * Один из  способов отделить конструкцию объекта от его фактической реализации
 */
class RequestBuilder {
    private data?: object
    private method?: 'get' | 'post'
    private url?: string

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    setData(data: object): this {
        this.data = data
        return this
    }

    setURL(url: string): this {
        this.url = url
        return this
    }

    send() {
        console.log('send request')
    }
}

const request = new RequestBuilder

/**
 * Минусы, можно не соблюдать порядок вызова функций
 */
request.setURL('https://api.github.com/users/')
    .setMethod('get')
    .setData({ message: 'foo' })
    .send()
