// here we load VIP user's data JSON file

var userInfo = 
		[{	"user_id": "2",
            "creditSEK" : "300"
        },
        {
            "user_id": "28",
            "creditSEK" : "450"
        },
        {
            "user_id": "27",
            "creditSEK" : "450"
        },
        {
            "user_id": "26",
            "creditSEK" : "450"
        },
        {
            "user_id": "25",
            "creditSEK" : "450"
        },
        {
            "user_id": "24",
            "creditSEK" : "450"
        },
        {
            "user_id": "23",
            "creditSEK" : "450"
        },
        {
            "user_id": "22",
            "creditSEK" : "450"
        },
        {
            "user_id": "21",
            "creditSEK" : "450"
        },
        {
            "user_id": "20",
            "creditSEK" : "450"
        },
        {
            "user_id": "19",
            "creditSEK" : "450"
        },
        {
            "user_id": "18",
            "creditSEK" : "450"
        },
        {
            "user_id": "17",
            "creditSEK" : "450"
        },
        {
            "user_id": "16",
            "creditSEK" : "450"
        },
        {
            "user_id": "29",
            "creditSEK" : "450"
        },
        {
            "user_id": "30",
            "creditSEK" : "450"
        },
        {
            "user_id": "31",
            "creditSEK" : "450"
        },
        {
            "user_id": "32",
            "creditSEK" : "450"
        },
        {
            "user_id": "33",
            "creditSEK" : "450"
        },
        {
            "user_id": "34",
            "creditSEK" : "450"
        },
        {
            "user_id": "35",
            "creditSEK" : "450"
        },
        {
            "user_id": "36",
            "creditSEK" : "450"
        },
        {
            "user_id": "37",
            "creditSEK" : "450"
        },
        {
            "user_id": "38",
            "creditSEK" : "450"
        },
        {
            "user_id": "39",
            "creditSEK" : "450"
        },
        {
            "user_id": "40",
            "creditSEK" : "450"
        },
        {
            "user_id": "41",
            "creditSEK" : "450"
        },
        {
            "user_id": "42",
            "creditSEK" : "450"
        },
        {
            "user_id": "43",
            "creditSEK" : "450"
        },
        {
            "user_id": "44",
            "creditSEK" : "450"
        },
        {
            "user_id": "45",
            "creditSEK" : "450"
        },
        {
            "user_id": "46",
            "creditSEK" : "450"
        },
        {
            "user_id": "47",
            "creditSEK" : "450"
        },
        {
            "user_id": "48",
            "creditSEK" : "450"
        },
        {
            "user_id": "49",
            "creditSEK" : "450"
        },
        {
            "user_id": "50",
            "creditSEK" : "450"
        },
        {
            "user_id": "51",
            "creditSEK" : "450"
        },
        {
            "user_id": "52",
            "creditSEK" : "450"
        },
        {
            "user_id": "53",
            "creditSEK" : "450"
        },
        {
            "user_id": "54",
            "creditSEK" : "450"
        },
        {
            "user_id": "55",
            "creditSEK" : "450"
        },
        {
            "user_id": "56",
            "creditSEK" : "450"
        },
        {
            "user_id": "57",
            "creditSEK" : "450"
        },
        {
            "user_id": "58",
            "creditSEK" : "450"
        },
        {
            "user_id": "59",
            "creditSEK" : "450"
        },
        {
            "user_id": "65",
            "creditSEK" : "450"
        },
        {
            "user_id": "64",
            "creditSEK" : "450"
        },
        {
            "user_id": "62",
            "creditSEK" : "450"
        },
        {
            "user_id": "63",
            "creditSEK" : "450"
        },
        {
            "user_id": "66",
            "creditSEK" : "450"
        },
        {
            "user_id": "67",
            "creditSEK" : "450"
        },
        {
            "user_id": "68",
            "creditSEK" : "450"
        },
        {
            "user_id": "69",
            "creditSEK" : "450"
        },
        {
            "user_id": "70",
            "creditSEK" : "450"
        },
        {
            "user_id": "71",
            "creditSEK" : "450"
        },
        {
            "user_id": "72",
            "creditSEK" : "450"
        },
        {
            "user_id": "73",
            "creditSEK" : "450"
        },
        {
            "user_id": "74",
            "creditSEK" : "450"
        },
        {
            "user_id": "75",
            "creditSEK" : "450"
        },
        {
            "user_id": "76",
            "creditSEK" : "450"
        },
        {
            "user_id": "77",
            "creditSEK" : "450"
        },
        {
            "user_id": "78",
            "creditSEK" : "450"
        },
        {
            "user_id": "79",
            "creditSEK" : "450"
        },
        {
            "user_id": "80",
            "creditSEK" : "450"
        },
        {
            "user_id": "81",
            "creditSEK" : "450"
        },
        {
            "user_id": "82",
            "creditSEK" : "450"
        },
        {
            "user_id": "83",
            "creditSEK" : "450"
        }

]

// here we store the JSON as strings

sessionStorage.setItem ('Balance', JSON.stringify(userInfo));

// when reading the data, change the JSON strings to object

var userJsonStr = JSON.parse(sessionStorage.getItem('Balance'));


//console.log("user_id");

/*for (var i=0; i < DB.users.length; i++) {
        console.log(DB.users[i].user_id);
        console.log(DB.users[i].username);
    } */
//console.log(userJsonStr);
//console.log(DB);

// 通过 username 在 DB 中找到对应的user_id，存入 getUserId
var filterName = DB.users.filter(function(i) {
    // window.localStorage.getItem('username') 来自于 adminlogin.js 中存储的userName
  return i.username === window.localStorage.getItem('username')
});
getUserId = filterName[0].user_id;

// 通过此 getUserId  找到 userJsonStr 中的user，存入 filterUserId
var filterUserId = userJsonStr.filter(function(i){
    return i.user_id === getUserId;
})
// 通过 filterUserId 找到 对应的 creditSEK
userSEK = filterUserId[0].creditSEK;
// 输出 username，userSEK
console.log(userSEK,window.localStorage.getItem('username'));






