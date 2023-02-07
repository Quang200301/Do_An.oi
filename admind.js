
listLocal();
localStorage.clear();
var productAdmin = function(){
    var listproduct1 = '';
    for (var i in product){
        var data =JSON.parse(JSON.stringify(product[i]));
        var listproduct1 = '</tr>';
        listproduct1 +='<td>'+data.id+'</td>';
        listproduct1 +='<td>'+data.name+'</td>';
        listproduct1 +='<td><img src="../img/'+data.img+'"alt="" style=width:50px+</td>';
        listproduct1 +='<td>'+data.price+'</td>'
        // listproduct1=''
        listproduct1 +='<td><button onclick="updataproduct('+i+')"class="btn btn-outline-danger"data-tongle="modal"data-target="#updateprodct"><i class="fas fa cogs></i></button></td>';
        listproduct1 +='<td><button onclick="deleteProduct('+i+')"class=btn btn-outline-warning"><i class="fas fa-trash></i><button></td>';
        listproduct1 +='</tr>';
        document.getElementById('product-admin').innerHTML +=listproduct1;
    }
};
var addproduct =function(){
    var product={
        id: 'id' + parent(product.length +1),
        name:document.getElementById('Sp').value,
        img:document.getElementById('img').value,
        price:document.getElementById('price').value,
    };
    product.push(product);
    localStorage.setItem('listproduct',JSON.stringify(product))
    window.location.reload();
}
