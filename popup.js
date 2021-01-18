

function happyCount() {
    chrome.storage.local.get('happy', function (result) {
        var time = result.happy;
        var date = Date.now();
        if (time == undefined) {
            var timeArray = [];
            timeArray.push(date);
            chrome.storage.local.set({"happy": timeArray});
        } else {
            time.push(date);
            chrome.storage.local.set({"happy" : time});
        }
    });
}

function len(arr) {
    var count = 0;
    for (var k in arr) {
      if (arr.hasOwnProperty(k)) {
        count++;
      }
    }
    return count;
  }

function getHappyLen(m, y) {
    let ret = [];
    chrome.storage.local.get('happy', function (result) {
        var arr = result.happy;
        var len = arr.length;
        var i = 0;
        while (i < len) {
            var time = arr[i];
            var a = new Date(time);
            var year = a.getFullYear();
            var month = a.getMonth();
            if (year == y && month == m) {
                var date = a.getDate();
                ret.push(date);
                var d = document.getElementById(date);
                if (d != null) {
                    d.classList.add("bg-warning");
                }
            }
            i++;
        }
    });
    return ret;
}

function getHappy(m, y) {
    let ret = [];
    chrome.storage.local.get('happy', function (result) {
        var arr = result.happy;
        var len = arr.length;
        var i = 0;
        while (i < len) {
            var time = arr[i];
            var a = new Date(time);
            var year = a.getFullYear();
            var month = a.getMonth();
            if (year == y && month == m) {
                var date = a.getDate();
                ret.push(date);
                var d = document.getElementById(date);
                if (d != null) {
                    d.classList.add("bg-warning");
                }
            }
            i++;
        }

    });
    return ret;
}

function getOK(m, y) {
    let ret = [];
    chrome.storage.local.get('ok', function (result) {
        var arr = result.ok;
        var len = arr.length;
        var i = 0;
        while (i < len) {
            var time = arr[i];
            var a = new Date(time);
            var year = a.getFullYear();
            var month = a.getMonth();
            if (year == y && month == m) {
                var date = a.getDate();
                ret.push(date);
                var d = document.getElementById(date);
                if (d != null) {
                    d.classList.add("bg-success");
                }
            }
            i++;
        }

    });
    return ret;
}
// "#ffdb4d",
// "#79DE79",
// "#A8E4EF",
// "#ff6666",
// "#ffb366",
// "#9999ff" 

function diary() {
    document.getElementById("moods").innerHTML = `
    <div>
        <div id = "diary">
      <form>
        <textarea name="formNoteText" id="formNoteText" cols="50" rows="8" maxlength="300"></textarea>
        <select name="formColor" id="formColor">
          <option value="none">Select Mood</option> 
          <option value="yellow">Happy</option>
          <option value="orange">Confused</option>
          <option value="green">Alright</option>
          <option value="blue">Sad</option>
          <option value="red">Mad</option>
          <option value="purple">Explosive</option>
        </select>
        <div class = "selectwrapper" style = "display: flex; width: 100%; justify-content: space-between;">
        <button id="addNote" style = "color: white; background-color: #afa3f5;">Add Note</button>
        <button id="showNote" style = "color: white; background-color:#afa3f5;">Show Notes</button>
        </div>
      </form>
      </div>
    
      <div id="notes"></div>
    </div>  
    `;

    document.getElementById('addNote').onclick = saveNote;
    document.getElementById('showNote').onclick = displayNotes;

}

function displayNotes() {
    document.getElementById("moods").innerHTML = `
    <div id = "myNotes"></div>
    `;
    chrome.storage.local.get('notes', function (result) {
        var notes = result.notes;
        if (notes == undefined) {
        } else {
            for (var i = 0; i < notes.length; i++) {
                var p = document.createElement("p");
                if (i == 0) {
                    p.setAttribute("style", "background-color: #e7f3fe",
                    "border-left: 6px solid #2196F3");
                }

                if (i == 1) {
                    p.setAttribute("style","background-color: #ddffdd",
                    "border-left: 6px solid #4CAF50");
                }

                if (i == 2) {
                    p.setAttribute("style", "background-color: #ffdddd",
                    "border-left: 6px solid #f44336");
                }

                if (i >= 3) {
                    p.setAttribute("style", "background-color: #ffdddd",
                    "border-left: 6px solid #f44336");
                }
            
        
                var t = document.createTextNode(notes[i]);
                p.appendChild(t); 
                document.getElementById('myNotes').appendChild(p);
                
            }
        }
    });
}

function saveNote() {
    var note = document.getElementById("formNoteText").value;
    chrome.storage.local.get('notes', function (result) {
        var notes = result.notes;
        if (notes == undefined) {
            var notesArray = [];
            notesArray.push(note);
            chrome.storage.local.set({"notes": notesArray});
        } else {
            notes.push(note);
            chrome.storage.local.set({"notes" : notes});
        }
    });
}

