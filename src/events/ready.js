module.exports= {
    name:"ready",
    run:(client)=>{
        console.log(client.user.tag," is ready.")
    }
}