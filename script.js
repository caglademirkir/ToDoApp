var items = ["item1","item2","item3","item4"];

var html='';
var list = document.querySelector('#mylist');

items.forEach(function(item){
    CreateItem(item);
});

function CreateItem(item){
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className = 'list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('x');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);
    
    //delete item
    var close = document.getElementsByClassName('close');
    for(i=0;i<close.length;i++){
        close[i].addEventListener('click',function(){
            var li = this.parentElement;
            li.style.display='none';
            li.classList.remove('checked');
        })
    }
}

list.addEventListener('click',function(element){
    if(element.target.tagName='li'){
        element.target.classList.toggle('checked');
        ToggleDeleteAll();
    }
});

function ToggleDeleteAll(){
    var checked = document.querySelectorAll('.checked');
    if(checked.length>0){
        document.querySelector('#deleteall').classList.remove('d-none');
    }else{
        document.querySelector('#deleteall').classList.add('d-none');     
    }
}

//delete all
document.querySelector('#deleteall').addEventListener('click',function(){
    var element = document.querySelectorAll('.checked');
    element.forEach(function(elm){
        elm.style.display = 'none';
    })
});

//add item
var addbtn = document.querySelector('#btn-add');
addbtn.addEventListener('click',function(){
    var item = document.querySelector('#txt').value;
    if(item===''){
        alert('Lütfen bi değer giriniz.');
    }else{
        CreateItem(item);
    }

});
