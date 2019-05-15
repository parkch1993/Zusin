var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var template = require('./lib/template.js');

app.use(express.static('public'));

app.get('/', function(request, response) { 
  fs.readdir('./data', function(error, filelist){
    var html = template.HTML(`
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/default.css">
    `,
    `<section class="display-section">
    <div class="container">
        <a href="/"><h2 class="sec-tit">Social enterprise</h2></a>
        <p class="desc">사회 문제 해결을 위해 창립된 쥬신은 취약 계층에게 도움이 되는 비즈니스 서비스를 통해 가치가 더해집니다. <br>쥬신의 솔루션과 플랫폼을 바탕으로, 여러분과 함께 더 나은 세상을 설계합니다</p>
    </div>
</section>
<section class="promotion-section">
<div class="container">
    <ul class="promo-list">
        <li>
            <a href="/Members">
                <img src="img/promo02.png" alt="/page/Members">
                   <h3>멤버</h3>
                <p>사회적 가치의 극대화를 위해 노력하고 있는 다섯 명의 쥬신 멤버들을 확인하세요.</p>
            </a>
        </li>
        <li>
            <a href="/Work">
                <img src="img/promo03.png" alt="/page/Work">
                <h3>서비스</h3>
                <p>사회적 기업은 어떤 서비스를 제공할까요? 쥬신이 제공하는 서비스를 확인할 수 있습니다. </p>
            </a>
        </li>
        <li>
            <a href="/Projects">
                <img src="img/promo04.png" alt="/page/Projects">
                <h3>프로젝트</h3>
                <p>현재 쥬신이 진행하고 있는 프로젝트를 한 눈에 확인해보세요!</p>
            </a>
        </li>
        <li>
            <a href="/About">
                <img src="img/promo01.png" alt="/page/About">
                <h3>고객지원</h3>
                <p>궁금한 사항이 있으신가요? 여기를 클릭해서 확인해보세요!</p>
            </a>
        </li>
    </ul>
</div>
</section>`,
    ``
    );
    response.send(html);
  });
});

app.get('/:pageId', function(request, response) { 
  fs.readdir('./data', function(error, filelist){
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
      var html = template.HTML(`
      <link rel="stylesheet" type="text/css" href="css/reset.css">
      <link rel="stylesheet" type="text/css" href="css/default.css">
      `,
      ``,
      `${description}`
      );
      response.send(html);
    });
  });
});

app.listen(3000, function() {
  console.log('Anma app listening on port 3000!')
});