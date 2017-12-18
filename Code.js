class Code{
	constructor(){
		this.char = ['Q','W','E','R','T','Y','U','I','M','F','A','H','L','S'];
		this.length = 5;
		this.cur = [];
	}
	start(){
		this.getChars(this.length);
		this.drop();
	}
	getChars(length){
		for(let i = 0;i<length;i++){
			this.getChar();
		}
	}
	getChar(){
		let num = Math.floor(Math.random()*this.char.length)
		let divs = document.createElement('div');
		let tops = Math.floor(Math.random()*100);
		let left = Math.floor((window.innerWidth - 400)*Math.random()+200);
		divs.style.cssText = `width:50px;height:50px;background:#ccc;color:#fff;
							font-size:20px;text-align:center;line-height:50px;
							position:absolute;top:${tops}px;left:${left}px;
							border-radius:5px`
		divs.innerText = this.char[num];
		document.body.appendChild(divs);
		this.cur.push(divs);
	}

	drop(){
        let that = this;
        setInterval(function(){
            for(let i = 0;i<that.cur.length;i++){
                let tops = that.cur[i].offsetTop + 10;
                that.cur[i].style.top = tops + 'px';
                if(tops >= 500){
                    document.body.removeChild(that.cur[i]);
                    that.cur.splice(i,1);
                    that.getChar();
                }
            }
        },100)
    }
}