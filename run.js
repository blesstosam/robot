const Nightmare=require('nightmare');
const nightmare=Nightmare({show:true});

const run=async()=>{	
	await login();
	await writeDiray();
}



const login=async()=>{
	
	await nightmare.goto('https://segmentfault.com/');
	await nightmare.wait('.btn-signin');      //等到登录按钮出现再执行点击
	
	await nightmare.click('.btn-signin');
	await nightmare.wait('input[name=username]');
	await nightmare.wait('input[name=password]');
	
	await nightmare.type('input[name="username"]','805902285@qq.com');
	await nightmare.type('span[class="pull-right"]+input','WL19920708');
	
	await nightmare.click('button[class="btn btn-primary pull-right pl20 pr20"]');
}

const writeDiray=async()=>{
	
	await nightmare.click('button[class="btn btn-primary dropdown-toggle"]');
	await night.click('ul[class="dropdown-menu"] :nth-child(4)');
}

run();













