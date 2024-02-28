const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');

// To use static content 
// like html, css, js
const static_path = path.join(__dirname, "../public"); 
app.use(express.static(static_path));
// But bcs hmm dynamic website bnna rhe from hbs 
// So we have to set view engine to hbs 
// So that html na uthae from public folder
// But css, imgs, scripts utha le from public for static content for hbs
// So:- 
app.set("view engine", "hbs");
const template_views_path = path.join(__dirname, "../template_engine/views");
app.set("views", template_views_path);

hbs.registerPartials(path.join(template_views_path, "../partials"))


app.get("/", (req,res)=>{
    // For static content using html 
    // then can make it dynamic using js
    // res.sendFile(path.join(static_path, "index.html"));
    

    // For dynamic content using hbs 
    // then can make it look dynamic too using exprees  
    res.render("index");
});

app.get("/about", (req,res)=>{
    // For static content using html 
    // then can make it dynamic using js    
    // res.sendFile(path.join(static_path, "about.html"));
    
    // For dynamic content using hbs 
    // then can make it look dynamic too using exprees  
    res.render("about");

})

app.get("/weather", (req,res)=>{
    res.render('weather');
})

app.get("*", (req,res)=>{ // If any of route nhi match krega 
    res.render("error", {
        errorMsg: 'Opps! Page Not Found' // It will be rendered while displaying error.hbs
    });
})

const port = process.env.PORT || 5000; // Agar 5000 nhi chla then uss keyword ke thorugh jo port no milega us pr chal jayega 
app.listen(port, ()=>{
    console.log("Server Created");
})




// 1:44:40 se continue and make it responsive 