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
};
function outputMatrix(output) {
    divOutput.innerHTML = `
    <h3>Output Matrix</h3>
    <p>${JSON.stringify(output)}</p>
    <h3>translation</h3>
    <p>in ascii code: <a href='https://theasciicode.com.ar/'>theasciicode</a></p>
    `
    Table(output)
};
function Table(arrMatrix) {
    let table = [];
    for (let i = 0; i < arrMatrix.length; i++) {
        arrMatrix[i].forEach(e => {
            let out = [];
            out.push(String.fromCharCode(e), e);
            if(table.find(el => el[1]=== e) === undefined){
                table.push(out)
            }
        });        
    }
    divOutput.innerHTML += `<h3>Values in linear form</h3>
                            <p>${JSON.stringify(table)}</p>`
    divOutput.innerHTML += '<table class="tableCode"><caption><h3>Table of values</h3></caption><tbody id="valuesTable"></tbody></table>'
    let Tablet = document.getElementById('valuesTable');
    Tablet.innerHTML += '<tr><th scope="row">Character</th></tr>'
    for (let i = 0; i < table.length; i++) {
        let tr = Tablet.lastChild
        tr.innerHTML += `<td>${table[i][0]}</td>`
    }
    Tablet.innerHTML += '<tr><th scope="row">Code</th></tr>'
    for (let i = 0; i < table.length; i++) {
        let tr = Tablet.lastChild
        tr.innerHTML += `<td>${table[i][1]}</td>`
    }
};
function matrixForm(arr, order) {
    divOutput.innerHTML += '<table><caption>Matrix Form</caption><tbody id="matrixForm"></tbody></table>'
    let Table = document.getElementById('matrixForm')
    for (let i = 0; i < arr.length; i++) {
        Table.innerHTML += '<tr></tr>'
        let tr = Table.lastChild
            for (let ind = 0; ind < order; ind++) {
                tr.innerHTML += `<td>${arr[i][ind]}</td>`
            }
    }
};

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
        outputMatrix(output);
        matrixForm(output,order)
    }
    if(type.value === '2') {
        //create table
        let outputArr = [];
        divOutput.innerHTML = '';
        let arrNoRepeat = textArr.filter((item,index)=>{
            return textArr.indexOf(item) === index;
        })
        arrNoRepeat.forEach(e => {
            if (e === ' ') {
                divOutput.innerHTML += `<label for="${e}">space</label><input type="number" class="numberInput" name="${e}">`
            }else{
                divOutput.innerHTML += `<label for="${e}">${e}</label><input type="number" class="numberInput" name="${e}">`
            }
        });
    }
    e.preventDefault();
});
document.getElementById('createTable1').addEventListener('click', e=>{

})