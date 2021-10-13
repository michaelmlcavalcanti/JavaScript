function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebeH.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemH.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adultoH.jpg')
            }else{
                img.setAttribute('src', 'idosoH.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebeM.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemM.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adultoM.jpg')
            }else{
                img.setAttribute('src', 'idosoM.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
