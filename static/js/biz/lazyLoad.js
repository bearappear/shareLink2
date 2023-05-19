function loadJS( url, callback ){

    var script = document.createElement('script'),
        fn = callback || function(){};

    script.type = 'text/javascript';

    if(script.readyState){
        script.onreadystatechange = function(){
            if( script.readyState == 'loaded' || script.readyState == 'complete' ){
                script.onreadystatechange = null;
                fn();
            }
        };
    }else{
        script.onload = function(){
            fn();
        };
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function loadCSS( url, callback ){

    var link = document.createElement('link'),
        fn = callback || function(){};

        link.rel = 'stylesheet';

    if(link.readyState){
        link.onreadystatechange = function(){
            if( link.readyState == 'loaded' || link.readyState == 'complete' ){
                link.onreadystatechange = null;
                fn();
            }
        };
    }else{
        link.onload = function(){
            fn();
        };
    }

    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}