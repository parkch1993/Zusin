module.exports = {
  HTML:function(css,home,body){
    return `
    <!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<title>Zusin - Social enterprise</title>
${css}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="js/indigo.min.js">
</script>
</head>
<body>
    <div id="wrap">
        <header class="header cfixed">
            <h1 class="logo"><a href="/">Zusin</a></h1>
                <nav>
                    <ul class="gnb">
                        <li><a href="/Members">멤버</a></li>
                        <li><a href="/Work">서비스</a></li>
                        <li><a href="/Projects">프로젝트</a></li>
                        <li><a href="/About">고객지원</a></li>
                    </ul>
                </nav>
            <span class="menu-toggle-btn">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <hr>
        </header>

            <article class="slider"></article>

        ${home}
        ${body}
        <section class="footer-section">
            <div class="container">
                <div class="footer-list">
                    <h1>SHIEL:D</h1>
                    <h2>(주) 쥬신 정보보호 담당자: 정영호, 사업자등록번호: 889-76-00219, 대표자: 정영호<br>
                        Tel: 010-7550-3091, Fax: -, 주소: 서울특별시 마포구 서교동 양화로 161 케이스퀘어, 6층 618호<br>
                        제휴문의: zusin.zeo@gmail.com</h2>
                    <h3>Copyright © 2018 Zusin All rights reserved.</h3>
                </div>
        </div>
        </section>
    </div>
</body>
</html>
    `;
  }
}