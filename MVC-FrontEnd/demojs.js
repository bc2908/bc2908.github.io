$(document).ready(function() {
    var dogs = [
        {
            name: 'dog #1',
            counter: 0,
            src: 'images/dog1.jpg'
        },
        {
            name: 'dog2',
            counter: 0,
            src: 'images/dog2.jpg'
        },
        {
            name: 'dog3',
            counter: 0,
            src: 'images/dog3.jpg'
        },
        {
            name: 'dog4',
            counter: 0,
            src: 'images/dog4.jpg'
        },{
            name: 'dog5',
            counter: 0,
            src: 'images/dog5.jpeg'
        }
    ];
    function dogClick(x, y, z) {
        $('#anh-cho').attr("src", x);
        $('#ten').text(y);
        $('#counter').text(z);
    }
    $('#dog1').click(function() {dogClick(dogs[0].src, dogs[0].name, dogs[0].counter)})
    $('#dog2').click(function() {dogClick(dogs[1].src, dogs[1].name, dogs[1].counter)})
    $('#dog3').click(function() {dogClick(dogs[2].src, dogs[2].name, dogs[2].counter)})
    $('#dog4').click(function() {dogClick(dogs[3].src, dogs[3].name, dogs[3].counter)})
    $('#dog5').click(function() {dogClick(dogs[4].src, dogs[4].name, dogs[4].counter)})

    $('#anh-cho').click(function() {
        var x = $('#anh-cho').attr('src');
        var counter;
        console.log(x)
        for(var i=0; i < dogs.length; i++) {
            console.log(dogs[i].src)
            if (x == dogs[i].src) {
                dogs[i].counter ++;
                $('#counter').text(dogs[i].counter);
            }   
        }
        
        
    })

})