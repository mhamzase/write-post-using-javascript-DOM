let postbtn = document.getElementById("postbtn");
let username = document.getElementById("name");
let title = document.getElementById("title");
let desc = document.getElementById("desc");

postbtn.addEventListener("click",()=>{

      let message = document.getElementById("message");
      let allposts = document.getElementsByClassName("allposts")[0];
      

      if(username.value.trim() == "" || title.value.trim() == "" || desc.value.trim() == "")
      {
            message.innerText = "All fields Requried !!!";
            message.style.color = 'red';  
      }
      else{
            successMessage(); 

            let singlepost = document.createElement("div");
            singlepost.setAttribute("class","singlepost");

            // creating all child elements of a single post
            let nameDisplay = document.createElement("p");
            let titleDisplay = document.createElement("p");
            let descDisplay = document.createElement("p");
            let likebtn = document.createElement("button");
            let commentbtn = document.createElement("button");
            let allComments = document.createElement("div");
            let options = document.createElement("p");

            // putting content to all child elements to a single post
            nameDisplay.innerHTML = "<b style='color:#ffd369;font-size:20px'>Name : </b>"+username.value;
            titleDisplay.innerHTML = "<b style='color:#ffd369;font-size:20px'>Title : </b>"+title.value;
            descDisplay.innerHTML = "<b style='color:#ffd369;font-size:20px'>Description : </b>"+desc.value;
            likebtn.innerHTML = "<i class='fas fa-thumbs-up'></i>Like";
            commentbtn.innerText = "Comment";
            options.innerHTML = "<i class='fa fa-ellipsis-v' aria-hidden='true'></i>";


            // comment section creation
            let commentbox = document.createElement("div");
            commentbox.setAttribute("class","hideComment");

            // input comment field
            let inputcomment = document.createElement("input");
            inputcomment.style.width = "77%";
            inputcomment.style.outline = "none";
            inputcomment.style.borderRadius = "30px";
            inputcomment.style.paddingLeft = "17px";
            inputcomment.placeholder = "Write a Comment...";
            inputcomment.style.backgroundColor = "#707782";
            inputcomment.style.color = "white";
            inputcomment.setAttribute("id","userInputComment");

            // comment submit button
            let submitcomment = document.createElement("button");
            submitcomment.style.width = "20%";
            submitcomment.style.backgroundColor = "#ffd369";
            submitcomment.innerText = "Submit";


            // styling to options on three dots
            options.style.float = "right"; 
            options.style.cursor = "pointer";
            options.setAttribute("id","options")
            options.style.fontSize = "24px";


            // adding events to options
            options.addEventListener("click",function () {
                  if(confirm("Do you want to delete this post?"))
                  {
                        this.parentNode.style.display = "none";
                  }   
            });


            // appending input comment field and submit button to a single comment section
            commentbox.appendChild(inputcomment);
            commentbox.appendChild(submitcomment);

            // appending all child elements to a single post
            singlepost.appendChild(options);
            singlepost.appendChild(nameDisplay);
            singlepost.appendChild(titleDisplay);
            singlepost.appendChild(descDisplay);
            singlepost.appendChild(likebtn);
            singlepost.appendChild(commentbtn);
            singlepost.appendChild(allComments);
            singlepost.appendChild(commentbox);
            

            // binding all posts by submission order
            allposts.appendChild(singlepost);


            // adding event on like button
            likebtn.addEventListener("click",function(){
                  this.classList.toggle('like');
            });

            // adding event on comment button
            commentbtn.addEventListener('click',function(){
                  commentbox.classList.toggle('hideComment');
            });


            // adding event on submit comment button
            submitcomment.addEventListener('click',function(){
                  if(inputcomment.value == "" && inputcomment.value.trim() == "")
                  {
                        message.innerText = "Comment can't empty !";
                        message.style.color = "red";
                        message.style.fontSize = "14px";
                  }
                  else{
                        message.innerText = "";
                        var userComment = document.createTextNode(inputcomment.value);
                        let userShowComment = document.createElement("p");
                        userShowComment.appendChild(userComment);
                        allComments.appendChild(userShowComment,allComments.childNodes[0]);
                        this.parentNode.childNodes[0].value = "";
                  }
                  
            }); 

      }      


      // post success message 
      function successMessage(){
            message.innerText = "Posted Nice !";
            message.style.color = 'lightgreen';
            message.style.fontSize = '20px';
      }
      
});

     

