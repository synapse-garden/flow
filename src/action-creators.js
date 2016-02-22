export function refreshTime( ) {
    const now = new Date()

    function fillDigits(num, digits){
        return{ ('0000' + num ).slice(-digits) }
    }

    var h = fillDigits(now.getHours(), 2)
    var m = fillDigits(now.getMinutes(), 2)
    var s = fillDigits(now.getSeconds(), 2)
    var ms = fillDigits(now.getMilliseconds(), 3)

    return{
        type: 'SET_APPTIME',
        time: h + ":" + m + ":" + s + ":" + ms
    }
}

export function addClick( ) {
    return{
        type: 'ADD_CLICK'
    }
}
