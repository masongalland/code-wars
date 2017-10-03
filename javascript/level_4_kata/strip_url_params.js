function stripUrlParams(url, paramsToStrip){
    let arr = url.split("?");
    let params = arr[1] ? arr[1].split("&") : []
    let newParams = "";
    
    if(arguments[1]){
      params = params.filter((e, i) => arguments[1].indexOf(e[0]) === -1)
    }
    
    for(let i = 0; i < params.length; i++){
      if(newParams.indexOf(params[i][0]) === -1){
        newParams += params[i] + "&"
      }
    }
    if(newParams[newParams.length - 1] === "&") {
      newParams = newParams.slice(0, -1)
    }
    
    var answer = arr[0] + "?" + newParams;
    if(answer[answer.length - 1] === "?"){
      return answer.slice(0, -1)
    }
    else {
      return answer;
    }
  }
