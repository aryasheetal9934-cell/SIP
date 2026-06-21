const products=[
    {name:"laptop",category:"electronics"},
    {name:"phone",category:"electronics"},
    {name:"shirt",category;"clothing"}
];
const q13=products.reduce(function(group,p){
    if(!group[product.category]){
        group[product.category]=[];

    }
    group[product.category].push(product.name);
    rerturn group;
},{});
console.log(q13);