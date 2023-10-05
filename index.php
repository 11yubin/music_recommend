<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>음악 추천 시스템</title>
    <link rel="stylesheet" type="text/css" href="styles.css"> <!-- CSS 파일 링크 -->
    <link rel="shortcut icon" href="favicon-32x32.png" />
</head>
<body>
<div class="menu-container">
    <a href="/index.php">새로고침</a>
</div>
<center>
    <h1><img id="logo" src="/muzik_logo.png" alt="Non-Song" style="margin-top: 50px;"></h1>
    <hr>
    <h3>Find Your Music Taste</h3>
    <br>
    <!-- 선택 옵션과 버튼 -->
    <form id="themeForm">
        <select id="themeSelect" name="theme">
            <option value="위로">위로가 필요할 때</option>
            <option value="에너지">에너지를 내고 싶을 때</option>
            <option value="여행">여행에 가는 길!</option>
            <option value="산책">가벼운 산책을 할 때</option>
            <option value="밤">센치한 새벽, 자기 전 감성</option>
            <option value="신남">기분이 날아갈 것 같을 때</option>
            <option value="눈">눈이 내리는 날</option>
            <option value="이별">이별했을 때</option>
            <option value="꿈">꿈과 희망에 가득찰 때</option>
            <option value="사랑">설레는 사랑을 시작할 때</option>
        </select>
        <button type="submit">음악 추천 받기</button>
    </form>

    <!-- 음악 목록 표시 -->
    <div id="musicList">
        <ul>

            <br>
            <table hidden id="musicTable">
            </table>
            <br><br>
        </ul>
    </div>
</center>

<!-- JavaScript 파일 연결 -->
<script src="scripts.js"></script>
</body>
</html>

