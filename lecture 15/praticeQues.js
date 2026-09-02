const students=[
    {
        name:"utkarsh",
        marks:[80,90,85]
    },
    {
        name:"yukta",
        marks:[95,92,98]

    },
    {
        name:"navneet",
        marks:[60,70,65]
    }
];

const q11=students2.map(s)=>{
    name:s.name;
    avg:studentss2.reduce(function(total,s){
        return total+s.marks;
    },0)/s.marks.length;
    return s;

}).filter(s=.s.avg>=85)
.sort((a,b)=>b.avg-a.avg)
.map(s=>s.name);
console.log(q11arr);

