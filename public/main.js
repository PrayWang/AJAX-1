getCSS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')//readyState = 1
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            //下载完成，但不直到是成功还是失败，一般200到300之间代表成功
            if(request.status>=200&&request.status<300){    
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到HTML的head里
                document.head.appendChild(style)
                }else{
                    alert('加载CSS失败')
                }

            }
        };
        request.send();//readyState = 2
    };

getJS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200&&request.status<300){    
            // 创建script标签
            const script = document.createElement('script')
            //填写script内容
            script.innerHTML = request.response
            //插到HTML的body里
            document.body.appendChild(script)
                }else{
                    alert('加载JS失败')
                }
            }
        };
        request.send();//readyState = 2
    };
getHTML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200&&request.status<300){    
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
                }else{
                    alert('加载HTML失败')
                }
            }
        };
    request.send();
} 

getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status ===200){  
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())//.trim()消除回车
            }
        };
    request.send();
} 

getJSON.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status ===200){
            //JSON.parse()把符合JSON语法的字符串，变成JS对应类型的数据
            console.log(request.response)  
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            }
        };
    request.send();
} 

let n =1;
getPage.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n + 1}.json`)
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status ===200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li);
            })
            n +=1
            }
        };
    request.send();
} 
