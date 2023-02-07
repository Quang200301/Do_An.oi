var goods=[
    {
        id:'01',
        name:'tao',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QmkGwmo2Bnu2Dg_-hfMsZiF_TIoIjYj2BQ&usqp=CAU',
        price:'20000',

    },
    {
        id:'01',
        name:'tao',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPpSoSl7IFFIivS1X0JhNE8JBsWs7VSnDYg&usqp=CAU',
        price:'20000',

    },
    {
        id:'01',
        name:'tao',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPpSoSl7IFFIivS1X0JhNE8JBsWs7VSnDYg&usqp=CAU',
        price:'20000',

    },
    {
        id:'01',
        name:'tao',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPpSoSl7IFFIivS1X0JhNE8JBsWs7VSnDYg&usqp=CAU',
        price:'20000',

    },
    {
        id:'01',
        name:'tao',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPpSoSl7IFFIivS1X0JhNE8JBsWs7VSnDYg&usqp=CAU',
        price:'20000',

    }


    
    
];
// day mang product vao localstore  save product.......................................
function save(){
    localStorage.setItem('listgoods',JSON.stringify(goods))
}
// lay san pham tu localstore................
function load(){
    goods=JSON.parse(localStorage.getItem('listgoods'));
}
//  Xuat san pham ra localstory
if (localStorage.getItem('listgoods')!=null){
    load();
}
var listlocal = function(){
    var listgoods='';
    for (var i in goods){
        var data=JSON.parse(JSON.stringify(goods[i]));
        var listgoods = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
            listgoods += '<div class="card product p-2" styte="width:auto">';
            listgoods += '<img class="card-img-top" src="' + data.img + '" alt="...">';
            listgoods += '<div class="card-title product-title text-center h5" >'+data.name + '</div>';
            listgoods += '<div class="price text-center h6">' + data.price + '₫</div>';
            listgoods += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + " data-name=" + data.name +" data-img=" +data.img +" data-price=" +data.price + 'onclick="tks()">';
            listgoods += '<a>';
            listgoods += '<i class="a"> Detell</i >';
            listgoods += '</a>';
            listgoods += '</span>';
            listgoods += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + " data-name=" + data.name +" data-img=" +data.img +" data-price=" +data.price + 'onclick="tks()">';
            listgoods += '<a>';
            listgoods += '<i class="fas fa-cart-plus"></i>';
            listgoods += '</a>';
            listgoods += '</span>';
            listgoods += '</div>';
            listgoods += '</div>';
        document.getElementById('demo').innerHTML += listgoods;
    }
    save();
};
listLocal();
localStorage.clear();