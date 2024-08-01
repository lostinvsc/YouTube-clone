export const API_KEY='AIzaSyDOkuPIZH49TR7lLh1E3mvP3Dcw6Kb7pgo'

export const views_convertor=(views)=>{

    if(views>=1000000){
        views=Math.floor((views/1000000))+'M' 
    }
    else if(views>=1000 && views<1000000){
        views=Math.floor((views/1000))+'k'
    }else{
        views=views;
    }

    return views;
}

