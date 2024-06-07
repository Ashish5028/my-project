[
    {
        "id":"1",
        "name":"asdfasdf"
    },
    {
        "id":"2",
        "name":"asdfasdf"
    },
    {
        "id":"3",
        "name":"asdfasdf"
    }
]

// add, splice, update,



var a ={
    "1":{
        "id":"1",
        "name":"asdfasdf",
        "comments":[
            {
                "id":"1",
                "name":"asdfasdf"
            },
            {
                "id":"2",
                "name":"asdfasdf"
            },
            {
                "id":"3",
                "name":"asdfasdf"
            }
        ]
    },
    "2":{
        "id":"2",
        "name":"asdfasdf"
    }
};

a["3"]={
    "id":"2",
    "name":"asdfasdf"
}
a["2"] = {...a["2"], "name":"asdfasd1212"};
delete a["3"];
a ={
    ...a,
    "2":{
        ...a["2"],
        "comments":[ ...a["2"].comments,"heleloadsf "]

    }
}


Object.keys(a).forEach((k)=>{
    var o = a[k];
    console.log(o.name);
}

)
