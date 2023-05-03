const request = require('request');

exports.getResults = function(req,res){
    console.log('req: ' + req);
    console.log('prompt: ' + req.prompt);
    console.log('variations: ' + req.variations);
    //console.log('req body: ' + req.body);
    //console.log(JSON.stringify(req));

    return new Promise(function(resolve,reject){
    request({
        url: 'https://api.openai.com/v1/completions',
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Authorization: 'Bearer ' + process.env.CHATGPT_KEY
        },
        json:{
            "model": "text-davinci-003",
            "prompt":req.prompt,//req.body.prompt,
            "max_tokens":256,
            "temperature":0.5,
            "n":req.variations//req.body.variatioßns
        },
    },(err,response,body) =>{
            if(err)
                reject(JSON.stringify(err));
            resolve(body);
        
    })
});
}