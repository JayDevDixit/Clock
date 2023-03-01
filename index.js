let ampm = 'AM';
sound = new Audio("clock.wav");


sound.play()    
setInterval(()=>{
    sound.play()    
    d = new Date()
    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()
    h_rot = 30*h + m/2
    m_rot = 6*m
    s_rot = 6*s
    c1.style.transform = `rotate(${s_rot}deg)`
    c2.style.transform = `rotate(${m_rot}deg)`
    c3.style.transform = `rotate(${h_rot}deg)`

    if(h>12)
    ampm = 'PM'
    if(h>12)
    h = h-12
    hour.innerHTML = `${h}`
    minute.innerHTML = `${m}`
    second.innerHTML = `${s}`
    AMPM.innerHTML = `${ampm}`

})
setInterval(()=>{
date = new Date()
m = date.getMilliseconds()
mili_rot = m/2.78
milisecond.innerHTML = `${m}`
c4.style.transform = `rotate(${mili_rot}deg)`

},1)

today = new Date()
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Augest','September', 'October', 'November', 'December']
p = today.getDay()
q = today.getMonth()
r = today.getFullYear()
s = today.getDate()

day.innerHTML = `${days[p]}`
date.innerHTML = `${s}`
month.innerHTML = `${months[q]}`
year.innerHTML = `${r}`