function okCount() {
    chrome.storage.local.get('ok', function (result) {
         var time = result.ok;
         var date = Date.now();
         if (time == undefined) {
             var timeArray = [];
             timeArray.push(date);
             chrome.storage.local.set({"ok": timeArray});
         } else {
             time.push(date);
             chrome.storage.local.set({"ok" : time});
         }
     });
 }


 function getSad(m, y) {
    let ret = [];
    chrome.storage.local.get('sad', function (result) {
        var arr = result.sad;
        var len = arr.length;
        var i = 0;
        while (i < len) {
            var time = arr[i];
            var a = new Date(time);
            var year = a.getFullYear();
            var month = a.getMonth();
            if (year == y && month == m) {
                var date = a.getDate();
                ret.push(date);
                var d = document.getElementById(date);
                if (d != null) {
                    d.classList.add("bg-info");
                }
            }
            i++;
        }

    });
    return ret;
}

function getMad(m, y) {
    let ret = [];
    chrome.storage.local.get('mad', function (result) {
        var arr = result.mad;
        var len = arr.length;
        var i = 0;
        while (i < len) {
            var time = arr[i];
            var a = new Date(time);
            var year = a.getFullYear();
            var month = a.getMonth();
            if (year == y && month == m) {
                var date = a.getDate();
                ret.push(date);
                var d = document.getElementById(date);
                if (d != null) {
                    d.classList.add("bg-danger");
                }
            }
            i++;
        }

    });
    return ret;
}


function getConfused(m, y) {
    let ret = [];
    chrome.storage.local.get('confused', function (result) {
        var arr = result.confused;
        var len = arr.length;
        var i = 0;
        while (i < len) {
            var time = arr[i];
            var a = new Date(time);
            var year = a.getFullYear();
            var month = a.getMonth();
            if (year == y && month == m) {
                var date = a.getDate();
                ret.push(date);
                var d = document.getElementById(date);
                if (d != null) {
                    d.classList.add("bg-warning");
                }
            }
            i++;
        }

    });
    return ret;
}

 function sadCount() {
    chrome.storage.local.get('sad', function (result) {
         var time = result.sad;
         var date = Date.now();
         if (time == undefined) {
             var timeArray = [];
             timeArray.push(date);
             chrome.storage.local.set({"sad": timeArray});
         } else {
             time.push(date);
             chrome.storage.local.set({"sad" : time});
         }
     });
 }

 function madCount() {
    chrome.storage.local.get('mad', function (result) {
         var time = result.mad;
         var date = Date.now();
         if (time == undefined) {
             var timeArray = [];
             timeArray.push(date);
             chrome.storage.local.set({"mad": timeArray});
         } else {
             time.push(date);
             chrome.storage.local.set({"mad" : time});
         }
     });
}

function getExplosive(m, y) {
    let ret = [];
    chrome.storage.local.get('explosive', function (result) {
        var arr = result.explosive;
        var len = arr.length;
        var i = 0;
        while (i < len) {
            var time = arr[i];
            var a = new Date(time);
            var year = a.getFullYear();
            var month = a.getMonth();
            if (year == y && month == m) {
                var date = a.getDate();
                ret.push(date);
                var d = document.getElementById(date);
                if (d != null) {
                    d.classList.add("bg-primary");
                }
            }
            i++;
        }

    });
    return ret;
}

function explosiveCount() {
    chrome.storage.local.get('explosive', function (result) {
         var time = result.explosive;
         var date = Date.now();
         if (time == undefined) {
             var timeArray = [];
             timeArray.push(date);
             chrome.storage.local.set({"explosive": timeArray});
         } else {
             time.push(date);
             chrome.storage.local.set({"explosive" : time});
         }
     });
 }

function confusedCount() {
    chrome.storage.local.get('confused', function (result) {
         var time = result.confused;
         var date = Date.now();
         if (time == undefined) {
             var timeArray = [];
             timeArray.push(date);
             chrome.storage.local.set({"confused": timeArray});
         } else {
             time.push(date);
             chrome.storage.local.set({"confused" : time});
         }
     });
 }

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {


    let firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    
    var okArr = getOK(month, year);
    var sadArr = getSad(month, year);
    var madArr = getMad(month, year);
    var happyArr = getHappy(month, year);

    console.log(happyArr);
    console.log(okArr);
    console.log(sadArr);
    console.log(madArr);
    
    

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }

            else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                cell.setAttribute("id", date);
                // if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                //     cell.classList.add("bg-info");
                // } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function profile() {
    document.getElementById("moods").innerHTML = `<div class="container">
    <script>
    function Twilio(){

        var twilio = require('twilio');
        
        const accountSid = "ACf4e3dfe799dfa2dd5f996a1a5525f979";
        const authToken = "14769bddb2bda6eda6ea1a4ff37a65d1";
        const client = require('twilio')(accountSid, authToken);
        console.log("Test");
        client.messages
          .create({
             body: 'Hello! Welcome to Serotonin. Your curret mood is ',
             from: '+13236436196',
             to: '+14089212336'
           })
          .then(message => console.log(message.sid));
        
        
        
        }
    </script>
    <h2></h2>
    <form class="form-horizontal" action="">
      <div class="form-group">
        <label class="control-label col-sm-2" for="email">Phone Number:</label>
        <div class="col-sm-10">
          <input type="tel" class="form-control" id="phone" placeholder="Enter phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required>
        </div>
      </div>
      <div class="form-group">        
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default" onclick = "Twilio()" style = "color: white; background-color:#afa3f5" >Send Data</button>
          \
        </div>
      </div>
    </form>
  </div>
`
}





