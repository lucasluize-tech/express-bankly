/*
This function will turn a string of 24h time into words.

Examples of the output :

Input 	Expected Output
00:00 	midnight
00:12 	twelve twelve am
01:00 	one o’clock am
06:01 	six oh one am
06:10 	six ten am
06:18 	six eighteen am
06:30 	six thirty am
10:34 	ten thirty four am
12:00 	noon
12:09 	twelve oh nine pm
23:23 	eleven twenty three pm
*/


const timeWord = (timeString)=>{
    // two very commom cases.
    if (timeString === "00:00") return "midnight"
    if (timeString === "12:00") return "noon"
    let time = timeString.split(":")
    let am_pm = "am";
    
    const hours = {
        "00": "twelve",
        "01": "one",
        "02": "two",
        "03": "three",
        "04": "four",
        "05": "five",
        "06": "six",
        "07": "seven",
        "08": "eight",
        "09": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "one",
        "14": "two",
        "15": "three",
        "16": "four",
        "17": "five",
        "18": "six",
        "19": "seven",
        "20": "eight",
        "21": "nine",
        "22": "ten",
        "23": "eleven",
    }
    
    const minutes = {
        "00": "o'clock",
        "01": "o'one",
        "02": "o'two",
        "03": "o'three",
        "04": "o'four",
        "05": "o'five",
        "06": "o'six",
        "07": "o'seven",
        "08": "o'eight",
        "09": "o'nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "21": "twenty one",
        "22": "twenty two",
        "23": "twenty three",
        "24": "twenty four",
        "25": "twenty five",
        "26": "twenty six",
        "27": "twenty seven",
        "28": "twenty eight",
        "29": "twenty nine",
        "30": "thirty",
        "31": "thirty one",
        "32": "thirty two",
        "33": "thirty three",
        "34": "thirty four",
        "35": "thirty five",
        "36": "thirty six",
        "37": "thirty seven",
        "38": "thirty eight",
        "39": "thirty nine",
        "40": "forty",
        "41": "forty one",
        "42": "forty two",
        "43": "forty three",
        "44": "forty four",
        "45": "forty five",
        "46": "forty six",
        "47": "forty seven",
        "48": "forty eight",
        "49": "forty nine",
        "50": "fifty",
        "51": "fifty one",
        "52": "fifty two",
        "53": "fifty three",
        "54": "fifty four",
        "55": "fifty five",
        "56": "fifty six",
        "57": "fifty seven",
        "58": "fifty eight",
        "59": "fifty nine",
    }
    
    if (time[0] > 12){
        am_pm = "pm";
    }
    
    const result = `${hours[time[0]]} ${minutes[time[1]]} ${am_pm}`
    
    return result;
}


module.exports = timeWord;