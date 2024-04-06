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
const IsAPossibleProduct = (A,B) => {
    return(A[A.length-1].length === B.length)
}
const Output = (string) => divOutput.innerHTML=`<p>${string}</p>`;
function Table(params) {
    
}
form.addEventListener('submit', e=> {
    const arrA = JSON.parse(form.elements['arrA'].value);
    const arrB = JSON.parse(form.elements['arrB'].value);
    const type = form.elements['Type'];
    const order = Number(form.elements['order'].value);
    if (type.value === '1') {
        let transformArrText;
        if(IsAPossibleProduct(arrA, arrB)){
            //get matrix 
            let matrix = MatrixProd(arrA,arrB);
            //transform to string
            transformArrText = matrix.map(e=>{
                let output = '';
                e.forEach(char => {
                    output+= String.fromCharCode(char);
                });
                return output
            }); 
        }
        Output(transformArrText.join(''));
    }
    e.preventDefault();
})