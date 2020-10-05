let link = function (id = 1, name = 'Trieu Ngo Quang ', age = 21, address = 'Ha Noi ') {
    let alretStr = `Đây là ${name} 
    đang sống tại ${address}
    hiện tại ${age}`
    console.log(alretStr);
}
link();
link(3,'Trieu', 21,'Thai Binh');
