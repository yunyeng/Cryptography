function vigenere(message, keyword){
	message = message.toLowerCase();
	keyword = keyword.toLowerCase();
	var plain = "abcdefghijklmnopqrstuvwxyz";
	var secret = "";
	var plainNew = [];
	var index = [];
	for(var i=0; i<keyword.length; i++)
		index.push(plain.indexOf(keyword[i]));
	var j = 0;
	for(i=0; i<index.length; i++){
		plainNew[j] = plain.slice(index[i],plain.length);
		plainNew[j] += plain.slice(0, index[i]);
		j++;
	}
	j = 0;
	for(i=0; i<message.length; i++){
		var indexxx = plain.indexOf(message[i]);		secret += plainNew[j][indexxx];
		j++;
		j = j % plainNew.length;
	}
	return secret;
}
function decrpyt(secret, keyword){
	secret = secret.toLowerCase();
	keyword = keyword.toLowerCase();
	var plain = "abcdefghijklmnopqrstuvwxyz";
	var message = "";
	var plainNew = [];
	var index = [];
	for(var i=0; i<keyword.length; i++)
		index.push(plain.indexOf(keyword[i]));
	var j = 0;
	for(i=0; i<index.length; i++){
		plainNew[j] = plain.slice(index[i],plain.length);
		plainNew[j] += plain.slice(0, index[i]);
		j++;
	}
	j = 0;
	for(i=0; i<secret.length; i++){
		var indexxx = plainNew[j].indexOf(secret[i]);		message += plain[indexxx];
		j++;
		j = j % plainNew.length;
	}
	return message;
}

console.log(vigenere("diverttroopstoeastridge", "WHITE"));
console.log(decrpyt("zpdxvpazhslzbhiwzbkmznm", "WHITE"));