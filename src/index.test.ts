import * as index from "./index"
// @ponicode
describe("index.generate", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.generate()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.stringToBinary", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.stringToBinary("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.stringToBinary("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.stringToBinary("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.stringToBinary("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.stringToBinary("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
