const calculateBtn = document.getElementById("calculate-btn");
const loveCalculator = document.querySelector(".love-calculator");
const resultContainer = document.querySelector(".result-container");
const resultName = document.querySelector(".result-name");
const resultMessage = document.querySelector(".result-message");
const resultPercentageBox = document.querySelector(".result-percentage-box");
const resultPercentageBoxWrappr = document.querySelector(".result-percentage-box-wrapper");
const calculateAgainBtn = document.getElementById("calculate-again-btn");

calculateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const inp1 = document.getElementById("name1");
    const inp2 = document.getElementById("name2");

    if(inp1.value && inp1.value){
        loveCalculator.style.display = "none";
        resultContainer.style.display = "block";

        resultName.innerText = `${inp1.value} & ${inp2.value}`; 

        const loveScore = Math.floor(Math.random() * 100) + 1;
        resultPercentageBox.innerText = `${loveScore}% `;

        resultPercentageBoxWrappr.style.background = `conic-gradient(#fb93bb 0% ${loveScore}%, #806767 ${loveScore}% 100%)` ;
        const loveQuotesByPercentage = [
            {
                range: [0,10],
                quota: " গুগল ম্যাপেও তোমাদের কানেকশন খুঁজে পাওয়া যায়নি।🤣",
            },
            {
                range: [10,20],
                quota: "আমার ফ্রিজের পুরনো খাবারে এর চেয়ে বেশি কেমিস্ট্রি আছে।😋",
            },
            {
                range: [20,30],
                quota: " এটা প্রেম না - এটা দুজনের একঘেয়েমি।😝",
            },
            {
                range: [30,40],
                quota: " তুমি ওকে পছন্দ কর... যেমন স্কুলের অ্যাসেম্বলি পছন্দ করতে - থাকা লাগে, কিন্তু মন চায় না।🫶",
            },
            {
                range: [40,50],
                quota: "  দেখলে মনে হয় কিছু একটা আছে... কিন্তু আবার ঠিক প্রেম ও না, একটু গোল মেলে চালচিত্র টাইপ।",
            },
            {
                range: [50,60],
                quota: " মিল হতে পারে, যদি হঠাৎ একদিন বিদ্যুৎ চলে যায় আর দুজনেই এক রুমে আটকা পড়ো।🥰",
            },
            {
                range: [60,70],
                quota: " প্রেম মানে তোমার কাছে শুধু অনুভূতি না, মাঝে মাঝে সেটা খাবারের বিল ভাগাভাগি করাও।❤️",
            },
            {
                range: [70,80],
                quota: "  তোমরা একে অপরকে এতটাই ভালোবাসো - একসাথে নেটফ্লিক্স চললেও, পপকর্ন কে খাবে ? সেটা নিয়ে ঝগড়া করলেও, আলাদা হয় না।",
            },
            {
                range: [80,90],
                quota: " মোমবাতির কাছ থেকে দূরে থাকো, তোমাদের সম্পর্ক এমনিতেই আগুন।🔥🔥                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ",
            },
            {
                range: [90,100],
                quota: "তোমাদের লাভ  স্কোর, ওয়াইফাই সিগনাল এর চেয়েও বেশি।❤️💘",
            },
        ]

        const expectedQuota = loveQuotesByPercentage.find((element) => loveScore >= element.range[0] && loveScore <= element.range[1]);
        resultMessage.innerText = expectedQuota.quota;

    }else{
        alert("Name not found!!");
    }

    

});

calculateAgainBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    window.location.reload();
    
})
