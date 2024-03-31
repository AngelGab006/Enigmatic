const form = document.getElementById('form1')
const divOutput = document.querySelector('.output')
function orderMatrix(arr, order) {
    let iterations = arr.length / order;
    let orderIteration = order
    let iterationQuantity = 0;
    let output = [];
    for (let i = 0; i < iterations; i++) {
        let introduce = [];
        for (iterationQuantity; iterationQuantity < orderIteration; iterationQuantity++) {
            (arr[iterationQuantity]=== undefined)?introduce.push(0):introduce.push(arr[iterationQuantity]);
            
        }
        output.push(introduce);
        orderIteration = order + iterationQuantity;
    }
    return output
}

form.addEventListener('submit', e=> {
    const textarea = form.elements['text-to-translate'];
    const type = form.elements['Type'];
    const order = Number(form.elements['order'].value);
    let textArr = textarea.value.split('');
    if (type.value === '1') {
        //ascii code
        let transformTextArr = textArr.map(e=> e.charCodeAt(0))
        //to matrix order
        let output = orderMatrix(transformTextArr,order)
        divOutput.innerHTML = `
        <h3>Output Matrix</h3>
        <p>${JSON.stringify(output)}</p>
        <h3>translation</h3>
        <p>in ascii code: <a href='https://theasciicode.com.ar/'>theasciicode</a></p>
        `
    }
    event.preventDefault();
})