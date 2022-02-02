let global=[
    {name:"Emmanuel",
    minutes:"2 min",
    pic:"https://drive.google.com/drive/u/0/folders/1ozUlymuTaS9_zRZ-QyqxYiNe91wwTF5a",
    body:"hello emmanuel im in the body",
    like:30
    },
    {name:"Emmanuel",
    minutes:"5 min",
    pic:"https://drive.google.com/drive/u/0/folders/1ozUlymuTaS9_zRZ-QyqxYiNe91wwTF5a",
    body:"hello john im in the body",
    like:20
    },
    {name:"Emmanul",
    minutes:"1 min",
    pic:"https://drive.google.com/drive/u/0/folders/1ozUlymuTaS9_zRZ-QyqxYiNe91wwTF5a",
    body:"hello bob im in the body",
    like:3
    }
    ];
    
    
    fetch('https://mocki.io/v1/7f22c1b0-f175-4e9c-be2b-d8fc50dea99b')
      .then(response => response.json())
      .then(function(obj) {
        console.log(obj.length);
        feedMessage(obj);
      })
    
      function feedMessage(obj){
    
        for(i=0;i<obj.length;i++){
            console.log(obj[i].name)
        
        //create all div element
        let post_bar = document.createElement("div");
        let post_topbar = document.createElement("div");
        let usy_dt = document.createElement("div");
        let usy_name = document.createElement("div");
        let job_descp = document.createElement("div");//start meassage
        let message_img = document.createElement("div");
        let job_status_bar = document.createElement("div");//like button
        let like_com = document.createElement("ul");
        let like = document.createElement("li");
        
        
        //set  div class attributes
        post_bar.setAttribute("class","post-bar");
        post_topbar.setAttribute("class","post_topbar");
        usy_dt.setAttribute("class","usy-dt");
        usy_name.setAttribute("class","usy-name");
        job_descp.setAttribute("class","job_descp");
        message_img.setAttribute("class","message-img");
        job_status_bar.setAttribute("class","job-status-bar");
        like_com.setAttribute("class","like-com")
        
        
        //create data field  
        let myname= document.createElement("h3");
                 myname.innerHTML=obj[i].name;
        let min = document.createElement("span");
                min.innerHTML=obj[i].minutes;
        let pic = document.createElement("img");
                 pic.setAttribute("src",obj[i].pic);
        let bod = document.createElement("p");
                bod.innerHTML=obj[i].body;
        let mylike = document.createElement("span")
                mylike.innerHTML=obj[i].like;
        let a = document.createElement("a");//create a anchor tag for like button
                a.innerHTML=`<a  onclick="like()" href="#like-com"> Like</a>`;
        
        
        //get div post-topbar / user name
        let feed_main = document.querySelector(".posts-section");
        feed_main.appendChild(post_bar).appendChild(post_topbar).appendChild(usy_dt).appendChild(usy_name).append(myname,min);//feed name
        
        //get div job_descp /message feed
        post_bar.appendChild(job_descp).append(bod);
        job_descp.appendChild(message_img).append(pic);
        
        //get div job_status_bar /like button
         post_bar.appendChild(job_status_bar).appendChild(like_com).appendChild(like).append(a,mylike);
        
        };
        
        
    
      };
    
    
    
    
    
    
    