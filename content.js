const excited = document.getElementById('excited');
const happy = document.getElementById('happy');
const ok = document.getElementById('ok');
const grimacing = document.getElementById('grimacing');
const sad = document.getElementById('sad');
const depressed = document.getElementById('depressed');
const mad = document.getElementById('mad');
const explosive = document.getElementById('explosive');


// alert("World");
// alert(excited);

excited.addEventListener('click', () => {
    // console.log(chrome.storage.local.get("excited"));
    alert("Hello World");
    chrome.storage.local.get('excited', function (result) {
        var excited = result.excited;
        if (excited == undefined) {
            chrome.storage.local.set({"excited": 1});
        } else {
            chrome.storage.local.set({"excited" : excited + 1});
        }
    });
});

happy.addEventListener('click', () => {
    // console.log(chrome.storage.local.get("happy"));
    chrome.storage.local.get('happy', function (result) {
        var happy = result.happy;
        if (happy == undefined) {
            chrome.storage.local.set({"happy": 1});
        } else {
            chrome.storage.local.set({"happy" : happy + 1});
        }
    });
});

ok.addEventListener('click', () => {
    // console.log(chrome.storage.local.get("ok"));
    chrome.storage.local.get('ok', function (result) {
        var ok = result.ok;
        if (ok == undefined) {
            chrome.storage.local.set({"ok": 1});
        } else {
            chrome.storage.local.set({"ok" : ok + 1});
        }
    });
});

grimacing.addEventListener('click', () => {
    // console.log(chrome.storage.local.get("grimacing"));
    chrome.storage.local.get('grimacing', function (result) {
        var grimacing = result.grimacing;
        if (grimacing == undefined) {
            chrome.storage.local.set({"grimacing": 1});
        } else {
            chrome.storage.local.set({"grimacing" : grimacing + 1});
        }
    });
});


sad.addEventListener('click', () => {
    // console.log(chrome.storage.local.get("sad"));
    chrome.storage.local.get('sad', function (result) {
        var sad = result.sad;
        if (sad == undefined) {
            chrome.storage.local.set({"sad": 1});
        } else {
            chrome.storage.local.set({"sad" : sad + 1});
        }
    
    });
});

depressed.addEventListener('click', () => {
    // console.log(chrome.storage.local.get("depressed"));
    chrome.storage.local.get('depressed', function (result) {
        var depressed = result.depressed;
        if (depressed == undefined) {
            chrome.storage.local.set({"depressed": 1});
        } else {
            chrome.storage.local.set({"depressed" : depressed + 1});
        }
    
    });
});

mad.addEventListener('click', () => {
    // console.log(chrome.storage.local.get("mad"));
    chrome.storage.local.get('mad', function (result) {
        var mad = result.mad;
        if (mad == undefined) {
            chrome.storage.local.set({"mad": 1});
        } else {
            chrome.storage.local.set({"mad" : mad + 1});
        }
    
    });
});

explosive.addEventListener('click', () => {
    // console.log(chrome.storage.local.get("explosive"));
    chrome.storage.local.get('explosive', function (result) {
        var explosive = result.explosive;
        if (explosive == undefined) {
            chrome.storage.local.set({"explosive": 1});
        } else {
            chrome.storage.local.set({"explosive" : explosive + 1});
        }
    
    });
});