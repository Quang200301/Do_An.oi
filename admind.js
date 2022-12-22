var Productss = [{
    id: 'SP1',
    name: 'Áo dài thêu họa tiết 111111',
    img: 'https://salt.tikicdn.com/ts/product/53/0f/18/553912e078329fe8d594baa57b0770ba.jpg',
    price: 122000,
},
{
    id: 'SP2',
    name: 'Áo dài truyền thống',
    img: 'https://cf.shopee.vn/file/034260667bf5d8fcf1eed88d9a7ba538',
    price: 400000,
},
{
    id: 'SP3',
    name: 'Áo dài',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGAdTLLgw33oLV6a8nDm8wYbRrz9WG-2qHQ&usqp=CAU',
    price: 350000,
},
{
    id: 'SP4',
    name: 'Áo dài hiện đại',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGAdTLLgw33oLV6a8nDm8wYbRrz9WG-2qHQ&usqp=CAU',
    price: 564000,
},
{
    id: 'SP5',
    name: 'Áo dài hiện đại',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGAdTLLgw33oLV6a8nDm8wYbRrz9WG-2qHQ&usqp=CAU',
    price: 654000,
},
{
    id: 'SP6',
    name: 'Áo dài hiện đại',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGAdTLLgw33oLV6a8nDm8wYbRrz9WG-2qHQ&usqp=CAU',
    price: 123000,
},
{
    id: 'SP7',
    name: 'Áo dài hiện đại',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGAdTLLgw33oLV6a8nDm8wYbRrz9WG-2qHQ&usqp=CAU',
    price: 345000,
},
{
    id: 'SP8',
    name: 'Áo dài hiện đại',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGAdTLLgw33oLV6a8nDm8wYbRrz9WG-2qHQ&usqp=CAU',
    price: 258000,
},
];


// Đẩy mảng product vào local storage
function Save() {
    localStorage.setItem('listProduct', JSON.stringify(Productss));
}
// Lấy sản phẩm từ local storage
function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}
// Xuất sản phẩm ra html
if (localStorage.getItem('listProduct') != null) {
load();
}
var listLocal = function() {
var listproduct = '';
for (var i in product) {
var data = JSON.parse(JSON.stringify(product[i]));

var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
    listproduct += '<div class="card product p-2" styte="width:auto">';
    listproduct += '<img class="card-img-top" src="' + data.img + '" alt="...">';
    listproduct += '<div class="card-title product-title text-center h5" >' +
    data.name + '</div>';
    listproduct += '<div class="price text-center h6">' + data.price + '₫</div>';
    listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + " data-name=" + data.name +" data-img=" +data.img +" data-price=" +data.price + 'onclick="tks()">';
    listproduct += '<a>';
    listproduct += '<i class="fas fa-cart-plus"></i>';
    listproduct += '</a>';
    listproduct += '</span>';
    listproduct += '</div>';
    listproduct += '</div>';

document.getElementById('banchay').innerHTML += listproduct;
}

Save();
};

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
varaddProduct =function(){
    var product={
        id: 'Sp' +parent(product.length +1),
        name:document.getElementById('name').value,
        img:document.getElementById('img').value,
        price:document.getElementById('price').value,
    };
    product.push(product);
    localStorage.setItem('listproduct',JSON.stringify(product))
    window.location.reload();
}
