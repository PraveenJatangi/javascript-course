var states=["telangana",
    "andhra",
    "tamilnadu",
    123,
    "maharashtra"
];

// states.forEach((s)=>(console.log(s)));
// console.log(states[1]);

const val={
    it:"information",
    fb:"facebook",
    ig:"instagram",
    wp:"whatsapp"

}
for (const n of states){
    console.log(n);
}

for(const n in val){
    console.log(`key word is: ${n} and values:${val[n]}`);
}