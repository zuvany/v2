// Create and insert the bot HTML structure dynamically

function runZuvany(API){
    document.body.insertAdjacentHTML('beforeend', `
         <div class="botIconDiv">
        <img src="https://exmeeteimage.s3.eu-north-1.amazonaws.com/text.png" alt="">
    </div>
        <div class="botContiner">
            <div class="botTop">
                <p class="title">Alex AI</p>
                <button class="closeBTN"><img src="https://exmeeteimage.s3.eu-north-1.amazonaws.com/cancel.png" alt=""></button>
            </div>
            <div class="ResponseContiner">
                <div class="welcomeDiv" id="welcomeDiv">
                    <p class="Welcome"></p>
                    <p class="About">How can I assist you today?</p>
                    <div class="questionDiv">
                        <div class="question" id="qone" >How can help you?</div>
                        <div class="question" id="qtwo" >What service you provide?</div>
                    </div>
                </div>
                <div class="responseDiv" id="responseDiv">
                    <!-- Responses will be appended here -->
                </div>
            </div>
            <div class="inputContiner">
                <div class="inputDiv">
                    <input type="text" id="userInput" placeholder="Enter Your Question">
                    <button class="submitBtn">Send</button>
                </div>
                <div class="logo">
                    <p>Powered by Zuvany</p>
                </div>
            </div>
        </div>
    `);
    
    // Add CSS styling directly using JavaScript
    const style = document.createElement("style");
    style.textContent = `
        * {
            padding: 0;
            box-sizing: border-box;
            margin: 0;
        }
            .botIconDiv{
    position: fixed;
    bottom: 5%;
    right: 2%;
    width: 85px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: #e2e2e2 solid 3px;
    border-radius: 50px;
    cursor: pointer;
    background: #ffffff;
    cursor: pointer;
    z-index: 19;
}
.botIconDiv img{
    height: 45px;
}
        .botContiner {
            font-family: sans-serif;
            position: fixed;
            right: 20px;
            bottom: 20px;
            border-radius: 10px;
            width: 26%;
            height: 80vh;
            overflow: hidden;
            border: #ececec solid 2px;
            display: none;
            z-index: 20;
        }
        .botContiner .botTop {
            width: 100%;
            height: 12vh;
            background: #ffffff;
           display: flex;
    justify-content: space-between;
    padding-right: 20px;
            align-items: center;
            padding-left: 20px;
            border-bottom: #ececec solid 2px;
        }
            .closeBTN{
background: #ffff;
border:none;
cursor: pointer;
}
.botTop .closeBTN img{
height: 30px;
}
        .botTop .title {
            font-size: 2rem;
        }
        .ResponseContiner, .responseDiv {
            width: 100%;
            height: 56vh;
            
            overflow-y: auto;
            z-index: 20;
        }
            .responseDiv{
            margin-top: 5px;
            }
        .ResponseContiner::-webkit-scrollbar {
            width: 8px;
        }
        .ResponseContiner::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 10px;
        }
        .ResponseContiner::-webkit-scrollbar-thumb:hover {
            background: #888;
        }
        .responseDiv::-webkit-scrollbar {
            width: 8px;
        }
        .responseDiv::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 10px;
        }
        .responseDiv::-webkit-scrollbar-thumb:hover {
            background: #888;
        }
        .welcomeDiv {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            padding: 5px;
        }
        .welcomeDiv .Welcome {
            font-size: 1.7rem;
        }
        .welcomeDiv .About {
            font-size: 1rem;
            text-align: center;
        }
        .welcomeDiv .questionDiv {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 10px;
            gap: 10px;
        }
        .questionDiv .question {
            padding: 5px 10px;
            border-radius: 10px;
            border: #ececec solid 2px;
            cursor: pointer;
        }
            .questionDivTwo {
             width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 10px;
            gap: 10px;
            }
           .questionDivTwo .question{
            padding: 5px 10px;
            border-radius: 10px;
            border: #ececec solid 2px;
            cursor: pointer;
           } 
        .responseDiv .response {
            padding: 10px 10px;
            border-radius: 5px;
            background-color: #ececec;
            margin-bottom: 10px;
            margin-left: 10px;
    margin-right: 10px;
        }
        .responseDiv .loading {
            padding: 10px 10px;
            border-radius: 5px;
            background-color: #ececec;
            margin-bottom: 10px;
              margin-left: 10px;
    margin-right: 10px;
        }
        .inputContiner {
            width: 100%;
            height: 12vh;
            flex-direction: column;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .inputContiner .inputDiv {
            width: 95%;
            height: 55%;
            display: flex;
        }
        .inputDiv input {
            width: 80%;
            height: 100%;
            font-size: 1.1rem;
            padding-left: 5px;
            border-radius: 10px;
            outline: none;
            border: #ececec solid 2px;
            border-start-end-radius: 0;
            border-bottom-right-radius: 0;
            border-right: 0;
        }
        .inputDiv .submitBtn {
            width: 20%;
            height: 100%;
            border: #ececec solid 2px;
            background: #fff;
            border-radius: 10px;
            border-start-start-radius: 0;
            border-bottom-left-radius: 0;
            font-size: 1.1rem;
            cursor: pointer;
        }
        .inputDiv .submitBtn:hover {
            background-color: #f0eeee;
        }
        .inputContiner .logo {
            width: 100%;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5px;
            color: #929292;
        }
        @media (max-width: 768px) {
            .botContiner {
                width: 90%;
                right: 5%;
                bottom: 5%;
                height: 75vh;
            }
            .botTop .title {
                font-size: 1.5rem;
            }
            .ResponseContiner, .responseDiv {
                height: 50vh;
            }
            .inputDiv input {
                font-size: 1rem;
            }
            .inputDiv .submitBtn {
                font-size: 1rem;
            }
        }
        @media (max-width: 480px) {
            .botContiner {
                width: 95%;
                right: 2.5%;
                bottom: 5%;
                height: 75vh;
            }
            .botTop .title {
                font-size: 2rem;
            }
            .inputDiv input, .inputDiv .submitBtn {
                font-size: 1.1rem;
            }
        }
    `;
    document.head.appendChild(style);
    
    // JavaScript code for handling send button click and responses
    document.querySelector('.submitBtn').addEventListener('click', sendMessage);
    
    const responseDiv = document.getElementById("responseDiv");
    const welcomeDiv = document.getElementById("welcomeDiv");
    const qone = document.getElementById("qone");
    const qtwo = document.getElementById("qtwo");
   
    const botIconDiv = document.querySelector('.botIconDiv');
    const chatDiv = document.querySelector('.botContiner');
    const closeBTN = document.querySelector('.closeBTN');

    botIconDiv.addEventListener('click',()=>{
        chatDiv.style.display = "block";
        botIconDiv.style.opacity = "0";
    })
    closeBTN.addEventListener('click',()=>{
        chatDiv.style.display = "none";
        botIconDiv.style.opacity = "1";
    })
    qone.addEventListener("click",()=>{
        defultQuestion(qone.textContent);
    })
    qtwo.addEventListener("click",()=>{
        defultQuestion(qtwo.textContent);
    })

    // getTheme
    function getTheme(){
        const welcomeElement = document.querySelector('.Welcome');
        const aboutElement = document.querySelector('.About');
        const nameElement = document.querySelector('.title');
        const qoneElement = document.getElementById('qone');
        const qtwoElement = document.getElementById('qtwo');
        const userInputElement = document.querySelector('.userInput');
        fetch("https://openzuvany.vercel.app/api/v1/getTheme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({apiKey : API  })
        })
        .then(response => response.json())
        .then(data => {
           console.log(data);
           
           if (welcomeElement) {
            welcomeElement.textContent = data?.Theme[0]?.title || `Welcome To ${data?.botName}`;
        }
    
        if (aboutElement) {
            aboutElement.textContent = data?.Theme[0]?.paragraph;
        }
    
        if (qoneElement) {
            qoneElement.textContent = data?.Theme[0]?.qone;
        }
    
        if (qtwoElement) {
            qtwoElement.textContent = data?.Theme[0]?.qtwo;
        }
        if (nameElement) {
            nameElement.textContent = data?.botName;
        }
    
        // Update placeholder text of the input with class "userInput"
        if (userInputElement) {
            userInputElement.placeholder = data?.Theme[0]?.placeholder;
        }

        })
    }
   getTheme()

    function defultQuestion(question) {
        
        if (!API) {
            alert("Add Your API Key");
            return;
        }
    
        
        if (!question) {
            alert("Please enter a question.");
            return;
        }
    
        displayMessage(question, "user");
        Loading(true);  // Show loading indicator
    
        fetch("https://openzuvany.vercel.app/api/v1/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: question,apiKey : API })
        })
        .then(response => response.json())
        .then(data => {
            Loading(false);  // Hide loading indicator
            displayMessage(data.data.answer, "bot",data.data?.relatedQuestion);
        })
        .catch(error => {
            console.error("Error:", error);
            setTimeout(() => {
                displayMessage("There was an error processing your request. ", "bot");
                Loading(false);  // Ensure loading indicator is hidden on error
            }, 1000);
        });
    
       
    }
    
    function sendMessage() {
        if (!API) {
            alert("Add Your API Key");
            return;
        }
    
        const userInput = document.getElementById("userInput").value;
        if (userInput.trim() === "") {
            alert("Please enter a question.");
            return;
        }
    
        displayMessage(userInput, "user");
        Loading(true);  // Show loading indicator
    
        fetch("https://openzuvany.vercel.app/api/v1/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: userInput,apiKey : API  })
        })
        .then(response => response.json())
        .then(data => {
            Loading(false);  // Hide loading indicator
            displayMessage(data.data.answer, "bot",data.data?.relatedQuestion);
        })
        .catch(error => {
            console.error("Error:", error);
            setTimeout(() => {
                displayMessage("There was an error processing your request. " + "bot");
                Loading(false);  // Ensure loading indicator is hidden on error
            }, 1000);
        });
    
        document.getElementById("userInput").value = "";
    }
    
    function displayMessage(message, sender, nextQuestion) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("response");
        messageElement.style.backgroundColor = sender === "user" ? "#f6f5f5" : "#f6f5f5";
        messageElement.textContent = message;
    
        // Create the main div with class "questionDivTwo"
        if (sender !== "user") {
            const questionDivTwo = document.createElement("div");
            questionDivTwo.classList.add("questionDivTwo");
    
            // Create the first question
            const questionOne = document.createElement("div");
            questionOne.classList.add("question");
            questionOne.id = "qthree";
            questionOne.textContent = nextQuestion && nextQuestion.length !== 0 ? nextQuestion[0].nextQuestion : '';
    
            // Create the second question
            const questionTwo = document.createElement("div");
            questionTwo.classList.add("question");
            questionTwo.id = "qfour";
            questionTwo.textContent = nextQuestion && nextQuestion.length !== 0 ? nextQuestion[1].nextQuestion : '';
    
            // Append the questions to the questionDivTwo
            questionDivTwo.appendChild(questionOne);
            questionDivTwo.appendChild(questionTwo);
            messageElement.appendChild(questionDivTwo);
    
            // Add click event listeners to the newly created elements
            questionOne.addEventListener("click", () => {
                alert('Hello three');
                defultQuestion(questionOne.textContent);
            });
    
            questionTwo.addEventListener("click", () => {
                alert('Hello four');
                defultQuestion(questionTwo.textContent);
            });
        }
    
        responseDiv.appendChild(messageElement);
        welcomeDiv.style.display = "none";
        responseDiv.scrollTop = responseDiv.scrollHeight;
    }
    
    
    function Loading(status) {
        if (status) {
            const loadingDiv = document.createElement("div");
            loadingDiv.classList.add("loading");
            loadingDiv.style.backgroundColor = "#f8f8f8";
            loadingDiv.textContent = "Please Wait...";
            responseDiv.appendChild(loadingDiv);
            responseDiv.scrollTop = responseDiv.scrollHeight;
        } else {
            const loadingDiv = document.querySelector(".loading");
            if (loadingDiv) {
                loadingDiv.remove();  // Remove loading div from DOM
            }
        }
    }
    
}
