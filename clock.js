function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

  if(m.length==1)
  m="0"+m;
  if(h.length==1)
  h="0"+h;
  if(s.length==1)
  s="0"+s;
  
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  
    var t = setTimeout(startTime, 500);
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
  if(m.length==1)
  m="0"+m;
  if(d.length==1)
  d="0"+d;
    document.getElementById("date").innerHTML = m + "•" + d + "•" + y;
    document.getElementById("epoch").innerHTML = Date.now();;
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  setInterval(() => {
    document.title = new Date().toLocaleTimeString();
  }, 1);