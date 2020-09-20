import { describe, it } from 'mocha'
import { expect } from 'chai'

describe('Options tests', () => { // the tests container
  it('checking default options', () => { // the single test
    const options = 'stuff' // this will be your class

    expect(options).to.equal('stuff') // As I said 3 lines above
  })
})
