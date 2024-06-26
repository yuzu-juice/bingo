function genNum(){
    var init = document.getElementById("init").value;
    init = parseInt(init);
    var term = document.getElementById("term").value;
    term = parseInt(term);

    if(isNaN(init) || isNaN(term)){
        document.getElementById('msg').innerHTML = '数字を入力してください。'+ '<br>';
        return;
    }

    if(term < init){
        document.getElementById('msg').innerHTML = '始まりの数の方が大きいので小さくしてください。'+ '<br>';
        return;
    }

    if(term < 0 || init < 0){
        document.getElementById('msg').innerHTML = '負の数は受け付けていません。' + '<br>';
        return;
    }
    
    document.getElementById("init").disabled = true;
    document.getElementById("term").disabled = true;
    document.getElementById("repeat").disabled = true;

    var random = Math.floor(Math.random() * (term - init + 1)) + init;
    const repeat = document.getElementById('repeat');
    var numbers = document.getElementById('num').innerHTML.split(', ').filter(Boolean).map(Number);

    if(repeat.checked){
        if(numbers.length == (term - init + 1)){
            document.getElementById('msg').innerHTML = 'すべての数が出現しました。リセットしてください。'+ '<br>';
            return;
        }

        while(numbers.includes(random)) {
            random = Math.floor(Math.random() * (term - init + 1)) + init;
        }
    }

    numbers.push(random);
    document.getElementById('num').innerHTML = numbers.join(', ');
    document.getElementById('recent').innerHTML = random;
}

function resetNum(){
    document.getElementById('num').innerHTML = '';
    document.getElementById('msg').innerHTML = '';
    document.getElementById('recent').innerHTML = '';
    document.getElementById("init").disabled = false;
    document.getElementById("term").disabled = false;
    document.getElementById("repeat").disabled = false;
}