//Storing data from local storage into an array of objects

//  var usersdata = JSON.parse(chrome.storage.local.getItem('happy'));
//  console.log(usersdata);






function data(){
    document.getElementById("moods").innerHTML = "";
    document.getElementById("moods").innerHTML = `
    <div id="chartContainer">
    </div> 
    `;
    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();

    var happyArr = getHappy(currentMonth, currentYear);
    var madArr = getMad(currentMonth, currentYear);
    var okArr = getOK(currentMonth, currentYear);
    var sadArr = getSad(currentMonth, currentYear);
    var conArr = getConfused(currentMonth, currentYear);
    var exArr = getExplosive(currentMonth, currentYear);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    setTimeout(function(){ 
        var happy = happyArr.length;
        var mad = madArr.length;
        var ok = okArr.length;
        var sad = sadArr.length;
        var confused = conArr.length;
        var explosive = exArr.length;
        var total = happy + mad + ok + sad + confused + explosive; 
    

        CanvasJS.addColorSet("moodShades",
                [//colorSet Array
                "#ffdb4d",
                "#79DE79",
                "#A8E4EF",
                "#ff6666",
                "#ffb366",
                "#9999ff"
                

        ]);
        
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            colorSet: "moodShades",
            title: {
                text: "Mood for " + months[currentMonth] + " " + currentYear
            },
            data: [{
                type: "pie",
                startAngle: 240,
                yValueFormatString: "##0.00\"%\"",
                indexLabel: "{label} {y}",
                dataPoints: [
                    {y: happy * 100/total, label: "Happy"},
                    {y: ok * 100/total, label: "Alright"},
                    {y: sad * 100/total, label: "Sad"},
                    {y: mad * 100/total, label: "Mad"},
                    {y: confused * 100/total, label: "Confused"},
                    {y: explosive * 100/total, label: "Explosive"}

                ]
            }]
        });
        chart.render();
    }, 
    1000);
}


    

function explodePie(e) {
	for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
		if(i !== e.dataPointIndex)
			e.dataSeries.dataPoints[i].exploded = false;
	}
}



function showData() {
    document.getElementById("moods").innerHTML = "";
    document.getElementById('moods').innerHTML = `
    <div class="container col-sm-4 col-md-7 col-lg-4 mt-5">
    <div class="card">
        <h3 class="card-header" id="monthAndYear"></h3>
        <table class="table table-bordered table-responsive-sm" id="calendar">
            <thead>
            <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
            </tr>
            </thead>

            <tbody id="calendar-body">

            </tbody>
        </table>

        <div class="form-inline">
            <div class = "buttonwrapper" style = "display: flex; width: 100%; justify-content: space-between;">
                <button id="previous" onclick="previous()" style = "display: flex; color: white; background-color: #afa3f5;">Previous</button>
                <button id="next" onclick="next()" style = "display: flex; color: white; background-color: #afa3f5;">Next</button>
            </div>
        </div>
        <br/>
        <form class="form-inline">
            <label class="lead mr-2 ml-2" for="month">Jump To: </label>
            <select class="form-control col-sm-4" name="month" id="month" onchange="jump()">
                <option value=0>January</option>
                <option value=1>February</option>
                <option value=2>March</option>
                <option value=3>April</option>
                <option value=4>May</option>
                <option value=5>June</option>
                <option value=6>July</option>
                <option value=7>August</option>
                <option value=8>September</option>
                <option value=9>October</option>
                <option value=10>November</option>
                <option value=11>December</option>
            </select>


            <label for="year"></label><select class="form-control col-sm-4" name="year" id="year" onchange="jump()">
            <option value=2021>2021</option>
            <option value=2022>2022</option>
            <option value=2023>2023</option>
            <option value=2024>2024</option>
            <option value=2025>2025</option>
            <option value=2026>2026</option>
            <option value=2027>2027</option>
            <option value=2028>2028</option>
            <option value=2029>2029</option>
            <option value=2030>2030</option>
        </select></form>
    </div>
</div>


    `

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


document.getElementById('previous').onclick = previous;
document.getElementById('next').onclick = next;
document.getElementById('month').onclick = jump;
document.getElementById('year').onclick = jump;

}


document.getElementById('excited').onclick = happyCount;
document.getElementById('ok').onclick = okCount;
document.getElementById('sad').onclick = sadCount;
document.getElementById('mad').onclick = madCount;
document.getElementById('confused').onclick = confusedCount;
document.getElementById('explosive').onclick = explosiveCount;
document.getElementById('view-settings').onclick = showData;
document.getElementById('pro').onclick = profile;
document.getElementById('data').onclick = data;
document.getElementById('di').onclick = diary;


