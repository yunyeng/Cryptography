function vigenere(message, keyword){
	message = message.toLowerCase();
	keyword = keyword.toLowerCase();
	var plain = "abcdefghijklmnopqrstuvwxyz";
	var plainNew = [];
	var index = [];
	var secret = "";
	for(i=0; i<keyword.length; i++){
		index.push(plain.indexOf(keyword[i]));
	}
	var j = 0;
	for(i=0; i<index.length; i++){
		plainNew[j] = plain.slice(index[i],plain.length);
		plainNew[j] += plain.slice(0, index[i]);
		j++;
	}
	var indexxx;
	j = 0;
	for(i=0; i<message.length; i++){
		indexxx = plain.indexOf(message[i]);		secret += plainNew[j][indexxx];
		j++;
		j = j % plainNew.length;
	}
	return secret;
}

console.log(vigenere("CRYPTOISSHORTFORCRYPTOGRAPHY", "ABCD"));