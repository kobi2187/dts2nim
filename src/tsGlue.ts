
let QTALKTOME = 2
let QTALKTOME2 = "OK"

function QADDONE(x:number) {
	return x + 1
}

class QDEK1 {
	ONE:number
	TWO:string

	FUNC(x:number) { return x + 2 }
}

class QDEK2 extends QDEK1 {
	THREE:number
	constructor(ok:string) {
		super()
	}
}

let QDEKZ = new QDEK2("3")

function QCONSOLELOG(s:string) {
	console.log(s)
}
