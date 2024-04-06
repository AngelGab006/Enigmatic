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
function Table(params) {
    
}
form.addEventListener('submit', e=> {
    e.preventDefault();
    const arrA = eval(form.elements['arrA'].value);
    const arrB = eval(form.elements['arrB'].value);
    const type = form.elements['Type'];
    const order = Number(form.elements['order'].value);
    if (type.value === '1') {
        let transformArrText;
        if(IsAPossibleProduct(arrA, arrB)){
            //get matrix 
            let matrix = Matrix(arrA,arrB);
            //transform to string
            matrixForm(matrix, order);
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
    }
})