const form = document.getElementById('form1');
const divOutput = document.querySelector('.output');
const MatrixProd = (A, B) =>
  A.map((row, i) =>
    B[0].map((_, j) =>
      row.reduce((acc, _, n) =>
        acc + A[i][n] * B[n][j], 0
      )
    )
);
function Matrix(A,B){
    let output = MatrixProd(A,B).map(e=>{
      let out=[]
      e.forEach(el=>{
        out.push(Math.floor(el+0.1))
      })
      return out
    })
    return output
  }

const IsAPossibleProduct = (A,B) => (A[A.length-1].length === B.length);

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
const OutputMessage = (string) => divOutput.innerHTML=`
<h3>Output Message</h3>
<p>${string}</p>`;
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
}
form.addEventListener('submit', e=> {
    e.preventDefault();
    const arrA = eval(form.elements['arrA'].value);
    const arrB = eval(form.elements['arrB'].value);
    const type = form.elements['Type'];
    const order = Number(form.elements['order'].value);
    if (type.value === '1') {
        let transformArrText;
        let matrix;
        if(IsAPossibleProduct(arrA, arrB)){
            //get matrix 
            matrix = Matrix(arrA,arrB);
            //transform to string
            transformArrText = matrix.map(e=>{
                let output = '';
                e.forEach(char => {
                    output+= String.fromCharCode(char);
                });
                return output
            }); 
        }else{
            transformArrText = [['is'],[' '],['not'],[' '],['a'],[' '],['possible'],[' '],['product']]
        }
        OutputMessage(transformArrText.join(''));
        matrixForm(matrix, order);
        Table(matrix)
    }
})